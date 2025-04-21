import styled from "styled-components";


export const ImgCard = styled.img`
    width: 85%;
    height: auto;
`

export const BoxCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
export const BoxContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 1px solid wheat;
    box-shadow: 18px 15px 20px -7px rgba(144, 186, 232, 0.78);
    text-align: center;
    width: 30vw;
    margin: 0 auto;
    padding: 15px 15px 45px 15px; /* чтобы не наехал на нижнюю границу */
    p + p {
        padding-bottom: 20px;
    }
    
    @media (max-width: 800px) {
        width: 70vw;
    }
    
`
export const TextCard = styled.p`
    padding-top: 20px;
    color: white;
`
export const WrapperToTextCardToRight = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
export const TextCardToRight = styled(TextCard)`
    position: absolute;
    right: 20px;
    bottom: 20px;
    margin: 0;
    text-align: right;
`

export const ItalicText = styled.span`
  font-style: italic;
`
