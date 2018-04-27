const recruit_mentoring = require('../../../database/models/recruit-project');

/**
 * @swagger
 * /recruit/mentoring:
 *   get:
 *     description: 멘토링 post의 리스트를 가지고 옵니다
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

    recruit_mentoring.getpostList() // 모든 글 조회 (작성 날짜순)
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
            res.status(500).json({
                message: error.message
            });
        }); // 실패시 400, message 반환
}
/**
 * @swagger
 * /recruit/mentoring/:pid:
 *   post:
 *     description: post를 작성합니다
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: 제목
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: titleExample
 *       - name: contents
 *         description: post 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: String
 *           example: sfdasdfasfㅏㅁ
 *       - name: startDate
 *         description: 시작일
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 2000.12.12
 *       - name: endDate
 *         description: 마감일
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 2000.12.12
 *       - name: tags
 *         description: 태그들
 *         in: body
 *         required: true
 *         schema:
 *           type: array
 *           example: ["123","122"]
 *       - name: images
 *         description: 이미지들
 *         in: body
 *         required: false
 *         schema:
 *           type: array
 *           example: ["123","122"]
 *       - name: recruitmentNumber
 *         description: 채용 예정수
 *         in: body
 *         required: true
 *         schema:
 *           type: number
 *           example: 3
 *       - name: currentRecruitment
 *         description: 현재 채용수
 *         in: body
 *         required: true
 *         schema:
 *           type: number
 *           example: 3
 *     responses:
 *       200:
 *         description: pid에 해당하는 post가 수정되었습니다
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *       403:
 *         description: 작성자아님
 *       404:
 *         description: 게시글 없음 / 카테고리 없음
 *       500:
 *         description: 인터넷 서버 오류
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
    // console.log(req.body);
    // console.log(title);

    recruit_mentoring.createPost(writer, title, contents, recruitmentNumber, startDate, endDate, tags,images) // 글 생성
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
 * /recruit/mentoring/:pid:
 *   put:
 *     description: 해댱하는 pid의 post를 수정합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: 제목
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: titleExample
 *       - name: contents
 *         description: post 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: String
 *           example: sfdasdfasfㅏㅁ
 *       - name: startDate
 *         description: 시작일
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 2000.12.12
 *       - name: endDate
 *         description: 마감일
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 2000.12.12
 *       - name: tags
 *         description: 태그들
 *         in: body
 *         required: false
 *         schema:
 *           type: array
 *           example: ["123","122"]
 *       - name: images
 *         description: 이미지들
 *         in: body
 *         required: false
 *         schema:
 *           type: array
 *           example: ["123","122"]
 *       - name: recruitmentNumber
 *         description: 채용 예정수
 *         in: body
 *         required: true
 *         schema:
 *           type: number
 *           example: 3
 *       - name: currentRecruitment
 *         description: 현재 채용수
 *         in: body
 *         required: true
 *         schema:
 *           type: number
 *           example: 3
 * 
 *     responses:
 *       200:
 *         description: pid에 해당하는 post가 수정되었습니다
 *       403:
 *         description: 작성자아님
 *       404:
 *         description: 게시글 없음 / 카테고리 없음
 *       500:
 *         description: 인터넷 서버 오류
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
    recruit_mentoring.revisePost(pid, user, title, contents, recruitmentNumber,tags,images)
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
 * /recruit/mentoring/:pid:
 *   delete:
 *     description: 해댱하는 pid의 post를 지웁니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: pid
 *         description: 댓글 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: int
 *           example: 3
 *     responses:
 *       200:
 *         description: pid에 하는 post 삭제
 *       403:
 *         description: 작성자가 아님
 *       404:
 *         description: 게시글 없음
 *       500:
 *         description: 인터넷 서버 오류
 */

exports.dropPost = (req, res) => {
    // const user = req.decoded._id;
    const user = req.decoded._id||'59f7271518c2e3c63994de93';
    
    const pid = req.params.pid;

    recruit_mentoring.dropPost(pid)
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
 * /recruit/mentoring/:pid:
 *   get:
 *     description: 해댱하는 pid의 post를 불러옵니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: pid
 *         description: 댓글 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: int
 *           example: 3
 *     responses:
 *       200:
 *         description: json으로 post 리턴
 *       404:
 *         description: 게시글 없음 / 카테고리 없음
 *       500:
 *         description: 인터넷 서버 오류
 */
exports.readPost = (req, res) => {
    const pid = req.params.pid;
    recruit_mentoring.readPost(pid).populate('writer',['name','cardinal','code']).exec()
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