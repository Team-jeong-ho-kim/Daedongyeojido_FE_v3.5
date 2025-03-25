import { useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { Button } from '@daedongyeojido-fe-v3.5/ui';
import { InterviewProcess } from './InterviewProcess';

interface IClubPostProps {
  clubName: string;
  postTitle: string;
  logoSrc: string;
  categories: string[];
  deadline: string;
  description: string; // 동아리 소개
  benefits: string; // 인재상
  homeworkInfo: string;
}

export const ClubPost = ({
  clubName,
  postTitle,
  logoSrc,
  categories,
  deadline,
  description,
  benefits,
  homeworkInfo,
}: IClubPostProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ClubPostAll>
      <ClubPostSummary>
        <ClubLogo>
          <CardImg src={logoSrc} />
        </ClubLogo>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <ContentContainer>
            <Head>
              <ClubName>{clubName}</ClubName>
              <PostTitle>{postTitle}</PostTitle>
            </Head>
            <CategoryContainer>
              {categories.map((categorie, index) => (
                <Category key={index}>{categorie}</Category>
              ))}
            </CategoryContainer>
            <Deadline>지원 마감일 : {deadline}</Deadline>
          </ContentContainer>
          <ButtonWrapper>
            <Button
              children={expanded ? '상세보기 접기' : '상세보기'}
              onClick={toggleExpand}
              isDetail={true}
            />
          </ButtonWrapper>
        </div>
      </ClubPostSummary>

      <AnimatePresence initial={false}>
        {expanded && (
          <DetailInfoContainer
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DetailSection>
              <DetailTitle>동아리 소개</DetailTitle>
              <DetailContent>{description}</DetailContent>
            </DetailSection>

            <DetailSection>
              <DetailTitle>인재상</DetailTitle>
              <DetailContent>{benefits}</DetailContent>
            </DetailSection>

            <DetailSection>
              <DetailTitle>모집 집군</DetailTitle>
              <DetailContent>
                {categories.map((major) => (
                  <MajorWrapper>{major}</MajorWrapper>
                ))}
              </DetailContent>
            </DetailSection>

            <DetailSection>
              <DetailTitle>면접 절차</DetailTitle>
              <InterviewProcess />
            </DetailSection>

            <DetailSection>
              <DetailTitle>과제 정보</DetailTitle>
              <DetailContent>{homeworkInfo}</DetailContent>
            </DetailSection>

            <SupportBtnWrapper>
              <Button
                children="지원하기"
                color="white"
                backgroundHoverColor="#e3746c"
              />
            </SupportBtnWrapper>
          </DetailInfoContainer>
        )}
      </AnimatePresence>
    </ClubPostAll>
  );
};

const SupportBtnWrapper = styled.div`
  button {
    font-size: 16px;
  }
`;

const MajorWrapper = styled.div`
  height: 28px;
  color: #645e5e;
  background-color: #f4f4f4;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 19px;
  border-radius: 4px;
`;

const ClubPostAll = styled.div`
  border-bottom: 1px solid #d9d9d9;
`;

const ClubPostSummary = styled.div`
  height: 150px;
  display: flex;
`;

const DetailSection = styled.div`
  margin-bottom: 24px;
`;

const DetailTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: #121121;
`;

const DetailContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #645e5e;
  display: flex;
  gap: 8px;
  white-space: pre-line;
`;

const DetailInfoContainer = styled(motion.div)<HTMLMotionProps<'div'>>`
  display: flex;
  flex-direction: column;
  padding: 30px 10%;
  border-top: 1px solid #e5e5e5;
  overflow-y: hidden;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 5%;
  margin-top: -7%;

  button {
    min-width: 133px;
    height: 44px;
    border-radius: 12px;
    font-size: 13px;
  }
`;

const Deadline = styled.div`
  color: #4e5968;
  margin-top: 20px;
`;

const Category = styled.div`
  font-size: 14px;
  color: #4e5968;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const Head = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ClubName = styled.div`
  color: #f46254;
  font-size: 24px;
`;

const PostTitle = styled.div`
  font-size: 24px;
`;

const ContentContainer = styled.div``;

const ClubLogo = styled.div`
  width: 100px;
  height: 100px;
  margin: 25px 40px;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
`;

const CardImg = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 30px;
`;
