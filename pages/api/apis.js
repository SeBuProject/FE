//파일 업로드
export const fileUpload = async (data) => {
    const apiUrl = 'http://localhost:8081/api/v1/contents/businessStatusInqr';
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
    const apiUrl = 'http://15.165.109.251:8081/api/v1/contents/downloadBusinessStatusInqrExcel';
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