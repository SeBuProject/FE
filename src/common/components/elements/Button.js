import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 100px;
    font-family: 'Pretendard';

    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상 */
     background: ${(props) => props.background || 'white'};
    // &:hover{
    //     opacity:0.5;
    // }
    // &:active{
    //     background: #1c7ed6;
    // }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`
function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>
}


export default Button;