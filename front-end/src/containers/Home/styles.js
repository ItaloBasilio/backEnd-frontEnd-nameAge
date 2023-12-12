import styled from 'styled-components';
import background from '../../assets/background1.svg';

export const Container = styled.div`
    background: url("${background}");
    background-size: cover;// para cobrir toda a area

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`;





export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    color: #eeeeee;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    font-style: normal;
    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    
    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 34px;


`;



export const Image = styled.img`
    margin-top: 30px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    background: rgba(0,0,0,0.8);
    border-radius: 14px;
    color: #ffffff;
    border: none;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.5;
        }
`;



