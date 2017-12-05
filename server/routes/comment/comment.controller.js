const Comment = require('../../database/models/comment');

const Recruit_Project = require('../../database/models/recruit-project');
const Recruit_Study = require('../../database/models/recruit-study');
const Recruit_Competition = require('../../database/models/recruit-competition');
const Recruit_Circle = require('../../database/models/recruit-circle');
const Notice = require('../../database/models/notice')

/**
 * @swagger
 * definition:
 *   Comment:
 *     properties:
 *       _id:
 *         description: 코멘트 고유 id
 *         type: string
 *         example: 5a1c17b80fc3511173bfea57
 *       to:
 *         description: 대상 게시글 글 번호
 *         type: integer
 *         example: 1
 *       category:
 *         description: 해당 게시글 카테고리
 *         type: string
 *         enum:
 *           - Recruit-Project
 *           - Recruit-Study
 *           - Recruit-Competition
 *           - Recruit-Circle
 *           - Notice
 *         example: Recruit-Project
 *       image:
 *         description: 해싱된 이미지 이름
 *         type: string
 *         example: 59a0295d684cca4cb68bb64c
 *       contents:
 *         description: 댓글 내용
 *         type: string
 *         example: 댓글달아보리깅 ㅎ
 */

/**
 * @swagger
 * /comment:
 *   post:
 *     tags:
 *       - comment
 *     description: 새로운 댓글을 답니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contents
 *         description: 댓글 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 댓글달아보리기~
 *       - name: to
 *         description: 게시글 고유 아이디(글번호)
 *         in: body
 *         required: true
 *         schema:
 *           type: integer   
 *           example: 1 
 *           minimum: 1
 *       - name: category
 *         description: 해당 게시글 카테고리 (Recruit-Project | Recruit-Study | Recruit-Competition | Recruit-Circle | Notice)
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: Recruit-Project
 *           enum:
 *             - Recruit-Project
 *             - Recruit-Study
 *             - Recruit-Competition
 *             - Recruit-Circle
 *             - Notice
 *       - name: image
 *         description: 해시된 이미지 이름
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 1euhcuh34cjeansdu
 *     responses:
 *       201:
 *         description: 댓글 남기기 성공
 *       400:
 *         description: 게시글 없음 / 카테고리 없음
 *       500:
 *         description: 인터넷 서버 오류
 */
exports.postComment = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const {
        contents,
        image,
        category,
        to
    } = req.body;
    new Promise((resolve, reject) => {

            if (category == 'Recruit-Project') resolve(Recruit_Project.findById(to));
            if (category == 'Recruit-Study') resolve(Recruit_Study.findById(to));
            if (category == 'Recruit-Competition') resolve(Recruit_Competition.findById(to));
            if (category == 'Recruit-Circle') resolve(Recruit_Circle.findById(to));
            if (category == 'Notice') resolve(Notice.findById(to));

            reject(new Error('Invalid Category'));
        })
        .then(post => {
            if (!post) throw new Error('Post Not Found');
            return Comment.create(authorUid, contents, image, category, to);
        })
        .then(comment => {
            res.sendStatus(201);
        })
        .catch(err => {
            if (err.message == 'Post Not Found' || err.message == 'Invalid Category') res.status(400).json({
                "message": err.message
            });
            else res.status(500).json({
                "message": err.message
            });
        })
}


/**
 * 
 * @swagger
 * /comment/:commentId:
 *   put:
 *     tags:
 *       - comment
 *     description: 댓글을 수정합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contents
 *         description: 댓글 내용
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 댓글 수정해보리기~
 *       - name: image
 *         description: 해시된 이미지 이름
 *         in: body
 *         required: true
 *         schema:
 *           type: string
 *           example: 1euhcuh34cjeansdu
 *     responses:
 *       200:
 *         description: 댓글 수정 성공
 *       400:
 *         description: 게시글 없음 / 카테고리 없음
 *       401:
 *         description: 로그인 안됨
 *       403:
 *         description: 권한 없음(작성자 아님)
 *       500:
 *         description: 인터넷 서버 오류
 */
exports.reviseComment = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const commentId = req.params.commentId;
    const {
        contents,
        image
    } = req.body;

    Comment.findById(commentId)
        .then(comment => {
            if (!comment) throw new Error('Comment Not Found');
            else if (comment.author != authorUid) throw new Error('Forbidden');
            else return comment.update({
                "$set": {
                    contents,
                    image
                }
            })
        })
        .then(updated => {
            res.sendStatus(200);
        })
        .catch(err => {
            if (err.message == 'Forbidden') res.sendStatus(403);
            else if (err.message == 'Comment Not Found') res.status(400).json({
                "message": err.message
            });
            else res.status(500).json({
                "message": err.message
            });
        })
}

/**
 * 
 * @swagger
 * /comment/:commentId:
 *   delete:
 *     tags:
 *       - comment
 *     description: 댓글을 삭제합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: 댓글 삭제 성공
 *       400:
 *         description: 게시글 없음 / 카테고리 없음
 *       401:
 *         description: 로그인 안됨
 *       403:
 *         description: 권한 없음(작성자 아님)
 *       500:
 *         description: 인터넷 서버 오류
 */
exports.dropComment = (req, res) => {
    const authorUid = req.decoded || "59f6de55bbf41aae0ce52c9f";
    const commentId = req.params.commentId;

    Comment.findById(commentId)
        .then(comment => {
            if (!comment) throw new Error('Comment Not Found');
            else if (comment.author != authorUid) throw new Error('Forbidden');
            else return comment.remove();
        })
        .then(removed => {
            res.sendStatus(200);
        })
        .catch(err => {
            if (err.message == 'Forbidden') res.sendStatus(403);
            else if (err.message == 'Comment Not Found') res.status(400).json({
                "message": err.message
            });
            else res.status(500).json({
                "message": err.message
            });
        })
}