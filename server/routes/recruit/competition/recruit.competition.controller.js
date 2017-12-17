const recruit_competition = require('../../../database/models/recruit-competition');



/**
 * @swagger
 * definition:
 *   Recruit-Competition:
 *     properties:
 *       _id:
 *         description: 글 번호
 *         type: integer
 *         example: 1
 *       author:
 *         description: 작성자
 *         type: object
 *         $ref: '#/definitions/User'
 *       contents:
 *         description: 글 내용
 *         type: string
 *         example: 글내용이야 ㅋㅋ 김건 죽었다.
 *       link: 
 *         description: 대회 링크
 *         type: string
 *         example: https://www.이대회.com
 *       positions:
 *         description: 구하는 포지션들
 *         type: array
 *         example:
 *           - 웹 백엔드 개발자
 *           - 웹 프론트엔드 개발자
 *       startDate:
 *         description: 시작 날짜
 *         type: string
 *         format: date
 *         example: 2017-11-30 23:59:59
 *       endDate:
 *         description: 마감 날짜
 *         type: string
 *         format: date
 *         example: 2017-12-31 23:59:59
 *       tags: 
 *         description: 해시태그 리스트
 *         type: array
 *         example:
 *           - 앱잼
 *           - 14회_앱잼
 *           - SK_회장단
 *       images:
 *          description: 해싱된 이미지 이름 배열
 *          type: array
 *          example:
 *            - 5973736f0d00ce5c3a260f3c
 *            - 597373920d00ce5c3a260f3e
 *       recruitmentNumber:
 *          description: 모집 인원
 *          type: integer
 *          example: 5
 *       currentRecruitment:
 *          description: 현재 모집된 인원
 *          type: integer
 *          example: 0
 *          minimum: 0
 *          maximum: recruitmentNumber
 *          default: 0
 *       comments:
 *         description: 댓글 목록
 *         type: array
 *         items:
 *           $ref: '#/definitions/Comment'
 */

/**
 * @swagger
 * /recruit/competition:
 *   get:
 *     tags:
 *       - Recruit-Competition
 *     description: 모든 대회 게시글을 가져옵니다.
 *     parameters:
 *     responses:
 *       200: 
 *         description: 게시글 조회 성공 
 *         schema:
 *         type: array
 *         items:
 *           $ref: '#/definitsions/Recruit-Competition'
 *       500: 
 *         description: 서버 오류
 */
exports.getPostList = (req, res) => {

    recruit_competition.findAll() // 모든 글 조회 (작성 날짜순)
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
 * /recruit/competition:
 *   post:
 *     tags:
 *       - Recruit-Competition
 *     description: 대회 인원 모집 게시글을 작성합니다.
 *     parameters:
 *       - name: title
 *         description: 게시글 제목
 *         type: string
 *         schema:
 *           example: 앱잼 나갈 사람~
 *         in: body
 *         required: true
 *       - name: contents
 *         description: 게시글 내용
 *         type: string
 *         schema:
 *           example: 앱잼 팀빌딩 최소 3소속 실화냐 다큐냐 맨큐냐 
 *         in: body
 *         required: true
 *       - name: link
 *         description: 대회 링크 (신청링크 등)
 *         type: string
 *         in: body
 *         schema:
 *           format: url
 *           example: http://www.앱잼.kr
 *         required: true
 *       - name: positions
 *         description: 모집 포지션
 *         in: body
 *         type: array
 *         schema:
 *           example:
 *               - 웹 백엔드 개발자
 *               - 웹 프론트엔드 개발자 (React.js)
 *         required: true
 *       - name: tags
 *         description: 해시태그
 *         in: body
 *         type: array
 *         schema:
 *           example:
 *             - 앱잼
 *             - 14th_AppJam
 *         required: true
 *       - name: startDate
 *         in: body
 *         type: string
 *         format: date
 *         description: 시작 날짜
 *         schema:
 *           example: 2017-12-28 12:28:00
 *         required: true
 *       - name: endDate
 *         in: body
 *         type: string
 *         format: date
 *         description: 마감 날짜
 *         schema:
 *           example: 2017-12-28 12:28:59
 *         required: true
 *       - name: images
 *         description: 첨부 이미지 해시된 이름 배열 (리스트)
 *         type: array
 *         in: body
 *         schema:
 *           example:
 *            - 5973736f0d00ce5c3a260f3c
 *            - 597373920d00ce5c3a260f3e
 *         required: true
 *       - name: recruitmentNumber
 *         description: 모집 인원
 *         in: body
 *         type: integer
 *         schema:
 *           default: 1
 *           minimum: 1
 *           example: 5
 *         required: true
 *     responses:
 *       201: 
 *         description: 게시글 작성 성공 
 *       400:
 *         description: 파라미터 누락
 *         schema:
 *           type: object
 *           properties:
 *             message: 
 *               type: string
 *               example: Missing parameter(s)
 *               description: Missing parameter(s)
 *       401:
 *         description: 비로그인 상태
 *       500: 
 *         description: 서버 오류
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 오류메시지
 *               description: 오류메시지
 */
exports.createPost = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const {
        title,
        contents,
        link,
        positions,
        startDate,
        endDate,
        tags,
        images,
        recruitmentNumber,
    } = req.body;

    if (!(title && contents && link && positions && startDate && endDate && tags && images && recruitmentNumber)) {
        return res.status(400).json({
            "message": "Missing parameter(s)"
        })
    }

    recruit_competition.create(authorUid, title, contents, link, recruitmentNumber, positions, startDate, endDate, tags, images)
        .then(posts => {
            res.sendStatus(201);
        }) // 글 생성 성공시 201 반환
        .catch(err => {
            res.status(500).json({
                "message": err.message
            });
        }); // 글 생성 실패시 400, message 반환
}

