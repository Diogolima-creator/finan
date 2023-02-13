import * as P from './styles'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

export const Profile = () => {
  return(
    <P.Profile>
        <P.ProfileHeader>
          <P.ProfileAvatar>
            <Avatar style={{ width:150, height:150}}></Avatar>
          </P.ProfileAvatar>
            <P.ProfileTexts>
                <P.ProfileTextSeparete>
                    <P.ProfileTextName>Diogo Lima</P.ProfileTextName>
                    <P.ProfileTextGroup>Leader do Grupo Family</P.ProfileTextGroup>
                </P.ProfileTextSeparete>
                    <P.ProfileTextStatus>Nascido para treinar...</P.ProfileTextStatus>
            </P.ProfileTexts>
            <P.ProfileEdit>
                <Button variant="contained">Editar Perfil</Button>
            </P.ProfileEdit>
        </P.ProfileHeader>
        <P.ProfileBody>

        </P.ProfileBody>
        <P.ProfileFooter>
          
        </P.ProfileFooter>
    </P.Profile>
  )
}