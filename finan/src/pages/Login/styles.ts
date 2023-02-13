import styled from 'styled-components'


export const LoginArea = styled.div`
    height:100vh;
    width:100vw;
    margin:0px;
    padding:0px;
    display:flex;
    background-color: #242424;
    align-items:center;
    justify-content:center;
`
export const LoginTitle = styled.h1`
    font-size:24px;
`;

export const LoginFields = styled.div`
    height:400px;
    width:400px;
    background-color:white;
    border:1px solid black;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const LoginField = styled.div`
    display:flex;
    flex-direction:column;
    margin:8px;
`

export const LoginButton = styled.button`
    height:32px;
    width:64px;
    margin:5px;
`