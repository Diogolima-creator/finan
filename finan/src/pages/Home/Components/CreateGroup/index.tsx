import * as C from './styles'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

export const CreateGroup = () => {

  const arraysGroups = [{value: 'family', label: 'Familia'}
  , {value: 'company', label:'Empresa'}]

  const numberOfParticipants = [
    {value:'2',label:'2 Participantes'},
    {value:'3',label:'3 Participantes'},
    {value:'4',label:'4 Participantes'},
    {value:'5',label:'5 Participantes'},
    {value:'6',label:'6 Participantes'},
    {value:'7',label:'7 Participantes'},
    {value:'8',label:'8 Participantes'},
    {value:'9',label:'9 Participantes'},
    {value:'10',label:'10 Participantes'},
  ]

  const AcceptReject = [{value:'accept', label:'Sim'}, {value:'reject', label:'Não'}]

  return(
    <C.CreateGroup>
        <C.CreateGroupInfo>
            <C.CreateGroupTitle>Como criar um novo grupo</C.CreateGroupTitle>
              <C.CreateGroupUl>
                  <C.CreateGroupLi>Certifique-se que seu grupo tem nome único.</C.CreateGroupLi>
                  <C.CreateGroupLi>Nomes inapropriados ou de cunho ofensivo não serão tolerados.</C.CreateGroupLi>
                  <C.CreateGroupLi>O limite de grupos por pessoa é de 3(com o vip é possível criação de até 10), certifique-se que não está no limite.</C.CreateGroupLi>
              </C.CreateGroupUl>
        </C.CreateGroupInfo>
        <C.CreateGroupForms>
          <C.CreateGroupDisplay>
            <TextField  size='medium' margin="dense" id="filled-basic" label="Nome do Grupo" variant="standard" />
            <TextField  size='medium' margin="dense" id="filled-basic" label="Descrição do Grupo" variant="standard" />
            <TextField  size='medium' margin="dense" id="filled-basic" label="Descrição do Grupo" variant="standard" />
          </C.CreateGroupDisplay>
          <C.CreateGroupDisplay>
            <TextField select defaultValue="2" size='medium'
            margin="dense" id="filled-basic" label="Numero de Participantes" 
            helperText="Selecione o numero de participantes" variant="standard" >
            {numberOfParticipants.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
              )) }
            </TextField>
            <TextField select defaultValue="family" 
              margin="dense" id="filled-basic" size='medium'
              helperText="Selecione o tipo do seu grupo"
              label="Tipo do Grupo" variant="standard">
              {arraysGroups.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
              )) }
            </TextField>
            <TextField select defaultValue="accept" 
              margin="dense" id="filled-basic" size='medium'
              helperText="Seu grupo poderá receber convites"
              label="Permissão de Convites" variant="standard">
              {AcceptReject.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
              )) }
            </TextField>
          </C.CreateGroupDisplay>
        </C.CreateGroupForms>
        <C.CreateGroupButton>
            <Button id='buttonCreate' size='small' variant="contained">Criar Grupo</Button>
        </C.CreateGroupButton>
    </C.CreateGroup>
  )
}