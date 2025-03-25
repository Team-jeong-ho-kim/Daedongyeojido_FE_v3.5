import styled from '@emotion/styled';
import { BannerSlider, Button, dmsIcon } from '@daedongyeojido-fe-v3.5/ui';
import { ClubPost } from '../components/ClubPost';
import { useNavigate } from 'react-router-dom';

export const JobMainBoard = () => {

  const navigate = useNavigate();

  const handlePostAddClick = () => {
    navigate('/createpost'); 
  };

  const sampleClubs = [
    {
      clubName: 'DMS',
      postTitle: '[신입부원 모집] 2024 DMS 신입 부원 모집',
      logoSrc: dmsIcon,
      categories: ['백엔드', '프론트엔드', '디자이너'],
      deadline: '2025.05.13',
      description:
        '저희 동아리는 지원자 분들을 찾고 있습니다. 저희 동아리는 지원자 분들을 기다리고 있습니다. 함께 성장하고 발전할 수 있는 소중한 기회를 놓치지 마세요.',
      benefits:
        '- 다양한 개발 스택 습득\n- 팀 프로젝트 경험\n- 취업 시 포트폴리오 활용',
      homeworkInfo:
        '프론트 엔드 : 네이버 클론 코딩\n디자이너 : 배달의 민족 (모바일) 모작',
    },
    {
      clubName: '대동여지도',
      postTitle: '[신입부원 모집] 2024 대동여지도 신입 부원 모집',
      logoSrc: dmsIcon, 
      categories: ['백엔드', '프론트엔드', '디자이너', '안드로이드'],
      deadline: '2025.05.13',
      description:
        '저희 동아리는 지원자 분들을 찾고 있습니다. 저희 동아리는 지원자 분들을 기다리고 있습니다. 함께 성장하고 발전할 수 있는 소중한 기회를 놓치지 마세요.',
      benefits:
        '- 다양한 개발 스택 습득\n- 팀 프로젝트 경험\n- 취업 시 포트폴리오 활용',
      homeworkInfo:
        '프론트 엔드 : 네이버 클론 코딩\n디자이너 : 배달의 민족 (모바일) 모작',
    },
  ];

  return (
    <div>
      <BannerSlider />
      <PostAll>
        <PostAddButton onClick={handlePostAddClick}>
          <Button
            children="공고 추가하기"
            color="white"
            borderRadius="12px"
            width="128px"
          />
        </PostAddButton>
      </PostAll>
      <PostContainer>
        <JobStats>총 {sampleClubs.length}건</JobStats>
        {sampleClubs.map((sampleClub, index) => (
          <ClubPost key={index} {...sampleClub} />
        ))}
      </PostContainer>
    </div>
  );
};

const JobStats = styled.div`
  font-size: 14px;
  padding: 20px 45px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 18%;
  border: 1px solid #ececec;
  min-width: 680px;

  @media (max-width: 800px) {
    margin: 25px 0;
    width: 500px;
  }
`;

const PostAll = styled.div`
  display: flex;
  margin: 25px 18%;
`;

const PostAddButton = styled.div`
  margin-left: auto;

  button {
    font-size: 14px;
    height: 44px;
  }

  button:hover {
    background-color: #e3756d;
  }
`;
