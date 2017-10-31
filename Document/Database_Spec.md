
# DSM-Community 데이터베이스 명세서 (Database Specification)

## User

Name        | Meaning     | Type      | Ref   | Index     | Etc
---|---|---|---|---|---
_id     | 식별자   | ObjectId  |   | required, unique |
name    | 이름    | String    |   | required  |    
code    | 고유 식별코드   | String    |   |   required, unique    |
email   | 이메일       | String     |   |   required, unique    |
password   | 패스워드       | String     |   |   required    |
entryDate   | 가입 날짜     | String    |   | required      |
profile     | 프로필 이미지   | String    |   | required, unique  | 프로필 이미지의 파일명을 가지고있음
projectPosts | 구인구직-프로젝트 게시글 리스트 | [Number] | Recruit-Project   |   |
competitionPosts | 구인구직-대회 게시글 리스트 | [Number] | Recruit-Competition   |   |
studyPosts | 구인구직-스터디 게시글 리스트 | [Number] | Recruit-Study   |   |
circlePosts | 구인구직-동아리 게시글 리스트 | [Number] | Recruit-Circle   |   |

## Comment

Name        | Meaning     | Type      | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | ObjectId  |       | required, unique  |
author      | 작성자 _id   | ObjectId  | User  | required          |
writeDate   | 작성날짜      | String    |       | required          |
contents    | 내용        | String    |       | required          |
image       | 첨부 이미지    | String    |       | unique            | 첨부된 이미지의 파일명을 가지고있음
category    | 카테고리      | String    |       | required          | Recruit-Project / Recruit-Study / Recruit-Competition / Recruit-Circle / Notice 중 하나의 값을 가지고 있어야함
to          | 글번호       | Number    |       | required          |

## Freeboard

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | Number      |       | required, unique  |
user        | 작성자 _id   | ObjectId      | User  | required          |
title       | 글 제목      | String        |       | required          |
contents    | 내용        | String        |       | required          |
writeDate   | 작성날짜      | String    |       | required          |
tags        | 태그 리스트    | [String]      |       | required          | 태그리스트를 가지고 있음, default: []
images       | 첨부 이미지 리스트   | [String]     |       | unique            | 첨부된 이미지의 파일명을 가지고 있음 (리스트)
comments    | 코멘트 리스트   | [ObjectId]    | Comment   |              | Comment 식별자 리스트, default: []
views       | 해당 글을 조회한 사용자의 _id 배열 | ObjectId | User |     | User 식별자 리스트, default: []
[가상컬럼] views_count | 조회수 | Number |     |       | views 리스트의 length 제공
[가상컬럼] comments_count | 댓글 수 | Number |     |       | comments 리스트의 length 제공

## Recruit-Project

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | Number      |       | required, unique  |
author        | 작성자 _id   | ObjectId      | User  | required          |
title       | 글 제목      | String        |       | required          |
contents    | 내용        | String        |       | required          |
recruitmentNumber | 총 모집 인원 | Number |    | required  | 
currentRecruitment | 현재 모집 인원 | Number |    | required  | default : 0
positions: | 모집 포지션(들) | [String]       |       |       |
writeDate   | 작성 날짜      | String    |       | required          |
startDate   | 시작 날짜      | String       |       | required      |
endDate   | 마감 날짜      | String       |       | required      |
tags        | 태그 리스트    | [String]      |       | required          | 태그 리스트를 가지고 있음, default: []
images       | 첨부 이미지 리스트   | [String]     |       | unique            | 첨부된 이미지의 파일명을 가지고 있음 (리스트), default: []
comments    | 코멘트 리스트   | [ObjectId]    | Comment   |              | Comment 식별자 리스트, default: []
views       | 해당 글을 조회한 사용자의 _id 배열 | ObjectId | User |     | User 식별자 리스트, default: []
[가상컬럼] views_count | 조회수 | Number |     |       | views 리스트의 length 제공
[가상컬럼] comments_count | 댓글 수 | Number |     |       | comments 리스트의 length 제공

## Recruit-Competition

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | Number      |       | required, unique  |
author        | 작성자 _id   | ObjectId      | User  | required          |
title       | 글 제목      | String        |       | required          |
contents    | 내용        | String        |       | required          |
link        | 대회 링크     | String        |       | required          |
recruitmentNumber | 총 모집 인원 | Number |    | required  | 
currentRecruitment | 현재 모집 인원 | Number |    | required  | default : 0
positions: | 모집 포지션(들) | [String]       |       |       |
writeDate   | 작성 날짜      | String    |       | required          |
startDate   | 시작 날짜      | String       |       | required      |
endDate   | 마감 날짜      | String       |       | required      |
tags        | 태그 리스트    | [String]      |       | required          | 태그 리스트를 가지고 있음
images       | 첨부 이미지 리스트   | [String]     |       | unique            | 첨부된 이미지의 파일명을 가지고 있음 (리스트)
comments    | 코멘트 리스트   | [ObjectId]    | Comment   |              | Comment 식별자 리스트, default: []
views       | 해당 글을 조회한 사용자의 _id 배열 | ObjectId | User |     | User 식별자 리스트, default: []
[가상컬럼] views_count | 조회수 | Number |     |       | views 리스트의 length 제공
[가상컬럼] comments_count | 댓글 수 | Number |     |       | comments 리스트의 length 제공

