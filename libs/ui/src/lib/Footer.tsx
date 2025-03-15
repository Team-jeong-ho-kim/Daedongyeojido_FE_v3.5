import styled from '@emotion/styled';
import { logoIcon, DaeDaeIcon, inquiryIcon } from '@daedongyeojido-fe-v3.5/ui';

export const Footer = () => {
  return (
    <FooterAll>
      <Main>
        <Top>
          <Logo1>
            <img src={logoIcon} />
            <img src={DaeDaeIcon} />
          </Logo1>
          <Logo2>대동여지도</Logo2>
          <Logo3>DaeDongYeoJiDo</Logo3>
        </Top>
        <Mid>
          <p>
            대덕소프트웨어마이스터고등학교를 위한 전공동아리 관리 서비스
            대동여지도 | PM: 박태수
          </p>
          <p>
            FRONTEND: 지도현, 최민수, 김찬 | BACKEND: 박태수, 박주원, 이해나,
            민수아 | DESIGN: 손희찬
          </p>
          <p>주소 : 대전광역시 유성구 가정북로 76</p>
        </Mid>
        <Bottom>
          <p>@DAEDONGYEOJIDO</p>
        </Bottom>
      </Main>
      <InquiryBtn>
        <img src={inquiryIcon} />
        <p>문의하기</p>
      </InquiryBtn>
    </FooterAll>
  );
};
const InquiryBtn = styled.button`
  min-width: 150px;
  width: 150px;
  height: 40px;
  background-color: #5c6168;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 13%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 5px;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 5%;

  @media (max-width: 768px) {
    margin-right: 5%;
    min-width: 120px;
    width: 120px;
  }
`;

const Bottom = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #bdbdbd;
`;

const Mid = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #bdbdbd;
  width: 575px;
`;

const Logo3 = styled.div`
  color: #bdbdbd;
  font-size: 14px;
  font-weight: bold;
  margin-left: -1.5%;
`;

const Logo2 = styled.div`
  display: flex;
  color: #bdbdbd;
  font-size: 14px;
  font-weight: bold;
  border-right: 1px solid #bdbdbd;
  width: 15%;
`;

const Logo1 = styled.div`
  display: flex;
  border-right: 1px solid #bdbdbd;
  gap: 4px;
  width: 24%;
`;

const Top = styled.div`
  display: flex;
  gap: 4%;
`;

const Main = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 13%;
  width: 520px;
  height: 125px;
`;

const FooterAll = styled.div`
  width: 100%;
  min-width: 600px;
  height: 230px;
  background-color: #303740;
  margin-top: 10%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
