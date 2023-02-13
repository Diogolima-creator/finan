import styled from 'styled-components'

export const Profile = styled.div`
      background-color:white;
      width:80%;
      height:100%;
      padding:10px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`

export const ProfileHeader = styled.div`
      display:flex;
`;

export const ProfileAvatar = styled.div`
      width:20%;
      display:Flex;
      align-items:center;
      justify-content:center;
`;

export const ProfileTexts = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      width:50%;
      padding-left:5px;
      
`;

export const ProfileTextSeparete = styled.div`
    display:flex;
    flex-direction:column;
`;

export const ProfileTextName = styled.h1`
      margin:0px;
      padding:0px;      
`;

export const ProfileTextStatus = styled.p`
      margin:0px;
      padding:0px;
      color: gray;
      font-size:18px;
`;

export const ProfileTextGroup = styled.p`
      margin:0px;
      font-weight:bold;
      font-size:12px;
      color:blue;
      padding:0px;
`;

export const ProfileEdit = styled.div`
      width:30%;
      display:flex;
      align-items:end;
      justify-content:center;
`;

export const ProfileBody = styled.div`
    background-color:Blue;
   
`;

export const ProfileFooter = styled.div`
    background-color:red;
    
`;