/**
 * @swagger
 * /recruit/competition/:pid:
 *   put:
 *     tags:
 *       - Recruit-Competition
 *     description: 대회 인원 모집 게시글을 작성합니다.
 *     parameters:
 *       - name: title
 *         description: 게시글 제목
 *         type: string
 *         schema:
 *           example: 앱잼 나갈 사람~
 *         in: body
 *         required: true
 *       - name: contents
 *         description: 게시글 내용
 *         type: string
 *         schema:
 *           example: 앱잼 팀빌딩 최소 3소속 실화냐 다큐냐 맨큐냐 
 *         in: body
 *         required: true
 *       - name: link
 *         description: 대회 링크 (신청링크 등)
 *         type: string
 *         in: body
 *         schema:
 *           format: url
 *           example: http://www.앱잼.kr
 *         required: true
 *       - name: positions
 *         description: 모집 포지션
 *         in: body
 *         type: array
 *         schema:
 *           example:
 *               - 웹 백엔드 개발자
 *               - 웹 프론트엔드 개발자 (React.js)
 *         required: true
 *       - name: tags
 *         description: 해시태그
 *         in: body
 *         type: array
 *         schema:
 *           example:
 *             - 앱잼
 *             - 14th_AppJam
 *         required: true
 *       - name: startDate
 *         in: body
 *         type: string
 *         format: date
 *         description: 시작 날짜
 *         schema:
 *           example: 2017-12-28 12:28:00
 *         required: true
 *       - name: endDate
 *         in: body
 *         type: string
 *         format: date
 *         description: 마감 날짜
 *         schema:
 *           example: 2017-12-28 12:28:59
 *         required: true
  *       - name: images
 *         description: 첨부 이미지 해시된 이름 배열 (리스트)
 *         type: array
 *         in: body
 *         schema:
 *           example:
 *            - 5973736f0d00ce5c3a260f3c
 *            - 597373920d00ce5c3a260f3e
 *         required: true
 *       - name: recruitmentNumber
 *         description: 모집 인원
 *         in: body
 *         type: integer
 *         schema:
 *           default: 1
 *           minimum: 1
 *           example: 5
 *         required: true
 *       - name: currentRecruitment
 *         description: 현재 모집된 인원수
 *         in: body
 *         type: integer
 *         schema:
 *           default: 0
 *           minimum: 0
 *           maximum: recruitmentNumber
 *           example: 0
 *         required: true
 *     responses:
 *       200: 
 *         description: 게시글 수정 성공 
 *       400:
 *         description: 파라미터 누락
 *         schema:
 *           type: object
 *           properties:
 *             message: 
 *               type: string
 *               example: Missing parameter(s)
 *               description: Missing parameter(s)
 *       401:
 *         description: 비로그인 상태
 *       403:
 *         description: 권한 없음 (게시글 작성자 아님)
 *       500: 
 *         description: 서버 오류
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 오류메시지
 *               description: 오류메시지
 */
exports.revisePost = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const pid = req.params.pid;

    const {
        title,
        contents,
        link,
        positions,
        startDate,
        endDate,
        tags,
        images,
        recruitmentNumber,
        currentRecruitment
    } = req.body;

    recruit_competition.findOne({
            "_id": pid
        })
        .then(post => {
            if (!post) throw new Error("Post Not Found");
            else if (post.author != authorUid) throw new Error("Forbidden");
            else return post.update({
                "$set": {
                    title,
                    contents,
                    link,
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
 * @swagger
 * /recruit/competition/:pid:
 *   delete:
 *     tags:
 *       - Recruit-Competition
 *     responses:
 *       200: 
 *         description: 삭제 완료
 *       403:
 *         description: 권한 없음(작성자 아님)
 *       404:
 *         description: 게시글 찾을 수 없음
 *       500: 
 *         description: 서버 오류
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 오류메시지
 *               description: 오류메시지
 */
exports.dropPost = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const pid = req.params.pid;

    recruit_competition.findOne({
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


/**
 * @swagger
 * /recruit/competition/:pid:
 *   get:
 *     tags:
 *       - Recruit-Competition
 *     responses:
 *       200:
 *         description: 앙기모찌
 *         schema:
 *           $ref: '#/definitions/Recruit-Competition'
 *       500: 
 *         description: 서버 오류
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 오류메시지
 *               description: 오류메시지
 *               
 */
exports.readPost = (req, res) => {
    const user = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const pid = req.params.pid;

    recruit_competition.findOne({
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