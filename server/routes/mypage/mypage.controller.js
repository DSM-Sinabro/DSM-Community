const User = require('../../database/models/user'),
      Recruit_Project = require('../../database/models/recruit-project'),
      Recruit_Study = require('../../database/models/recruit-study'),
      Recruit_Competition = require('../../database/models/recruit-competition'),
      Recruit_Circle = require('../../database/models/recruit-circle');

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

exports.changeProfile = (res,req) => {
    const pid = req.params.pid;
    
    const {
        githubaddress,
        facebookaddress
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

