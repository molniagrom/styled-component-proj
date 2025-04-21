import React from 'react';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {
    BoxCard,
    BoxContent,
    ImgCard,
    ItalicText,
    TextCard,
    TextCardToRight,
    WrapperToTextCardToRight
} from "./components/Card";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="#">menu item 1</a></li>
                    <li><a href="#">menu item 2</a></li>
                    <li><a href="#">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn>Hello</StyledBtn>
                <StyledBtn as={"a"} href={"3"}>link</StyledBtn>
                <StyledBtn as={Link} href={"3"}>linkComponent</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
            <BoxCard>
                <BoxContent>
                    <ImgCard src={"https://i.pinimg.com/736x/5f/26/f2/5f26f24e40e41f36dd70143d1eb47e29.jpg"}/>
                    <TextCard>"For whatever a person is sowing, this he will also reap..."</TextCard>
                    <WrapperToTextCardToRight>
                        <TextCardToRight>Galatians 6:7 <ItalicText>(Apostle Paul)</ItalicText></TextCardToRight>
                    </WrapperToTextCardToRight>
                </BoxContent>
            </BoxCard>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default App;


const Box = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

























