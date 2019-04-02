
/**
 * @swagger
 * /search:
 *   get:
 *     tags:
 *       - search
 *     description: 게시글을 검색합니다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: category
 *         description: 검색 카테고리 (All | Recruit-Project | Recruit-Study | Recruit-Competition | Recruit-Circle | Notice | Freeboard)
 *         in: query
 *         required: false
 *         type: string
 *         example: All
 *       - name: searchType
 *         type: string
 *         description: 검색 유형 (Title | Contents| Author | Tag)
 *         in: query
 *         required: false
 *         example: Title
 *       - name: keyword
 *         description: 검색 키워드
 *         in: query
 *         type: string
 *         example: 키워드는 영어로 Keyword
 *     responses:
 *       200: 
 *         description: 조회 완료
 *         schema:
 *           type: object
 *           properties:
 *             total:
 *               type: integer
 *               description: 총 검색 결과 개수
 *               example: 1000
 *             count:
 *               type: integer
 *               description: 해당 검색 결과 개수
 *               example: 15
 *             page:
 *               type: integer
 *               description: 페이지
 *               example: 1
 *             category:
 *               type: string
 *               description: 검색 카테고리 (ALL | RECRUIT-PROJECT | RECRUIT-COMPETITION | RECRUIT-CIRCLR | RECRUIT-MENTORING | RECRUIT-STUDY | NOTICE | FREEBOARD)
 *               example: ALL
 *               enum:
 *                 - ALL
 *                 - RECRUIT-PROJECT
 *                 - RECRUIT-COMPETITION
 *                 - RECRUIT-CIRCLE
 *                 - RECRUIT-MENTORING
 *                 - RECRUIT-STUDY
 *                 - NOTICE
 *                 - FREEBOARD
 *             results:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: integer
 *                     description: 글 번호
 *                     example: 1
 *                   authorName:
 *                     type: string
 *                     description: 작성자 이름
 *                     example: 윤태훈
 *                   title:
 *                     type: string
 *                     description: 글 제목
 *                     example: 글 제목입니덩 ㅎㅎ
 *                   views:
 *                     type: integer
 *                     description: 조회수
 *                     example: 100
 *                   comments:
 *                     type: integer
 *                     description: 댓글수
 *                     example: 1
 *                   category:
 *                     type: string
 *                     description: 카테고리 (RECRUIT-PROJECT | RECRUIT-COMPETITION | RECRUIT-CIRCLR | RECRUIT-MENTORING | RECRUIT-STUDY | NOTICE | FREEBOARD)
 *                     example: RECRUIT-PROJECT
 *                     enum:
 *                       - RECRUIT-PROJECT
 *                       - RECRUIT-COMPETITION
 *                       - RECRUIT-CIRCLE
 *                       - RECRUIT-MENTORING
 *                       - RECRUIT-STUDY
 *                       - NOTICE
 *                       - FREEBOARD
 *                   recruitmentNumber:
 *                     type: integer
 *                     description: 모집 인원 수 (카테고리에 따라 없을 수 있음)
 *                     example: 5
 *                   currentRecruitment:
 *                     type: integer
 *                     description: 모집된 인원 수 (카테고리에 따라 없을 수 있음)
 *                     example: 1
 *                   remainRecruitment:
 *                     type: integer
 *                     description: 남은 모집 인원 수 (카테고리에 따라 없을 수 있음)
 *                     example: 4
 *                   writeDate:
 *                     type: string
 *                     description: 작성 날짜
 *                     format: date
 *                     example: '2017-12-28 12:28:00'
 *                   tags:
 *                     type: array
 *                     description: 해시태그
 *                     example:
 *                       items:
 *                         - 앙
 *                         - 기모찌
 *       400:
 *         description: 파라미터 누락
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 오류메시지
 *               description: 오류메시지
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
const Recruit_Project = require('../../database/models/recruit-project')
const Recruit_Competition = require('../../database/models/recruit-competition')
const Recruit_Circle = require('../../database/models/recruit-circle')
const Recruit_Study = require('../../database/models/recruit-study')
const Recruit_Mentoring = require('../../database/models/recruit-mentoring')
const Notice = require('../../database/models/notice')
const Freeboard = require('../../database/models/freeboard.article')
const User = require('../../database/models/user')
exports.search = async (req, res) => {

  const category = req.query.category || 'all'
  const searchType = req.query.searchType || 'title'
  const keyword = req.query.keyword || ''
  let count = req.query.count || 15
  let page = req.query.page || 1

  // 카테고리 모델 묶음객체 (category를 통해 즉각적으로 그에 따른 모델 객체를 얻어내기 위함)
  const categoryModels = {
    "RECRUIT-PROJECT": Recruit_Project,
    "RECRUIT-COMPETITION": Recruit_Competition,
    "RECRUIT-CIRCLE": Recruit_Circle,
    "RECRUIT-STUDY": Recruit_Study,
    "RECRUIT-MENTORING": Recruit_Mentoring,
    "NOTICE": Notice,
    "FREEBOARD": Freeboard
  }
  
  // 대소문자 대응
  const _searchType = searchType.toUpperCase()
  const _category = category.toUpperCase()

  // count, page가 정수가 아니거나 범위 밖
  if (Number.isInteger(Number(count)) == false || Number.isInteger(Number(page)) == false || count < 0 || page < 0) {
    res.status(400).json({
      "message": "count and page value should more than 0\n" +
                "API Documentation: http://13.124.15.202:8080/api-doc"
    })
    return
  }

  console.log(count)
  console.log(page)
  count = Number(count)
  page = Number(page)
  console.log(count)
  console.log(page)

  // 존재하지 않는 카테고리인 경우
  if (typeof categoryModels[_category] == 'undefined' && _category !== 'ALL') {
    res.status(400).json({
      "message": "Category value must be one of the following: All, Recruit-Project, Recruit-Competition, Recruit-Mentoring, Recruit-Study, Recruit-Circle, Notice or Freeboard. (default: All)\n"+
                "Case is not significant. You can use both uppercase and lowercase\n"+
                "API Documentation : http://13.124.15.202:8080/api-doc"
    })
    return
  }
  // 검색에 사용할 조건객체
  let searchOption = {}

  // mongodb document 검색 범위
  const searchRange = {
    "author": true,
    "title": true,
    "writeDate": true,
    "_id": true,
    "views": true,
    "comments": true,
    "views_count": true,
    "comments_count": true,
    "recruitmentNumber": true,
    "currentRecruitment": true,
    "tags": true
  }

  // populatingOption :: 사용자 정보 
  const populatingOption = { 
    "path": "author", 
    "select": ["name"] 
  }

  // searchType에 따른 searchOption 대응
  if (_searchType == 'TITLE') {
    searchOption['title'] = RegExp(`.{0,}${keyword}.{0,}`)
  } else if (_searchType == 'CONTENTS') {
    searchOption['contents'] = RegExp(`.{0,}${keyword}.{0,}`)
  } else if (_searchType == 'AUTHOR') {
    let users = await User.find({ "name": RegExp(`.{0,}${keyword}.{0,}`)})
    if (users.length == 0) return res.sendStatus(204)
    let uids = []
    for (let i = 0 ; i < users.length ; i++) {
      uids.push(users[i]._id)
    }
    const authorRegex = uids.join('|')
    searchOption['author'] = {
      $in: uids
    }
  } else if (_searchType == 'TAG') {
    searchOption['tags'] = keyword
  } else {
    res.status(400).json({
      "message": "Category value must be one of the following: title, contents, author or tag. (default: title)\n"+
                "Case is not significant. You can use both uppercase and lowercase\n"+
                "API Documentation : https:13.124.15.202:8080/api-doc"
    })
  }

  let searchPromises = []
  
  // 전체 카테고리 검색
  if (_category == 'ALL') {
    // 모든 모델객체에서 검색 조건에 따른 검색 수행 (searchPromisses에 Promise 추가)
    Object.values(categoryModels).forEach(element => {
      searchPromises.push(element.find(searchOption, searchRange).populate(populatingOption).sort({writeDate: -1}))
    })
  } else {
    // 단일 카테고리 검색 Promise 추가
    searchPromises.push(categoryModels[_category].find(searchOption, searchRange).populate(populatingOption).sort({writeDate: -1}))
  }
  
  Promise.all(searchPromises)
        .then(results => {
          let searchResultArray = []
          // 전체 카테고리 검색의 경우
          if (results.length > 1) {
            for (let i = 0 ; i < results.length ; i++) {
              const category = Object.keys(categoryModels)[i]

              // Mongoose.Document Type -> Object Type
              // category property 추가
              for (let j = 0 ; j < results[i].length ; j++) {
                results[i][j] = results[i][j].toJSON()
                results[i][j]['category'] = category
              }

              // 각 카테고리별 검색결과를 한 배열에 concat
              searchResultArray = searchResultArray.concat(results[i])
            }
            
            // Object Formatting
            searchResultArray = searchResultArray.map(searchResultFormatting)

            // 검색 결과 정렬 (다양한 카테고리가 섞여있으므로 재정렬 해주어야 함)
            searchResultArray.sort((a, b) => {
              const aDate = new Date(a.writeDate)
              const bDate = new Date(b.writeDate)
              if (aDate > bDate) return -1;
              else if (aDate == bDate) return 0;
              else return 1;
            })

            let response = {
              "total": searchResultArray.length,
              "count": count,
              "page": page,
              "category": _category,
              "results": []
            }
            // paging
            response.results = searchResultArray.splice(count * (page - 1), count)

            if (response.results.length === 0) res.sendStatus(204)
            else res.status(200).json(response)
          } 
          // 단일 카테고리 검색일 경우 (전체 카테고리 검색 아님)
          else { 
            let searchResultArray = results[0];

            // 검색 결과가 빈 배열인 경우 (검색 결과 없음)
            if (searchResultArray.length == 0) {
              res.sendStatus(204)
              return
            }

            // Mongoose.Document Type -> Object Type
            // category property 추가
            for (let i = 0 ; i < searchResultArray.length ; i++) {
              searchResultArray[i] = searchResultArray[i].toJSON()
              searchResultArray[i]['category'] = _category
            }

            
            // Object Formatting
            searchResultArray = searchResultArray.map(searchResultFormatting)
            
            let response = {
              "total": searchResultArray.length,
              "count": count,
              "page": page,
              "category": _category,
              "results": []
            }

            // paging
            response.results = searchResultArray.splice(count * (page - 1), count)

            if (response.results.length === 0) res.sendStatus(204)
            else res.status(200).json(response)
          }
        }).catch(err => {
          res.status(500).json({
            "message": err.message
          })
        })

}

// 검색 결과 배열 포매팅 함수 (코드 중복 제거를 위함)
function searchResultFormatting (item) {
  return {
    "_id": item._id,
    "authorName": item.author.name,
    "title": item.title,
    "views": item.views_count,
    "comments": item.comments_count,
    "category": item.category,
    "recruitmentNumber": item.recruitmentNumber,
    "currentRecruitment": item.currentRecruitment,
    "remainRecruitment": item.remainRecruitment,
    "writeDate": item.writeDate,
    "tags": item.tags
  }
}