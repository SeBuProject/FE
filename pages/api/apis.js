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