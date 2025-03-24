import styled from '@emotion/styled';
import {
  interview1Icon,
  interview2Icon,
  interview3Icon,
  interview4Icon,
  interview5Icon,
  interview6Icon,
} from '@daedongyeojido-fe-v3.5/ui';

export const InterviewProcess = () => {
  return (
    <InterviewProcessAll>
      <img src={interview1Icon} alt="지원서 접수" />
      <img src={interview2Icon} alt="과제 제출" />
      <img src={interview3Icon} alt="서류 합격 발표" />
      <img src={interview4Icon} alt="면접 일정 조율" />
      <img src={interview5Icon} alt="심층 면접" />
      <img src={interview6Icon} alt="최종 합격 발표" />
    </InterviewProcessAll>
  );
};

const InterviewProcessAll = styled.div`
  display: flex;
  gap: 8px;
`;
