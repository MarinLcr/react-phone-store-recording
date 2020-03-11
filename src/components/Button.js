import styled from 'styled-components'

export const ButtonContainer = styled.button`
border: 0;
background-color: var(--mainDark);
min-width: 1px;
margin: 0 4px;
display: inline-block;
border-radius: 4px;
width: 37px;
height: 37px;
text-align: center;
vertical-align: middle;
padding: 0;
line-height: 38px;
transform: translateY(15px);
-moz-transform: translateY(15px);
-webkit-transform: translateY(15px);
-ms-transform: translateY(15px);
transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
-webkit-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
-moz-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
-ms-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
border-color:${props => props.cart? "var(--mainWhite)":"var(--mainDark)"};

&:hover{
    background:${prop => prop.cart ? "var(--mainDark)": "var(--mainWhite)"};
    box-shadow: 0 0 6px -2px rgba(0,0,0,.7);
}
&:hover a svg, &:hover svg {
    color: black !important;
}
&:focus{
    outline:none;  
}
`;