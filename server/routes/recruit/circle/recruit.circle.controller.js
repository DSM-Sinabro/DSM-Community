const recruit_circle = require('../../../database/models/recruit-study');

/**
 * @swagger
 * /recruit/circle:
 *   post:
 *     tags:
 *       - recruit
 *     description: Makes a new article.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: Article's title
 *         in: body
 *         required: true
 *       - name: contents
 *         description: Article's content.
 *         in: body
 *         required: true
 *       - name: recruitmentNumber
 *         description: This option determines how many people will be hired.
 *         in: body
 *         required: true
 *       - name: startDate
 *         description: This option determines when the start date is.
 *         in: body
 *         required: true     
 *       - name: endDate
 *         description: This option determines when the end date is.
 *         in: body
 *         required: true
 *       - name: tags
 *         description: Article tags.
 *         in: body
 *         required: true    
 *       - name: images
 *         description: Article images (by link)
 *         in: body
 *         required: true    
 *     responses:
 *       201:
 *         description: Successfully created
 * 		 400:
 *         description: Create failed
 */
exports.createPost = (req, res) => {
    const writer = req.decoded._id||'59f7271518c2e3c63994de93';
    // const writer='59f7271518c2e3c63994de93';
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
            res.status(500).json({
                message: error.message
            });
        }); // 글 생성 실패시 400, message 반환
}

/**
 * @swagger
 * /recruit/circle:
 *   get:
 *     tags:
 *       - recruit
 *     description: Gets article list.
 *     produces:
 *       - application/json
 *     parameters:  
 *     responses:
 *       200:
 *         description: Successfully found, so Returns JSON Array
 * 		 400:
 *         description: Failed
 */
exports.getPostList = (req, res) => {

    recruit_circle.getpostList() // 모든 글 조회 (작성 날짜순)
        .then((posts) => {
            if (!post) {
                // throw new Error('Forbidden');
                res.status(204).json({
                    message:"No Content"
                });
            }
            res.sendStatus(200).json({
                posts
            });
        }) // 성공시 200, JSONArray 반환
        .catch((error) => {
            res.status(400).json({
                message: error.message
            });
        }); // 실패시 400, message 반환
}

/**
 * @swagger
 * /recruit/circle:
 *   put:
 *     tags:
 *       - recruit
 *     description: Updates an article.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: pid
 *         description: Article's id
 *         in: body
 *         required: true
 *       - name: title
 *         description: Article's title
 *         in: body
 *         required: true
 *       - name: contents
 *         description: Article's content.
 *         in: body
 *         required: true
 *       - name: recruitmentNumber
 *         description: This option determines how many people will be hired.
 *         in: body
 *         required: true
 *       - name: tags
 *         description: Article tags.
 *         in: body
 *         required: true    
 *       - name: images
 *         description: Article images (by link)
 *         in: body
 *         required: true    
 *     responses:
 *       200:
 *         description: Successfully updated.
 * 		 403:
 *         description: Forbidden
 */
exports.revisePost = (req, res) => {
    // const user = req.decoded._id;
    const user = req.decoded._id||'59f7271518c2e3c63994de93';
    
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

/**
 * @swagger
 * /recruit/circle:
 *   delete:
 *     tags:
 *       - recruit
 *     description: Deletes an article.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: pid
 *         description: Article's ID.
 *         in: parameter
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully found, so Returns JSON Array
 * 		 400:
 *         description: Failed
 */
exports.dropPost = (req, res) => {
    // const user = req.decoded._id;
    const user = req.decoded._id||'59f7271518c2e3c63994de93';
    
    const pid = req.params.pid;

    recruit_circle.dropPost(pid)
        .exec() // 작성자와 글 번호를 기준으로 검색 후 삭제
        .then( (post) => {
            if (!post) {
                // throw new Error('Forbidden');
                res.status(204).json({
                    message:"No Content"
                });
            }
            res.sendStatus(200);
        }) // 작성자가 작성한 글이 아닐 땐 Error, 글 수정이 성공적으로 완료되었을 때엔 200 반환
        .catch(onError = (error) => {
            if(error.message == "Forbidden"){
                res.status(403).json({
                    message: error.message
                });
            }
            res.status(500).json({
                message: error.message
            });
        }); // 위 이유로 반환된 Erorr message와 함께 403 Forbidden 반환
}

/**
 * @swagger
 * /recruit/circle:
 *   get:
 *     tags:
 *       - recruit
 *     description: Gets an article.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: pid
 *         description: Article's ID.
 *         in: parameter
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully found, so Returns JSON Array
 * 		 500:
 *         description: Failed
 */
exports.readPost = (req, res) => {
    const pid = req.params.pid;
    recruit_circle.readPost(pid).populate('writer',['name','cardinal','code']).exec()
    .then((post) => {
        if (!post) {
            // throw new Error('Forbidden');
            res.status(204).json({
                message:"No Content"
            });
        }
        res.sendStatus(200);   
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}