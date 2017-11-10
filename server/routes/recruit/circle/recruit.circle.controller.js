const recruit_circle = require('../../../database/models/recruit-study');


exports.createPost = (req, res) => {
    // const writer = req.decoded._id;
    const writer='59f7271518c2e3c63994de93';
    const {
        title,
        contents,
        recruitmentNumber,
        startDate,
        endDate,
        tags,
        images
    } = req.body;
    console.log(req.body);
    console.log(title);
    recruit_study.createPost(writer, title, contents, recruitmentNumber, startDate, endDate, tags,images) // 글 생성
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            res.status(400).json({
                message: error.message
            });
        }); // 글 생성 실패시 400, message 반환
}

exports.getPostList = (req, res) => {

    recruit_circle.getpostList() // 모든 글 조회 (작성 날짜순)
        .then((posts) => {
            res.status(200).json(posts);
        }) // 성공시 200, JSONArray 반환
        .catch((error) => {
            res.status(500).json({
                message: error.message
            });
        }); // 실패시 400, message 반환
}


exports.revisePost = (req, res) => {
    // const user = req.decoded._id;
    const user='59f7271518c2e3c63994de93';
    
    const pid = req.params.pid;

    const {
        title,
        contents,
        recruitmentNumber,
        tags,
        images
    } = req.body;
    recruit_circle.revisePost(pid, user, title, contents, recruitmentNumber,tags,images)
        .exec() // 작성자와 글 번호를 기준으로 검색 후 업데이트
        .then((result) => {
            if (result.n === 0) throw new Error('Forbidden');
            res.sendStatus(200);
        }) // 작성자가 작성한 글이 아닐 땐 Error, 글 수정이 성공적으로 완료되었을 때엔 200 반환
        .catch((error) => {
            res.status(403).json({
                message: error.message
            });
        }); // 위 이유로 반환된 Erorr message와 함께 403 Forbidden 반환
}

exports.dropPost = (req, res) => {
    // const user = req.decoded._id;
    const user='59f7271518c2e3c63994de93';
    
    const pid = req.params.pid;

    recruit_circle.dropPost(pid)
        .exec() // 작성자와 글 번호를 기준으로 검색 후 삭제
        .then( (post) => {
            if (!post) throw new Error('Forbidden');
            res.sendStatus(200);
        }) // 작성자가 작성한 글이 아닐 땐 Error, 글 수정이 성공적으로 완료되었을 때엔 200 반환
        .catch(onError = (error) => {
            res.status(403).json({
                message: error.message
            });
        }); // 위 이유로 반환된 Erorr message와 함께 403 Forbidden 반환
}

exports.readPost = (req, res) => {
    const pid = req.params.pid;
    recruit_circle.readPost(pid).populate('writer',['name','cardinal','code']).exec()
    .then((post) => {
        res.status(200).json(post);
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}