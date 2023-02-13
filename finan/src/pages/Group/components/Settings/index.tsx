import { Box, Modal, TextField } from '@mui/material'
import * as S from './styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Button from '@mui/material/Button'
import { ModalSettings } from './components/modalSettings';

interface SettingsTypeMember {
  profilePic:string 
  name: string 
  role: string
}

interface SettingsType {
  members:SettingsTypeMember[]
}

export const Settings = (settings:SettingsType) => {
  const [role, setRole] = useState('');
  const [search, setSearch] = useState('')
  const [modalPos, setModalPos] = useState(0)
  const [open, setOpen] = useState(true)
  const handleOpen = (pos:number) => {setOpen(true), setModalPos(pos)};
  const handleClose = () => {setOpen(false)};

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value)
  };
  
  const handleChangeSearch = (event:any) => {
    setSearch(event.target.value as string);
  }

  return(
    <S.Settings>
      <S.SettingItems>
        <S.SettingsTitle>Configurações</S.SettingsTitle>
        <S.SettingsInputSearch>
            <TextField onChange={handleChangeSearch} id="outlined-basic" label="Procurar membro" variant="outlined" />
        </S.SettingsInputSearch>
        <S.SettingsTableMembers>
        <TableContainer sx={{ minWidth: 650 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Perfil</TableCell>
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">Cargo</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {settings.members.filter((p) => p.name.toUpperCase().includes(search.toUpperCase())).map((member, key) => (
                <TableRow
                  key={member.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {member.profilePic}
                  </TableCell>
                  <TableCell align="right">{member.name}</TableCell>
                  <TableCell align="right">{member.role}</TableCell> 
                  <TableCell align="right"><Button onClick={()=>handleOpen(key)}>Editar</Button></TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </S.SettingsTableMembers>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ModalSettings modalPos={modalPos} settings={settings.members}  />
            </Box>
        </Modal>
        </S.SettingItems>
    </S.Settings>
  )
}