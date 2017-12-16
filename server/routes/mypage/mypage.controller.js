const User = require('../../database/models/user'),
      Recruit_Project = require('../../database/models/recruit-project'),
      Recruit_Study = require('../../database/models/recruit-study'),
      Recruit_Competition = require('../../database/models/recruit-competition'),
      Recruit_Circle = require('../../database/models/recruit-circle');
/**
 * @swagger
 * definitions:
 *   Mypage-postlist:
 *     properties:
 *       _id:
 *         description: 글 번호
 *         type: integer
 *         example: 1
 *       author:
 *         description: 작성자
 *         type: object
 *         $ref: '#/definitions/User'
 *       category:
 *         description: 해당 게시글 카테고리 (Recruit-Project | Recruit-Study | Recruit-Competition | Recruit-Circle | Notice)
 *         type: string
 *         example: Recruit-Project
 *   profile:
 *     properties:
 *       name:
 *         description: 사용자 이름
 *         type: stirng
 *         example: 홍길동
 *       email:
 *         description: 사용자 이메일(아이디)
 *         type: string
 *         example: gildong@gmail.com
 *       githubaddress:
 *         description: 사용자 Github 주소
 *         type: string
 *         example: https://github.com/Gildong/gitExample
 *       facebookaddress:
 *         description: 사용자 Facebook 주소
 *         type: string
 *         example: https://www.facebook.com/profile.php?id=100005248688949&ref=bookmarks
 */
/**
 * @swagger
 * /mypage/:
 *   get:
 *     tags:
 *       - mypage-projectlist
 *     description: 내가 쓴 프로젝트 글 목록 불러오기
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: 게시글 목록 조회 성공
 *         type: array
 *         schema:
 *           items:
 *             $ref: '#definitions/Recruit-project'
 *       500:
 *         description: 서버 오류
 */
exports.getProjectList = (req,res) => {
    
    User.find({projectPosts:true}) //유저가 프로젝트 모집 게시판에 작성한 모든 글 조회
        .then((posts) => {
            res.status(200).json(posts);
        }) // 성공 : 200 , JSONArray 반환 
        .catch((error) => {
            res.status(400).json({
                message: error.message
            });
        }); //실패 : 400 , message 반환
}
/**
 * @swagger
 * /mypage/:
 *   get:
 *     tags:
 *       - mypage-studylist
 *     description: 내가 쓴 스터디 글 목록 불러오기
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: 게시글 목록 조회 성공
 *         type: array
 *         schema:
 *           items:
 *             $ref: '#definitions/Recruit-study'
 *       500:
 *         description: 서버 오류
 */
exports.getStudyList = (req,res) => {
    
    User.find({studyPosts:true}) //유저가 스터디 모집 게시판에 작성한 모든 글 조회
        .then((posts) => {
            res.status(200).json(posts);
        }) // 성공 : 200 , JSONArray 반환 
        .catch((error) => {
            res.status(400).json({
                message: error.message
            });
        }); //실패 : 400 , message 반환
}
/**
 * @swagger
 * /mypage/:
 *   get:
 *     tags:
 *       - mypage-competitionlist
 *     description: 내가 쓴 대회 글 목록 불러오기
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: 게시글 목록 조회 성공
 *         type: array
 *         schema:
 *           items:
 *             $ref: '#definitions/Recruit-competition'
 *       500:
 *         description: 서버 오류
 */
exports.getCompetitionList = (req,res) => {
    
    User.find(competitionPosts) //유저가 대회 모집 게시판에 작성한 모든 글 조회
        .then((posts) => {
            res.status(200).json(posts);
        }) // 성공 : 200 , JSONArray 반환 
        .catch((error) => {
            res.status(400).json({
                message: error.message
            });
        }); //실패 : 400 , message 반환
}
/**
 * @swagger
 * /mypage/:
 *   get:
 *     tags:
 *       - mypage-circlelist
 *     description: 내가 쓴 동아리 글 목록 불러오기
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: 게시글 목록 조회 성공
 *         type: array
 *         schema:
 *           items:
 *             $ref: '#definitions/Recruit-circle'
 *       500:
 *         description: 서버 오류
 */
exports.getCircleList = (req,res) => {
    
    User.find(circePosts) //유저가 동아리 모집 게시판에 작성한 모든 글 조회
        .then((posts) => {
            res.status(200).json(posts);
        }) // 성공 : 200 , JSONArray 반환 
        .catch((error) => {
            res.status(400).json({
                message: error.message
            });
        }); //실패 : 400 , message 반환
}
/**
 * @swagger
 * /mypage/:
 *   get:
 *     tags:
 *       - mypage-profile
 *     description: 내 프로필 불러오기
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 내 프로필 불러오기 성공
 *         schema:
 *           $ref: '#definitions/profile'
 *       500:
 *         description: 서버 오류
 */
exports.getProfile = (res,req) => {
    User.find({name:true, email:true, githubaddress: true, facebookaddress: true})
        .then((profiles) => {
            res.status(200).json(profiles);
        }) //성공 : 200 , JSON 반환
        .catch((error) => {
            res.status(400).json({
                message: error.message
            });
        }); //실패 : 400 , message 반환
}
/**
 * @swagger
 * /mypage/:pid:
 *   put:
 *     tags:
 *       - mypage
 *     description: 프로필 수정
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: githubaddress
 *         description: Github 주소
 *         in: body
 *         schema:
 *           type: string
 *           example: https://github.com/Gildong/gitExample
 *       - name: facebookaddress
 *         description: Facebook 주소
 *         in: body
 *         schema:
 *           type: string
 *           example: https://www.facebook.com/profile.php?id=100005248688949&ref=bookmarks
 *       - name: image
 *         description: 해시된 이미지 이름
 *         in: body
 *         schema:
 *           type: string
 *           example: 1euhcuh34cjeansdu
 *     responses:
 *       200:
 *         description: 프로필 수정 성공
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
 *         description: 인터넷 서버 오류
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 오류메시지
 *               description: 오류메시지
 */
exports.changeProfile = (res,req) => {
    const pid = req.params.pid;
    
    const {
        githubaddress,
        facebookaddress,
        images
    } = req.body;

    User.changeProfile(pid,githubaddress,facebookaddress)
        .then((result) => {
            res.sendStatus(200);
        }) //성공 : 200 , JSON 반환
        .catch((error) => {
            res.status(500).json({
                message: error.message
            });
        }); //실패 : 400 , message 반환
}

