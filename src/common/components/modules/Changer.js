import React from 'react';
import styled from 'styled-components';
import { useRef, useState, useEffect, useCallback } from 'react';
import { fileUpload, fileDownload } from '@/pages/api/apis';
import { Spin } from 'antd';
import theme from '@/styles/theme';
import { useRouter } from 'next/router';
import Toast from '../elements/Toast';
import * as XLSX from 'xlsx';
import Image from 'next/image'

const ChangerContainer = styled.div`
  max-width: 64rem;
  text-align: center;
  margin:0 auto;
  width: 100%;
  flext-wrap: wrap;
  .show {
        visibility: visible;     // 보이게
        animation: fade-in 700ms, fade-out 700ms 2000ms      // 700ms동안 fade-in하고 2000ms 딜레이를 갖고 700ms동안 fade-out함
    }
    @keyframes fade-in {
        // 투명도가 0부터 1로
        from {
            opacity: 0;
        }
        to {
            opacity: 0.9;
        }
    }
    @keyframes fade-out {
        // 투명도가 1에서 0으로
        from {
            opacity: 0.9;
        }
        to {
            opacity: 0;
        }
    }
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
  padding: 2.25rem 0;
  text-align: center;
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
  background: ${(props) => props.background || theme.color.blue6};
  width:  ${(props) => props.width || "30.75rem"};
  height: 3.75rem;
  margin-top: 2rem;
  border: none;
  cursor: pointer;

  &:active{
    opacity:0.5;
  }
`;

const ButtonWord = styled.span`
  color: ${(props) => props.color || theme.color.white};
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
`;
const MultiDown = styled.div`
  text-align: center;
  justify-content: space-between;
  display: flex;
  padding: 0 1.5rem;
`;

const FirstButton = styled.button`
  color: ${({ theme }) => theme.color.blue6};
  border: 1px solid ${theme.color.blue6};
  width: 15rem;
  height: 3.75rem;
  background: ${theme.color.white};
  margin-top: 2rem;
  border-radius: 0.875rem;
  cursor: pointer;
`;

const Changer = () => {

  const [file, setFile] = useState('');
  const [toast, setToast] = useState(false);
  const [downCnt, setCnt] = useState(0);
  const fileInput = useRef(null);
  const router = useRouter();

  //처음으로 클릭시
  const reRender = () => {
    router.reload();
  }

  //Input태그가 눌리게 하기
  const handleButtonClick = e => {
    fileInput.current.click();
  }

  //Input file 바꾸기
  const handleChange = async (e) => {
    if (e.target.files[0] != undefined) {
      let formData = new FormData();
      formData.append('file', e.target.files[0]);
      await fileUpload(formData).then((res) => {
        if (res.code == '20000') {
          console.log(res);
          setFile('Loading')
          setTimeout(() => {
            setFile(res.data);
          }, 3000);
        } else {
          console.log('변환에러 :', res);
        }
      });
    }
  }

  //다운로드 호출
  const download = useCallback(() => {
    // await fileDownload(file).then((res) => {
    //   setCnt(downCnt + 1);
    //   setToast(true);
    // });

    var newFile = [];
    var newJson = {};
    file.map(function (i) {
      newJson.사업자등록번호 = i.b_no;
      newJson.납세자상태 = i.b_stt;
      newJson.과세유형메세지 = i.tax_type;
      newJson.폐업일 = i.end_dt;
      newJson.단위과세전환폐업여부 = i.utcc_yn;
      newJson.최근과세유형전환일자 = i.tax_type_change_dt;
      newJson.세금계산서적용일자 = i.invoice_apply_dt;
      newFile.push(newJson);
      newJson = {};
    });

    //엑셀 다운로드
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(newFile);

    worksheet["!cols"] = [
      { width: 30 }
      , { width: 30 }
      , { width: 30 }
      , { width: 30 }
      , { width: 30 }
      , { width: 30 }
      , { width: 30 }

    ]
    XLSX.utils.book_append_sheet(workbook, worksheet, '사업자 상태조회');
    XLSX.writeFile(workbook, '사업자정보조회.xlsx');

    setCnt(downCnt + 1);
    setToast(true);
  }, [file, downCnt]);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 2700);
    }
  }, [toast]);

  return (
    <ChangerContainer>
      {toast && <Toast>
        <img src='assets/img_success_check.svg' alt='토스트' style={{ marginRight: "1rem", maxWidth: "100%", height: "auto" }} />
        다운로드 폴더에 저장되었습니다. 지금 확인해 보세요!
      </Toast>}
      <First>
        <img src='assets/img_excel.svg' alt='엑셀용' style={{ maxWidth: "100%", height: "auto" }} />
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
          {file === 'Loading' &&
            <Spin size="large" style={{
              paddingTop: ' 3.5rem',
              width: '12.5rem', height: '8.75rem', marginBottom: '4.44px'
            }} />}
          {file != '' && file != 'Loading' && <img src='assets/img_excel_upload_after.svg' alt='업로드 후' />}
        </UploadImg>
        {file === '' && <UploadWord>
          {'사업자등록번호가 입력된 파일만 올리면'}
          <br />
          {'사업자 관련된 정보를 쉽게 불러올 수 있습니다.'}
        </UploadWord>}
        {file === 'Loading' && <UploadWord>
          {'파일 형태에 따라 시간이 조금 더 걸릴 수 있습니다.'}
          <br />
          {'조금만 기다려주세요!'}
        </UploadWord>}
        {file != '' && file != 'Loading' && <UploadWord>
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
        {file === 'Loading' && <UploadButton style={{ background: '#25428C' }}>
          <ButtonWord>
            파일을 불러오는 중
          </ButtonWord>
          <input ref={fileInput} type='file' id='upload' name='upload' accept='.xls,.xlsx' style={{ display: 'none' }} onChange={handleChange} />
        </UploadButton>}
        {file != '' && file != 'Loading' && downCnt === 0 &&
          <UploadButton onClick={download}>
            <ButtonWord>
              파일 다운로드
            </ButtonWord>
          </UploadButton>}
        {file != '' && file != 'Loading' && downCnt >= 1 &&
          <MultiDown>
            <FirstButton onClick={reRender}>
              <ButtonWord color={theme.color.blue6}>
                처음으로
              </ButtonWord>
            </FirstButton>
            <UploadButton width="15rem" onClick={download}>
              <ButtonWord>
                다시 다운로드
              </ButtonWord>
            </UploadButton>
          </MultiDown>}
      </Third>
    </ChangerContainer>
  )
}
export default Changer;