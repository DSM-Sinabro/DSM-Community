const router = require('express').Router(),
      authMiddleware = ('../../middlewares/auth'),
      controller = ('./mypage.controller'),
      user = ('../auth/auth.controller'),
      competition = ('../recruit/competition/recruit.competition.controller'),
      project = ('../recruit/project/recruit.project.controller'),
      circle = ('../recruit/circle/recruit.cricle.controller'),
      study = ('../recruit/stucy/recruit.study.controller');




router.route('/mypage/').get(controller.getProjectList);
router.route('/mypage/').get(controller.getStudyList);
router.route('/mypage/').get(controller.getCircleList);
router.route('/mypage/').get(controller.getCompetitionList);

router.route('/mypage/').get(controller.getProfile);

router.route('/modifypw').put(user.modifypw);

router.route('/recruit/project/:pid').delete(project.dropPost);
router.route('/recruit/circle/:pid').delete(circle.dropPost);
router.route('/recruit/competition/:pid').delete(competition.dropPost);
router.route('/recruit/Study/:pid').delete(study.dropPost);

router.route('/recruit/project/:pid').put(project.revisePost);
router.route('/recruit/circle/:pid').put(circle.revisePost);
router.route('/recruit/competition/:pid').put(competition.revisePost);
router.route('/recruit/Study/:pid').put(study.revisePost);

router.route('/recruit/project/:pid').get(project.readPost);
router.route('/recruit/circle/:pid').get(circle.readPost);
router.route('/recruit/competition/:pid').get(competition.readPost);
router.route('/recruit/Study/:pid').get(study.readPost);

router.route('/mypage/:pid').put(controller.changeProfile);

module.exports = router;