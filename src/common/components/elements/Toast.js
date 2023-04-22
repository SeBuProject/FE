import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    background: ${({ theme }) => theme.color.blue6};
    opacity: 0.9;
    border-radius: 100px;
    color: ${({ theme }) => theme.color.white};
    width: 28.375rem;
    padding 1rem 1.5rem;
    z-index: 1;
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    margin-top: 2rem;
    position: fixed;
    left: 50%;                  // 왼쪽에서 50%만큼
    transform: translateX(-50%);
`;

const Toast = ({ children }) => {
    return (
        <ButtonContainer className="show">
            {children}
        </ButtonContainer>
    );
}
export default Toast;