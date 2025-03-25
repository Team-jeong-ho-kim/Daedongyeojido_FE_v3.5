import styled from "@emotion/styled";
import { Footer } from "@daedongyeojido-fe-v3.5/ui";
import { useState } from "react";

type Tag = '디자인' | '프론트엔드' | '백엔드' | 'iOS' | 'Android' | 'AI' | 'embedded' | 'flutter' | 'go' | 'game-dev' | 'security' | 'kotlin' | 'rust' | 'block chain' | 'rust';
const tags: Tag[] = ['디자인', '프론트엔드', '백엔드', 'iOS', 'Android', 'AI', 'embedded', 'flutter', 'go', 'game-dev', 'security', 'kotlin', 'rust', 'block chain', 'rust'];

export const CreatePost = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const toggleTag = (tag: Tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <Container>
        <Card>
          <Title>공고 생성</Title>

          <div>
            <Label>동아리 소개</Label>
            <TextArea placeholder="동아리 소개를 300자 이내로 적어주세요." />
          </div>

          <div>
            <Label>과제 소개</Label>
            <TextArea placeholder="동아리 소개를 200자 이내로 적어주세요." />
          </div>

          <div>
            <Label>인재상 작성</Label>
            <TextArea placeholder="동아리 인재상을 300자 이내로 적어주세요." />
          </div>

          <div>
            <Label>모집 전공 선택</Label>
            <TagsContainer>
              {tags.map((tag) => (
                <TagItem
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  selected={selectedTags.includes(tag)}
                >
                  {tag}
                </TagItem>
              ))}
            </TagsContainer>
          </div>

              <FirButtonBox>
                <Button bg="#f87171">마감일 지정</Button>
              </FirButtonBox>
              <SecButtonBox>
            <Button bg="#4b5563">취소</Button>  
            <Button bg="#f87171" large>생성하기</Button>
              </SecButtonBox>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #FBFBFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px;
`;

const Card = styled.div`
  width: 864px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #121121;
  margin-bottom: 24px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 217px;
  padding: 20px 0px 0px 16px;
  border: 1px solid #969393;
  border-radius: 12px;
  resize: none;
  margin-bottom: 24px;
  &::placeholder {
    padding-left: 4px; /* placeholder 내부 패딩 */
    color: #9ca3af;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
`;

const TagItem = styled.span<{ selected: boolean }>`
  background: ${(props) => (props.selected ? "#FE8178" : "#e5e7eb")};
  color: ${(props) => (props.selected ? "white" : "black")};
  padding: 7px 19px;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
`;

const Button = styled.button<{ bg: string; large?: boolean }>`
  padding: 13.5px 24px;
  color: white;
  font-size: 14px;
  border-radius: 12px;
  background: ${(props) => props.bg};

  ${(props) =>
    props.large &&
    `
    padding: 13.5px 111.5px;
  `}
`;


const FirButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 48px;
`;

const SecButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 8px;
`