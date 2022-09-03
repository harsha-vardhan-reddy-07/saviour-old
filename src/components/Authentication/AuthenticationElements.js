import styled from "styled-components";
import imgG from '../../images/GoogleLogin.svg';
import imgFb from '../../images/FbLogin.svg';

export const LoginBtn = styled.button`
    color: black;
    padding: 10px 20px;
    text-align: center;
    
`;

export const LoginForm = styled.form`
    width: 30vw;
    margin-left: 35vw;
    text-align: center;
    margin-top: 10vh;

    @media screen and (max-width: 600px){
        width: 80vw;
        margin-left: 10vw;
        margin-top: 5vh;
    }
`;

export const GoogleSignin = styled.button`
    background-image  : url(${imgG});
    height: 64px;
    width: 64px;
    border: none;
    margin: 2vh;
`;

export const FbSignin = styled.button`
    background-image  : url(${imgFb});
    height: 64px;
    width: 64px;
    border: none;
    margin: 2vh;
`;