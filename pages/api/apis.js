//파일 업로드
export const fileUpload = async (data) => {
<<<<<<< Updated upstream
    const apiUrl = 'http://15.165.109.251:8081/api/v1/contents/businessStatusInqr';
=======
    const apiUrl = 'https://sebu1.com/api/v1/contents/businessStatusInqr';
>>>>>>> Stashed changes
    return await fetch(apiUrl, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'multipart/form-data',
        // },
        body: data,
    })
        .then((res) => res.json())
        .then((res) => res);
};

//파일 엑셀 다운로드
export const fileDownload = async (data) => {
<<<<<<< Updated upstream
    const apiUrl = 'http://15.165.109.251:8081/api/v1/contents/downloadBusinessStatusInqrExcel';
=======
    const apiUrl = 'https://sebu1.com/api/v1/contents/downloadBusinessStatusInqrExcel';
>>>>>>> Stashed changes
    return await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((res) => res);
};