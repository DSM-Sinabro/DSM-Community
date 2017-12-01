const recruit_project = require('../../../database/models/recruit-project');

/**
 * @swagger
 * definition:
 *   project:
 *     properties:
 *       _id:
 *         description: 게시글 고유 id
 *         type: string
 *         example: 5a1c17b80fc3511173bfea57
 *       to:
 *         description: 대상 게시글 글 번호
 *         type: integer
 *         example: 1
 *       category:
 *         description: 해당 게시글 카테고리 (Recruit-Project | Recruit-Study | Recruit-Competition | Recruit-Circle | Notice)
 *         type: string
 *         example: Recruit-Project
 *       image:
 *         description: 해싱된 이미지 이름
 *         type: string
 *         example: 59a0295d684cca4cb68bb64c
 */
/**
 * @swagger
 * /recruit/project/:pid:
 *   get:
 *     tags:
 *       - project
 *     description: 글 목록 불러오기
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 글 올리기 성공
 *         schema:
 *           $ref: '#definitions/post'
 */
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
/**
 * @swagger
 * /recruit/project:
 *   post:
 *     tags:
 *       - project
 *     description: 새로운 글을 올립니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contents
 *         description: 글 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 어쩌구 저쩌구
 *       - name: to
 *         description: 게시글 고유 아이디(글번호)
 *         in: body
 *         required: true
 *         schema:
 *           type: integer   
 *           example: 1 
 *       - name: image
 *         description: 해시된 이미지 이름
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 1euhcuh34cjeansdu
 *     responses:
 *       201:
 *         description: 글 올리기 성공
 *       400:
 *         description: 게시글 없음
 *       500:
 *         description: 인터넷 서버 오류
 */
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
/**
 * 
 * @swagger
 * /recruit/project/:pid:
 *   put:
 *     tags:
 *       - project
 *     description: 글을 수정합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contents
 *         description: 댓글 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 글 수정해보리기~
 *       - name: image
 *         description: 해시된 이미지 이름
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 1euhcuh34cjeansdu
 *     responses:
 *       200:
 *         description: 글 수정 성공
 *       400:
 *         description: 게시글 없음
 *       401:
 *         description: 로그인 안됨
 *       403:
 *         description: 권한 없음(작성자 아님)
 *       500:
 *         description: 인터넷 서버 오류
 */
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

    recruit_project.findOne({
            "_id": pid
        })
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
/**
 * 
 * @swagger
 * /recruit/project/:pid:
 *   delete:
 *     tags:
 *       - project
 *     description: 작성된 글을 삭제합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: 글 삭제 성공
 *       400:
 *         description: 게시글 없음
 *       401:
 *         description: 로그인 안됨
 *       403:
 *         description: 권한 없음(작성자 아님)
 *       500:
 *         description: 인터넷 서버 오류
 */ㄴ
exports.dropPost = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const pid = req.params.pid;

    recruit_project.findOne({
            "_id": pid
        }) // 글번호를 기준으로 게시글 검색
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

    recruit_project.findOne({
            "_id": pid
        }).populate([{
            "path": "author",
            "select": ["name", "profile"]
        }, {
            "path": "comments",
            "select": ["author", "contents", "image", "writeDate"],
            "populate": {
                "path": "author",
                "select": ["name", "profile"]
            }
        }]).exec()
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