const recruit_project = require('../../../database/models/recruit-project');

exports.getPostList = (req, res) => {

    const respond = (posts) => {
        res.status(200).json(posts);
    }

    const onError = (error) => {
        res.status(500).json({
            message: error.message
        });
    }

    recruit_project.findAll() // 모든 글 조회 (작성 날짜순)
        .then(respond) // 성공시 200, JSONArray 반환
        .catch(onError); // 실패시 400, message 반환
}

exports.createPost = (req, res) => {
    const writer = req.decoded._id;
    const {
        title,
        major,
        startPeriod,
        endPeriod,
        users,
        option,
        content,
        position,
    } = req.body;

    const respond = (post) => {
        res.sendStatus(201);
    }
    const onError = (error) => {
        res.status(400).json({
            message: error.message
        });
    }

    recruit_project.create(title, major, startPeriod, endPeriod, users, option, content, position, writer) // 글 생성
        .then(respond) // 글 생성 성공시 201 반환
        .catch(onError); // 글 생성 실패시 400, message 반환
}

exports.revisePost = (req, res) => {
    const user = req.decoded._id;
    const pid = req.params.pid;

    const {
        title,
        major,
        startPeriod,
        endPeriod,
        users,
        option,
        content,
        position,
    } = req.body;

    const respond = (result) => {
        if (result.n === 0) throw new Error('Forbidden');
        res.sendStatus(200);
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        });
    }

    recruit_project.update({
            "_id": pid,
            "writer": user
        }, {
            $set: {
                title,
                major,
                startPeriod,
                endPeriod,
                users,
                option,
                content,
                position
            }
        }).exec() // 작성자와 글 번호를 기준으로 검색 후 업데이트
        .then(respond) // 작성자가 작성한 글이 아닐 땐 Error, 글 수정이 성공적으로 완료되었을 때엔 200 반환
        .catch(onError); // 위 이유로 반환된 Erorr message와 함께 403 Forbidden 반환
}

exports.dropPost = (req, res) => {
    const user = req.decoded._id;
    const pid = req.params.pid;

    const respond = (post) => {
        if (!post) throw new Error('Forbidden');
        res.sendStatus(200);
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        });
    }

    recruit_project.findOneAndRemove({
            "writer": user,
            "_id": pid
        }).exec() // 작성자와 글 번호를 기준으로 검색 후 삭제
        .then(respond) // 작성자가 작성한 글이 아닐 땐 Error, 글 수정이 성공적으로 완료되었을 때엔 200 반환
        .catch(onError); // 위 이유로 반환된 Erorr message와 함께 403 Forbidden 반환
}

exports.readPost = (req, res) => {
    const pid = req.params.pid;

    const respond = (post) => {
        res.status(200).json(post);
    }

    const onError = (error) => {
        res.status(500).json({
            message: error.message
        });
    }

    recruit_project.findById(pid).populate('writer',['name','cardinal','code']).exec()
    .then(respond)
    .catch(onError);
}