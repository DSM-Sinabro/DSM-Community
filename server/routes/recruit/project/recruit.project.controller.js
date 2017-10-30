const recruit_project = require('../../../database/models/recruit-project');

exports.getPostList = (req, res) => {

    recruit_project.findAll() // 모든 글 조회 (작성 날짜순)
        .then(posts => {
            res.status(200).json(posts);
        }) // 성공시 200, JSONArray 반환
        .catch(error => {
            res.status(500).json({
                message: error.message
            });
        }); // 실패시 400, message 반환
}

exports.createPost = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const {
        title,
        contents,
        positions,
        startDate,
        endDate,
        tags,
        images,
        recruitmentNumber
    } = req.body;

    recruit_project.create(authorUid, title, contents, recruitmentNumber, positions, startDate, endDate, tags, images)
        .then(posts => {
            res.sendStatus(201);
        }) // 글 생성 성공시 201 반환
        .catch(err => {
            res.status(400).json({
                "message": err.message
            });
        }); // 글 생성 실패시 400, message 반환
}

exports.revisePost = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const pid = req.params.pid;

    const {
        title,
        contents,
        positions,
        startDate,
        endDate,
        tags,
        images,
        recruitmentNumber,
        currentRecruitment
    } = req.body;

    recruit_project.findOne({"_id": pid})
        .then(post => {
            if (!post) throw new Error("Post Not Found");
            else if (post.author != authorUid) throw new Error("Forbidden");
            else return post.update({
                "$set": {
                    title,
                    contents,
                    positions,
                    startDate,
                    endDate,
                    tags,
                    images,
                    recruitmentNumber,
                    currentRecruitment
                }
            })
        })
        .then(updated => {
            console.log(updated);
            res.sendStatus(200);
        })
        .catch(err => {
            if (err.message == "Post Not Found") {
                res.sendStatus(404); // 존재하지 않는 글 : 404
            } else if (err.message == "Forbidden") {
                res.sendStatus(403); // 작성자 아님(권한 없음) : 403
            } else {
                res.status(500).json({
                    "message": err.message // 서버 오류 : 500
                });
            }
        })
}

exports.dropPost = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const pid = req.params.pid;

    recruit_project.findOne({"_id": pid}) // 글번호를 기준으로 게시글 검색
        .then(post => {
            if (!post) throw new Error("Post Not Found"); // 존재하지 않는 글
            else if (post.author != authorUid) throw new Error("Forbidden"); // 작성자가 아닌경우
            else return post.remove();
        })
        .then(removed => {
            res.sendStatus(200); // 삭제됨 : 200
        })
        .catch(err => {
            if (err.message == "Post Not Found") {
                res.sendStatus(404); // 존재하지 않는 글 : 404
            } else if (err.message == "Forbidden") {
                res.sendStatus(403); // 작성자 아님(권한 없음) : 403
            } else {
                res.status(500).json({
                    "message": err.message // 서버 오류 : 500
                });
            }
        });
}

exports.readPost = (req, res) => {
    const user = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const pid = req.params.pid;

    recruit_project.findOne({"_id": pid}).populate("author", ["name", "profile"]).exec()
        .then(post => {
            if (!post) res.sendStatus(404);
            else {
                if (post.views.indexOf(user) < 0) { // 아직 해당 글을 조회한 적이 없는 사람이면
                    post.views.push(user); // views에 uid push
                    post.markModified('views');
                    post.save(); // save document
                }
                res.status(200).json(post);
            }
        })
        .catch(err => {
            res.status(500).json({
                "message": err.message
            })
        });
}