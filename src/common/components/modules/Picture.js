import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
const PictureContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 11.25rem;
`;

const InnerContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.span`
  margin-top: 0.75rem;
`;

const RightContainer = styled.span`

`;
const Picture = () => {
  return (
    <PictureContainer>
      <InnerContainer>
        <LeftContainer>
          <div style={{ marginBottom: "1.75rem" }}>
            <img src='assets/img_excel_preview_before.svg' alt='사용전' />
          </div>
          <Button background="#6F7175">
            사용전
          </Button>
        </LeftContainer>
        <img style={{ marginBottom: "3rem" }} src='assets/Vector 2.svg' alt='사용후' />
        <RightContainer>
          <div style={{ marginBottom: "1.25rem" }}>
            <img src='assets/img_excel_preview_after.svg' alt='사용후' />
          </div>
          <Button background="#4174F5">
            사용후
          </Button>
        </RightContainer>
      </InnerContainer>
    </PictureContainer>
  )
}
export default Picture;