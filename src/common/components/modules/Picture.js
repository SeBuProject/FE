import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import { useEffect } from 'react';
const PictureContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 11.25rem;
`;

const InnerContainer = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

const LeftContainer = styled.span`
  margin-top: 0.75rem;
  margin-bottom: 1.75rem;
  @media(max-width : 767px){
    margin-top: 0.3rem;
  }
`;

const RightContainer = styled.span`

`;

const DirectImage = styled.img`
  height: auto;
  margin-bottom: 3rem;

  @media(max-width: 767px){
    margin: 0 0.5rem 6rem 0.5rem;
  }
`;

const Picture = () => {
  return (
    <PictureContainer>
      <InnerContainer>
        <LeftContainer>
          <div style={{ marginBottom: "1.5rem" }}>
            <img src='assets/img_excel_preview_before.svg' alt='사용전' style={{ maxWidth: "100%", height: "auto", marginBottom: "0.25rem" }} />
          </div>
          <Button background="#6F7175">
            사용 전
          </Button>
        </LeftContainer>
        <DirectImage src='assets/Vector 2.svg' alt='화살표' />
        <RightContainer>
          <div style={{ marginBottom: "1.5rem" }} className=''>
            <img src='assets/img_excel_preview_after.svg' alt='사용후' style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <Button background="#4174F5">
            사용 후
          </Button>
        </RightContainer>
      </InnerContainer>
    </PictureContainer>
  )
}
export default Picture;