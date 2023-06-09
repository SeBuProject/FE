//파일 업로드
export const fileUpload = async (data) => {
    //https://www.sebu1.com/api/v1/contents/businessStatusInqr
    const apiUrl = 'https://www.sebu1.com/api/v1/contents/businessStatusInqr';
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
    const apiUrl = 'https://www.sebu1.com/api/v1/contents/downloadBusinessStatusInqrExcel';
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