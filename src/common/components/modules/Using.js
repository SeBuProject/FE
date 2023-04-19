import React from 'react';
import styled from 'styled-components';
import ContentButton from '../elements/ContentButton';
import theme from '@/styles/theme';
const ChangerContainer = styled.div`
  margin: 5rem 0 7.5rem 0;
`;

const UsingWord = styled.p`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const WordContainer = styled.span`
  color: ${({ theme }) => theme.color.gray12};
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
`;

const ColorWordContainer = styled.span`
  color: ${({ theme }) => theme.color.blue7};
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
`;

const ImageContainer = styled.div`
  margin: 1.25rem 1rem 1.25rem 0.5rem;
`;
const Using = () => {
  return (
    <ChangerContainer>
      <UsingWord>
        사용법
      </UsingWord>
      <ContentButton>
        <ImageContainer>
          <img src='assets/img_excel_guide.svg' alt='엑셀 가이드' />
        </ImageContainer>
        <WordContainer>
          사업자등록번호 열에
          <ColorWordContainer>
            {' '}12자리(-포함) 숫자가
          </ColorWordContainer>
          {' '}기입된 엑셀을
          <ColorWordContainer>
            {' '}저장해주세요.
          </ColorWordContainer>
        </WordContainer>
      </ContentButton>
      <p style={{ marginBottom: "22px", marginTop: "1rem", marginLeft: "15.75rem", textAlign: "left" }}>
        <span style={{ color: `${theme.color.gray8}` }}>
          - 사업자등록번호는
        </span>
        <span style={{ color: `${theme.color.violet}` }}>
          {' '}첫번째 시트에만 넣어주세요.
        </span>
      </p>
      <p style={{ margin: "1.625rem" }}>
        <img src='assets/Vector.svg' alt='화살표' />
      </p>
      <ContentButton>
        <ImageContainer>
          <img src='assets/img_upload_guide.svg' alt='업로드 가이드' />
        </ImageContainer>
        <WordContainer>
          <ColorWordContainer>
            [내 파일 불러오기]
          </ColorWordContainer>
          {' '}버튼을 클릭하여 저장된 내 엑셀을 불러오세요.
        </WordContainer>
      </ContentButton>
      <p style={{ margin: "1.625rem" }}>
        <img src='assets/Vector.svg' alt='화살표' />
      </p>
      <ContentButton>
        <ImageContainer>
          <img src='assets/img_converting_guide.svg' alt='변환 가이드' />
        </ImageContainer>
        <WordContainer>
          엑셀
          <ColorWordContainer>
            {' '}[변환하기]
          </ColorWordContainer>
          를 클릭하고 잠시 기다려주세요. (약 3-5초)
        </WordContainer>
      </ContentButton>
      <p style={{ margin: "1.625rem" }}>
        <img src='assets/Vector.svg' alt='화살표' />
      </p>
      <ContentButton>
        <ImageContainer>
          <img src='assets/img_download_guide.svg' alt='다운로드 가이드' />
        </ImageContainer>
        <WordContainer>
          변환된 엑셀을
          <ColorWordContainer>
            {' '}[다운로드]
          </ColorWordContainer>
          {' '}하고 파일을 확인해 보세요!
        </WordContainer>
      </ContentButton>
    </ChangerContainer>
  )
}
export default Using;