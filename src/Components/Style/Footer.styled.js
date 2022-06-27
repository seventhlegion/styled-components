import styled from "styled-components";

export const StyledFooter = styled.div`
    background-color: ${({theme}) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    
    ul {
         list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: center;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        text-align: center;
        ul {
            padding: 0;
        }
    }
` 