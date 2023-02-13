import * as M from './styles'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import Button from '@mui/material/Button'

interface SettingsTypeMember {
  profilePic:string 
  name: string 
  role: string
}

interface ModalSettings{
  settings:SettingsTypeMember[]
  modalPos:number
}

export const ModalSettings = ({settings, modalPos}:ModalSettings ) => {
  console.log(settings,modalPos)
  const [ role, setRole] = useState(settings[modalPos].role)
  const handleChange = (event: SelectChangeEvent) => { setRole(event.target.value)}
  return(
    <M.ModalSettings>
      <M.ModalSettingsInf>
        <M.ModalSettingsInfOne>
            <M.ModalProfilePic  />
          <M.ModalSettingsInfTwo>
            <M.ModalName>{settings[modalPos].name}</M.ModalName>
            <M.ModalName>{settings[modalPos].role} from Group</M.ModalName>
          </M.ModalSettingsInfTwo>
        </M.ModalSettingsInfOne>
        <M.ModalSelect>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Cargo"
            sx={{'OutlinedInput#label': 'black', width:150}}
            onChange={handleChange}
          >
            <MenuItem value={'Administrador'}>Administrador</MenuItem>
            <MenuItem value={'Membro'}>Membro</MenuItem>
            <MenuItem value={'Auxiliar'}>Auxiliar</MenuItem>
          </Select>
        </M.ModalSelect>
      </M.ModalSettingsInf>
      <M.ModalButtons>
        <Button variant="contained">Editar</Button>
      </M.ModalButtons>
    </M.ModalSettings>
  )
}