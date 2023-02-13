import  Avatar  from '@mui/material/Avatar';
import * as F from './styles';
import { deepOrange, blue } from '@mui/material/colors';  
import Settings from '@mui/icons-material/Settings';
import Button from '@mui/material/Button'
export const Friends = () => {

  function createData(
    name: string,
    mood: 'online' | 'ausente' | 'ocupado' | 'offline',
    status: string,
  ) {
    return { name, mood, status };
  }

  const friends = [ 
    createData('Lillyan', 'online', 'amo o diogo...'),
    createData('Diego', 'ocupado', 'amo a poli...'),
    createData('Lillyan', 'online', 'amo o diogo...'),
    createData('Diego', 'ocupado', 'amo a poli...'),
    createData('Lillyan', 'online', 'amo o diogo...'),
    createData('Diego', 'ocupado', 'amo a poli...'),
    createData('Lillyan', 'online', 'amo o diogo...'),
    createData('Diego', 'ocupado', 'amo a poli...'),
    createData('Lillyan', 'online', 'amo o diogo...'),
    createData('Diego', 'ocupado', 'amo a poli...'),
    
    
  ]

  const profile = ['Diogo Lima', 'Online', 'Continuar treinando sem parar...']

  return (
    <F.FriendTable>
      <F.FriendProfile>
        <F.FriendTop>
            <F.FriendTopLeft>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar>
            </F.FriendTopLeft>
            <F.FriendTopRight>
                <F.FriendGroupTopRight>
                  <F.FriendTopRightTitle>
                      {profile[0]}
                  </F.FriendTopRightTitle>
                  <F.FriendTopRightMood mood={profile[1] === 'Online' ? '#009900' : profile[1] === 'ocupado' ? 'red' : profile[1] === 'ausente' ? 'yellow' : profile[1] === 'offline' ? 'grey' : 'black' }>
                      {profile[1]}
                  </F.FriendTopRightMood>
                  <F.FriendTopRightStatus>
                      {profile[2]}
                  </F.FriendTopRightStatus>
                </F.FriendGroupTopRight>
                <F.FriendGroupTopRightLeft>
                  <Settings style={{ cursor:'pointer', color: '#1976d2' }}></Settings>
                </F.FriendGroupTopRightLeft>
            </F.FriendTopRight>
          </F.FriendTop>
          <F.FriendList>
              {
                friends.map((friend) => (
                  <F.FriendListItem>
                    <F.FriendListItemLeft>
                          <Avatar sx={{ bgcolor: blue[700] }}></Avatar>
                    </F.FriendListItemLeft>
                    <F.FriendListItemRight>
                      <F.FriendListItemRightTM>
                        <F.FriendListTitle>{friend.name}</F.FriendListTitle>
                        <F.FriendListMood mood={friend.mood === 'online' ? 'green' : friend.mood === 'ocupado' ? 'red' : friend.mood === 'ausente' ? 'yellow' : friend.mood === 'offline' ? 'grey' : 'black' }>{friend.mood.toUpperCase()}</F.FriendListMood>
                      </F.FriendListItemRightTM>
                      <F.FriendListStatus>{friend.status}</F.FriendListStatus>
                      <F.FriendListButtons>
                        <Button style={{fontSize:10}} variant='contained' size='small'>Convidar Para Grupo</Button>
                        <Button style={{fontSize:10}} variant='contained' size='small'>Visitar Perfil</Button>
                        <Button style={{fontSize:10}} variant='contained' size='small'>Enviar Mensagem</Button>
                      </F.FriendListButtons>
                    </F.FriendListItemRight>
                  </F.FriendListItem>
                ))
              }
          </F.FriendList>
      </F.FriendProfile>
    </F.FriendTable>
  );
}