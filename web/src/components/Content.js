import React from 'react';
import List from './List'
import ImageSlider from './ImageSlider';

class Content extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default Content;