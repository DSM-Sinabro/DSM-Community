import React from 'react';
import List from './List'
import ImageSlider from './ImageSlider';
import Highlighter from './Highlighter';
import Meal from './Meal';
class Content extends React.Component {
    render() {
        return (
            <section>
                <List listInfo={[
                    {
                        list: '공지사항',
                        link: 'http://www.naver.com'
                    },
                    {
                        list: '프로젝트 모집',
                        link: 'http://www.naver.com'
                    },
                    {
                        list: '동아리 모집',
                        link: 'http://www.naver.com'
                    },
                    {
                        list: 'QnA',
                        link: 'http://www.naver.com'
                    },
                    {
                        list: '갤러리',
                        link: 'http://www.naver.com'
                    },
                    {
                        list: '스터디 모집',
                        link: ''
                    },
                    {
                        list: '자유게시판',
                        link: '',
                    },
                    {
                        list: '대회공지',
                        link: ''
                    },
                    {
                        list: '과제 제출',
                        link: ''
                    },
                    {
                        list: '보도자료',
                        link: ''
                    }
                ]} />

                <ImageSlider imgList={[
                    {
                        src: './images/IMG_1703.JPG'
                    },
                    {
                        src: './images/IMG_1704.JPG'
                    },
                    {
                        src: './images/IMG_1705.JPG'
                    }
                ]} />

                <Meal id="mealbox" title = "LUNCH"  meals={[
                    "흰밥(쌀밥)",
                    "장각삼계탕/죽",
                    "도토리묵상추무침",
                    "알감자버터구이",
                    "석박지",
                    "수박"
                ]} src="../images/rice.png" alt="lunch" />
                
                <br/>
                <Highlighter id="notice" title="공지사항" list={[
                    "2학년 국외체험학습 공지사항",
                    "학교 입학 설명회 일정",
                    "설리번 프로젝트 대마고에서도 열린다",
                    "대마고 야구부 보문고 상대로 승리",
                    "노트북 교체는 다모아 닷컴"
                ]} />
                <Highlighter id="QnA" title="QnA" list={[
                    "시나브로 어케 들어가염",
                    "궁금한게 있서염",
                    "야호야호 ",
                    "날랄루루룰",
                    "민암ㄹ;ㅏㅈ더"
                ]} />

                <Highlighter id="ㅁㄴㅇㄹ" title="ㅁㄴㅇㄹ" list={[
                    "2학년 국외체험학습 공지사항",
                    "학교 입학 설명회 일정",
                    "설리번 프로젝트 대마고에서도 ",
                    "대마고 야구부 보문고 상대로 승리",
                    "노트북 교체는 다모아 닷컴"
                ]} />

            </section>
        )
    }
}

export default Content;