## Recruit-Study

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | Number      |       | required, unique  |
author        | 작성자 _id   | ObjectId      | User  | required          |
title       | 글 제목      | String        |       | required          |
contents    | 내용        | String        |       | required          |
recruitmentNumber | 총 모집 인원 | Number |    | required  | 
currentRecruitment | 현재 모집 인원 | Number |    | required  | default : 0
writeDate   | 작성 날짜      | String    |       | required          |
startDate   | 시작 날짜      | String       |       | required      |
endDate   | 마감 날짜      | String       |       | required      |
tags        | 태그 리스트    | [String]      |       | required          | 태그 리스트를 가지고 있음, default: []
images       | 첨부 이미지 리스트   | [String]     |       | unique            | 첨부된 이미지의 파일명을 가지고 있음 (리스트), default: []
comments    | 코멘트 리스트   | [ObjectId]    | Comment   |              | Comment 식별자 리스트, default: []
views       | 해당 글을 조회한 사용자의 _id 배열 | ObjectId | User |     | User 식별자 리스트, default: []
[가상컬럼] views_count | 조회수 | Number |     |       | views 리스트의 length 제공
[가상컬럼] comments_count | 댓글 수 | Number |     |       | comments 리스트의 length 제공

## Recruit-Circle

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | Number      |       | required, unique  |
author        | 작성자 _id   | ObjectId      | User  | required          |
title       | 글 제목      | String        |       | required          |
contents    | 내용        | String        |       | required          |
recruitmentNumber | 총 모집 인원 | Number |    | required  | 
currentRecruitment | 현재 모집 인원 | Number |    | required  | default : 0
writeDate   | 작성 날짜      | String    |       | required          |
startDate   | 시작 날짜      | String       |       | required      |
endDate   | 마감 날짜      | String       |       | required      |
tags        | 태그 리스트    | [String]      |       | required          | 태그 리스트를 가지고 있음, default: []
images       | 첨부 이미지 리스트   | [String]     |       | unique            | 첨부된 이미지의 파일명을 가지고 있음 (리스트), default: []
comments    | 코멘트 리스트   | [ObjectId]    | Comment   |              | Comment 식별자 리스트, default: []
views       | 해당 글을 조회한 사용자의 _id 배열 | ObjectId | User |     | User 식별자 리스트, default: []
[가상컬럼] views_count | 조회수 | Number |     |       | views 리스트의 length 제공
[가상컬럼] comments_count | 댓글 수 | Number |     |       | comments 리스트의 length 제공

## Recruit-Mentoring (Future)

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | Number      |       | required, unique  |
author        | 작성자 _id   | ObjectId      | User  | required          |
title       | 글 제목      | String        |       | required          |
contents    | 내용        | String        |       | required          |
recruitmentNumber | 총 모집 인원 | Number |    | required  | 
currentRecruitment | 현재 모집 인원 | Number |    | required  | default : 0
writeDate   | 작성 날짜      | String    |       | required          |
startDate   | 시작 날짜      | String       |       | required      |
endDate   | 마감 날짜      | String       |       | required      |
tags        | 태그 리스트    | [String]      |       | required          | 태그 리스트를 가지고 있음, default: []
images       | 첨부 이미지 리스트   | [String]     |       | unique            | 첨부된 이미지의 파일명을 가지고 있음 (리스트), default: []
comments    | 코멘트 리스트   | [ObjectId]    | Comment   |              | Comment 식별자 리스트, default: []
views       | 해당 글을 조회한 사용자의 _id 배열 | ObjectId | User |     | User 식별자 리스트, default: []
[가상컬럼] views_count | 조회수 | Number |     |       | views 리스트의 length 제공
[가상컬럼] comments_count | 댓글 수 | Number |     |       | comments 리스트의 length 제공

## Notice

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | Number      |       | required, unique  |
author        | 작성자 _id   | ObjectId      | User  | required          |
title       | 글 제목      | String        |       | required          |
contents    | 내용        | String        |       | required          |
writeDate   | 작성 날짜      | String    |       | required          |
tags        | 태그 리스트    | [String]      |       | required          | 태그 리스트를 가지고 있음, default: []
images       | 첨부 이미지 리스트   | [String]     |       | unique            | 첨부된 이미지의 파일명을 가지고 있음 (리스트), default: []
comments    | 코멘트 리스트   | [ObjectId]    | Comment   |              | Comment 식별자 리스트, default: []
views       | 해당 글을 조회한 사용자의 _id 배열 | ObjectId | User |     | User 식별자 리스트, default: []
[가상컬럼] views_count | 조회수 | Number |     |       | views 리스트의 length 제공
[가상컬럼] comments_count | 댓글 수 | Number |     |       | comments 리스트의 length 제공

## Meal

Name        | Meaning     | Type         | Ref   | Index     | Etc
---|---|---|---|---|---
_id         | 식별자       | ObjectId      |       | required, unique  |
year        | 연도        | Number        |       | required          | min: 2017, max: 2019
month        | 월        | Number        |       | required          | min: 1, max: 12
date        | 일        | Number        |       | required          | min: 1, max: 31
week        | x번째 주        | Number        |       |           |
meal        | 급식 내용         | Array        |        | required  |
