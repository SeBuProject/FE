import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { fileUpload, fileDownload } from '@/pages/api/apis';
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

  const [file, setFile] = useState('');
  const fileInput = useRef(null);

  const handleButtonClick = e => {
    fileInput.current.click();
  }
  const handleChange = e => {
    if (e.target.files[0] != undefined) {
      let formData = new FormData();
      formData.append('file', e.target.files[0]);
      console.log(formData);
      fileUpload(formData).then((res) => {
        console.log(res);
        setFile(res.data);
      });
      console.log(e.target.files[0]);
    }
  }

  const download = () => {
    console.log(file);
    fileDownload(file).then((res) => {
      console.log(res);
      alert('다운로드 되었습니다.');
    });
  }

  return (
    <ChangerContainer>
      <First>
        <img src='assets/img_excel.svg' alt='엑셀용' />
        <ExcelFont>
          엑셀용
        </ExcelFont>
      </First>
      <Second>
        사업자 등록 상태 불러오기
      </Second>
      <Third>
        <UploadImg>
          {file === '' && <img src='assets/img_excel_upload_before.svg' alt='업로드 전' />}
          {file != '' && <img src='assets/img_excel_upload_after.svg' alt='업로드 후' />}
        </UploadImg>
        {file === '' && <UploadWord>
          {'사업자등록번호가 입력된 파일만 올리면'}
          <br />
          {'사업자 관련된 정보를 쉽게 불러올 수 있습니다.'}
        </UploadWord>}
        {file != '' && <UploadWord>
          {'파일이 변환되었습니다.'}
          <br />
          {'다운로드 후, 파일을 확인해보세요!'}
        </UploadWord>}
        {file === '' && <UploadButton onClick={handleButtonClick}>
          <ButtonWord>
            내 파일 불러오기
          </ButtonWord>
          <input ref={fileInput} type='file' id='upload' name='upload' accept='.xls,.xlsx' style={{ display: 'none' }} onChange={handleChange} />
        </UploadButton>}
        {file != '' &&
          <UploadButton onClick={download}>
            <ButtonWord>
              파일 다운로드
            </ButtonWord>
          </UploadButton>}
      </Third>
    </ChangerContainer>
  )
}
export default Changer;