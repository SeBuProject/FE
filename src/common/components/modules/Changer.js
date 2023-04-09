import React from 'react';
import styled from 'styled-components';
const ChangerContainer = styled.div`
  max-width: 64rem;
  text-align: center;
  margin:0 auto;
  width: 100%;
`;
const ExcelFont = styled.p`
  color: ${({ theme }) => theme.color.greenfont};
  font-size: 1.25rem;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  margin: 2px 0px 0 2px;
`;

const First = styled.div`
  padding-top: 3.75rem;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Second = styled.p`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;

const Third = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 33.75rem;
  height: 24.25rem;
  text-align: center;
  border-radius: 1.25rem;
  margin:0 auto;
`;

const UploadImg = styled.div`
  padding: 2.5rem 0;
`;

const UploadWord = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  margin: 0 5.5rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color.gray9};
`;

const UploadButton = styled.button`
  border-radius: 0.875rem;
  background: ${({ theme }) => theme.color.blue};
  width: 30.75rem;
  height: 3.75rem;
  margin-top: 2rem;
  border: none;
  cursor: pointer;

  &:active{
    opacity:0.5;
  }
`;

const ButtonWord = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
`;

const Changer = () => {
  return (
    <ChangerContainer>
      <First>
        <img src='assets/img_excel.svg' alt='엑셀' />
        <ExcelFont>
          엑셀용
        </ExcelFont>
      </First>
      <Second>
        사업자 등록 상태 불러오기
      </Second>
      <Third>
        <UploadImg>
          <img src='assets/img_excel_upload_before.svg' alt='엑셀' />
        </UploadImg>
        <UploadWord>
          {'사업자등록번호가 입력된 파일만 올리면'}
          <br />
          {'사업자 관련된 정보를 쉽게 불러올 수 있습니다.'}
        </UploadWord>
        <UploadButton>
          <ButtonWord>
            내 파일 불러오기
          </ButtonWord>
          {/* <input ref={input} type='file' style={{ display: 'none' }} /> */}
        </UploadButton>
      </Third>
    </ChangerContainer>
  )
}
export default Changer;