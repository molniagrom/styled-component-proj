import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animation/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outline"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    background-color: ${props => props.color || "yellow"};
    padding: 10px 20px;
    color: gray;
    font-size: ${props => props.fontSize};
    font-weight: bold;

    ${props => props.btnType === "outline" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "yellow"};
        color: ${props => props.color || "yellow"};
        background-color: transparent;
        &:hover {
            border-color: wheat;
            color: wheat;
            background-color: transparent;
            box-shadow: 10px 10px 23px 3px rgba(138,171,179,0.86);
        }
    `}
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "yellow"};
        color: black;
        &:hover {
            background-color: blueviolet;
            box-shadow: 10px 10px 23px 3px rgba(138,171,179,0.86);
        }
    `}
    
        ${props => props.active && css<StyledBtnPropsType>`
            box-shadow: 10px 10px 23px 3px rgba(138,171,179,0.86);
        `}

    
`


export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: chartreuse;
    color: darkkhaki;
    &:hover {
        animation: ${MyAnimation} 4s ease-in-out;
    }
`