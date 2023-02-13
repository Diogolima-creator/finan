import styled from 'styled-components'

interface moodType{
        mood: string
      }
      
export const FriendTable = styled.div`
    background-color:white;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    `;

export const FriendProfile = styled.div`
        width:500px;
        height:500px;
        border-radius:5px;
`

export const FriendTop = styled.div`
        width:100%;
        height:80px;
        display:flex;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
        background-color: white;
`

export const FriendTopLeft = styled.div`
        width:80px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        
`;

export const FriendTopRight = styled.div`
        width:424px;
        height:100%;
        display:flex;
               
`;


export const FriendGroupTopRight = styled.div`
        width:420px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding-left:8px;
`;

export const FriendGroupTopRightLeft = styled.div`
        width:30px;
        display:flex;
        justify-content:end;
`;

export const FriendTopRightTitle = styled.h1`
      font-size:18px;
      color:#1976d2;
      padding:0px;
      margin:0px;
`;

export const FriendTopRightMood = styled.p(({mood}:moodType) => `
      font-size:12px;
      color: ${mood};
      font-weight:bold;
      padding:0px;
      margin:0px;
`);

export const FriendTopRightStatus = styled.p`
      padding:0px;
      margin:0px;
      font-size:12px;
      color:gray;
`;

export const FriendList = styled.div`
        width:100%;
        height:420px;
        background-color: white;
        overflow-y:scroll;
`

export const FriendListItem = styled.div`
        display:Flex;
`
export const FriendListItemLeft = styled.div`
        width:70px;
        height:90px;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: white;
`;

export const FriendListItemRight = styled.div`
        width:380px;
        height:90px;
        display:flex;
        justify-content:top;
        background-color: white;
        flex-direction:column;
        padding-left:8px;
`;

export const FriendListItemRightTM = styled.div`
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:95%;
`;

export const FriendListTitle = styled.h1`
      font-size:14px;
      padding:0px;
      margin:0px;
      color: #1976d2;
`;
 

export const FriendListMood = styled.p(({mood}:moodType) => `
      font-size:9px;
      color: ${mood};
      font-weight:bold;
      padding:0px;
      margin:0px;
`);

export const FriendListStatus = styled.p`
      padding:0px;
      margin:0px;
      font-size:12px;
      color:gray;
`;

export const FriendListButtons = styled.div`
    display:flex;
    justify-content:space-around;
    padding-top:8px;
`;
