import styled from "styled-components";
import {MyAnimation} from "../styles/animation/Animations";


export const StyledBtn = styled.button`
    border: none;
    background-color: aquamarine;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;
    
    &:hover {
        background-color: coral;
    }
    
    &:last-child{
        background-color: forestgreen;

    }
`


export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: chartreuse;
    color: darkkhaki;
    &:hover {
        animation: ${MyAnimation} 4s ease-in-out;
    }
`