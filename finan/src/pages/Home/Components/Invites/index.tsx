import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from 'react';

function createData(
  name: string,
  typeNfy: 'Group' | 'Friend',
  verify: string,
  buttonCheck: any,
  buttonClear: any,
) {
  return { name, typeNfy, verify, buttonCheck, buttonClear };
}

interface typeRow {
  name: string,
  typeNfy: 'Group' | 'Friend',
  verify: string,
  buttonCheck: any,
  buttonClear: any,
}



export const Invites = () => {
  const [rows, setRows] = useState([
    createData('Familia', 'Group', 'Verificado', <Button sx={{padding:.5, minWidth:'50px', backgroundColor: 'rgb(50,205,50);', ':hover': {backgroundColor: 'rgba(50,205,50,.85);'}}} variant="contained" onClick={()=>handleAccepted('Familia')}><CheckIcon/></Button>, <Button sx={{padding:.5, minWidth:'50px', backgroundColor: '#fd3a33;', ':hover': {backgroundColor: 'rgba(253,58,51,.85)'}}} variant="contained" onClick={()=>handleRejected('Familia')}><ClearIcon/></Button>),
    createData('Diogo', 'Friend', 'Não verificado', <Button sx={{padding:.5, minWidth:'50px', backgroundColor: 'rgb(50,205,50);', ':hover': {backgroundColor: 'rgba(50,205,50,.85);'}}} variant="contained" onClick={()=>handleAccepted('Diogo')}><CheckIcon/></Button>, <Button sx={{padding:.5, minWidth:'50px', backgroundColor: '#fd3a33', ':hover': {backgroundColor: 'rgba(253,58,51,.85)'}}} variant="contained" onClick={()=>handleRejected('Diogo')}><ClearIcon/></Button>),
    createData('Eclair', 'Group', 'Verificado', <Button sx={{padding:.5, minWidth:'50px', backgroundColor: 'rgb(50,205,50);', ':hover': {backgroundColor: 'rgba(50,205,50,.85);'}}} variant="contained" onClick={()=>handleAccepted('Eclair')}><CheckIcon/></Button>, <Button sx={{padding:.5, minWidth:'50px', backgroundColor: '#fd3a33', ':hover': {backgroundColor: 'rgba(253,58,51,.85)'}}} variant="contained" onClick={()=>handleRejected('Eclair')}><ClearIcon/></Button>),
    createData('Douglas', 'Friend', 'Não verificado', <Button sx={{padding:.5, minWidth:'50px', backgroundColor: 'rgb(50,205,50);', ':hover': {backgroundColor: 'rgba(50,205,50,.85);'}}} variant="contained"onClick={()=>handleAccepted('Douglas')}><CheckIcon/></Button>, <Button sx={{padding:.5, minWidth:'50px', backgroundColor: '#fd3a33', ':hover': {backgroundColor: 'rgba(253,58,51,.85)'}}} variant="contained" onClick={()=>handleRejected('Douglas')}><ClearIcon/></Button>),
    createData('Fer', 'Friend', 'Verificado', <Button sx={{padding:.5, minWidth:'50px', backgroundColor: 'rgb(50,205,50);', ':hover': {backgroundColor: 'rgba(50,205,50,.85);'}}} variant="contained" onClick={()=>handleAccepted('Fer')}><CheckIcon/></Button>, <Button sx={{padding:.5, minWidth:'50px', backgroundColor: '#fd3a33', ':hover': {backgroundColor: 'rgba(253,58,51,.85)'}}} variant="contained" onClick={()=>handleRejected('Fer')}><ClearIcon/></Button>),
  ])

  const handleAccepted = (nam: string) => { let cloneRows = rows; let obj = cloneRows.find(o => o.name === nam);  var num = cloneRows.indexOf(obj); if(num !== -1){cloneRows.splice(num, 1)};   setRows([...cloneRows])}
  const handleRejected = (nam:string) => { let cloneRows = rows; let obj = cloneRows.find(o => o.name === nam); var num = cloneRows.indexOf(obj); if(num !== -1){cloneRows.splice(num, 1)};  setRows([...cloneRows])}



  return (
    <TableContainer sx={{ minWidth: 650 }} component={Paper}>
      <h1>Convites</h1>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Notificações</TableCell>
            <TableCell align="right">Solicitação</TableCell>
            <TableCell align="right">Verificado</TableCell>
            <TableCell align="right">Aceitar</TableCell>
            <TableCell align="left">Rejeitar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.typeNfy === 'Group' ? 'Grupo' : 'Amizade'}</TableCell>
              <TableCell align="right">{row.verify}</TableCell> 
              <TableCell align="right">{row.buttonCheck}</TableCell>
              <TableCell align="left">{row.buttonClear}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}