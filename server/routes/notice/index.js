const router = require('express').Router(),
      authMiddleware = require('../../middlewares/auth'),
      controller = require('./notice.controller');

/**
 * @swagger
 * definitions:
 *   Notice:
 *     properties:
 *       _id:
 *         description: 글 번호
 *         type: integer
 *         example: 1
 *       author:
 *         description: 작성자
 *         type: object
 *         $ref: '#/definitions/User'
 *       title:
 *         description: 게시글 제목
 *         type: string
 *         example: 글 제목
 *       contents:
 *         description: 게시글 내용
 *         type: string
 *         example: 글 내용 블ㄹ라블라
 *       tags:
 *         description: 해시태그 리스트
 *         type: array
 *         example:
 *           - 앱잼
 *           - 14회_앱잼
 *           - SK_회장단
 *       writeDate:
 *         description: 게시글 작성일
 *         type: string
 *         example: 2001-01-01 17:56:14
 *       images:
 *         dexcription: 해싱된 이미지 이름 배열
 *         type: array
 *         example:
 *           - 5973736f0d00ce5c3a260f3c
 *           - 597373920d00ce5c3a260f3e
 *       comments:
 *         description: 댓글 목록
 *         type: array
 *         items:
 *         $ref: '#/definitions/Comment'
 */

/**
 * @swagger
 * /notice/:pid:
 *   get:
 *     tags:
 *       Notice
 *     description: 모든 공지사항 게시글을 가져옵니다.
 *     produces:
 *       application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: 게시글 목록 조회 성공
 *         type: array
 *         schema:
 *           items:
 *             $ref: '#definitions/Notice'
 *       500:
 *         description: 서버 오류 
 */
router.route('/notice/').get(controller.getPostlist);

/**
 * @swagger
 * /notice:
 *   post:
 *     tags:
 *       - Notice
 *     description: 공지사항 게시글을 작성합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: 게시글 제목
 *         type: string
 *         schema:
 *           example: 나랑 이거 할 사람~~
 *         in: bady
 *         required: true
 *       - name: contents
 *         description: 게시글 내용
 *         type: string
 *         schema:
 *           example: 이런 이런 내용이에여
 *         in: body
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
 *       - name: image
 *         description: 첨부 이미지 해시된 이름 배열(리스트)
 *         type: array
 *         in: body
 *         schema:
 *           example:
 *             - 5973736f0d00ce5c3a260f3c
 *             - 597373920d00ce5c3a260f3e
 *         required: true
 *     responses:
 *       200:
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
 *       403:
 *         description: 권한 없음 (관리자 아님)
 *       500:
 *         description: 서버 오류
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: 오류 메시지
 *               example: 오류 메시지
 */
router.route('/notice/').post(controller.createPost);

/**
 * @swagger
 * /notice/:pid:
 *   put:
 *     tags: 
 *       - Notice
 *     description: 공지사항 게시글을 수정합니다.
 *     produces: application/json
 *     parameters:
 *       - name: title
 *         description: 게시글 제목
 *         type: string
 *         schema:
 *           example: 이거 같이 할사람!!
 *         in: body
 *         required: true
 *       - name: contents
 *         description: 게시글 내용
 *         type: string
 *         schema:
 *           example: 수정한 내용 블라블라블라
 *         in: body
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
 *       - name: image
 *         description: 첨부 이미지 해시된 이름 배열 (리스트)
 *         type: string
 *         in: body
 *         schema:
 *           example: 
 *            - 5973736f0d00ce5c3a260f3c
 *            - 597373920d00ce5c3a260f3e
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
 *         description: 권한 없음(게시글 작성자 아님)
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
router.route('/notice/:pid').put(controller.revisePost);

/**
 * @swagger
 * /notice/:pid:
 *   delete:
 *     tags:
 *       - Notice
 *     description: 작성된 글을 삭제합니다.
 *     produces:
 *       - application/json
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
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string 
 *               example: 오류메시지
 *               descriptioin: 오류메시지
 */
router.route('/notice/:pid').delete(controller.dropPost);

/**
 * @swagger
 * /notice/:pid:
 *   get:
 *     tags:
 *       - Notice
 *     description: 단일 게시글 불러오기
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 글 불러오기 성공
 *         schema:
 *           $ref: '#/definitions/Notice'
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
router.route('/notice/:pid').get(controller.readPost);


module.exports = router;