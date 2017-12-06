const User = require('../../database/models/user'),
      Recruit_Project = require('../../database/models/recruit-project'),
      Recruit_Study = require('../../database/models/recruit-study'),
      Recruit_Competition = require('../../database/models/recruit-competition'),
      Recruit_Circle = require('../../database/models/recruit-circle');
/**
 * @swagger
 * definitions:
 *   post:
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
 */
/**
 * @swagger
 * /mypage/:
 *   get:
 *     tags:
 *       - mypage
 *     description: 내가 쓴 프로젝트 글 목록 불러오기
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 불러오기 성공
 *         schema:
 *           $ref: '#definitions/post'
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
 *       - mypage
 *     description: 내가 쓴 스터디 글 목록 불러오기
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 불러오기 성공
 *         schema:
 *           $ref: '#definitions/post'
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
 *       - mypage
 *     description: 내가 쓴 대회 글 목록 불러오기
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 불러오기 성공
 *         schema:
 *           $ref: '#definitions/post'
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
 *       - mypage
 *     description: 내가 쓴 동아리 글 목록 불러오기
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 불러오기 성공
 *         schema:
 *           $ref: '#definitions/post'
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
 *       - mypage
 *     description: 내 프로필 불러오기
 *       - application/json
 *     responses:
 *       200:
 *         description: 불러오기 성공
 *         schema:
 *           $ref: '#definitions/profile'
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
 *       - name: image
 *         description: 해시된 이미지 이름
 *         in: body
 *         schema:
 *           type: string
 *           example: 1euhcuh34cjeansdu
 *     responses:
 *       200:
 *         description: 프로필 수정 성공
 *       500:
 *         description: 인터넷 서버 오류
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

