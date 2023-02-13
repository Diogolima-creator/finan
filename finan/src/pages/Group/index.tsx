import * as G from './styles'
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Category, Dashboard, Budget, Release, Settings } from './components';
import { useAppDispatch } from '../../hooks/redux';
import { useAppSelector } from '../../hooks/redux/index';
import { setMenuGroupSelected } from '../../store/menu';

interface SettingsTypeMember {
  profilePic:string 
  name: string 
  role: string
}

interface SettingsType {
  members:SettingsTypeMember[]
}

export const Group = () => {
  const menuGroupSelected = useAppSelector((state)=> state.menu.menuGroupSelected)
  const dispatch = useAppDispatch()
  const settings:SettingsType = {members:[
    {profilePic:'url', name: 'Diogo', role:'Administrador'},
    {profilePic:'url', name: 'Diego', role:'Administrador'},
    {profilePic:'url', name: 'Bruna', role:'Membro'},
    {profilePic:'url', name: 'Jessica', role:'Administrador'},
  ]}

  return (
    <G.Group>
      <BottomNavigation
        showLabels
        sx={{ backgroundColor:'#1976d2', 
        '.MuiBottomNavigationAction-root.Mui-selected' : {color:' #fdfeff'} }}
        value={menuGroupSelected}
        onChange={(event, newValue) => {
          dispatch(
            setMenuGroupSelected(newValue)
          )
        }}
      >
        <BottomNavigationAction sx={{ '.Mui-selected': {color: 'white'}, }} label="Configurações" icon={<SettingsApplicationsIcon />} />
        <BottomNavigationAction sx={{ '.Mui-selected': {color: 'white'}, }} label="Categorias" icon={<ListAltIcon />} />
        <BottomNavigationAction sx={{ '.Mui-selected': {color: 'white'}, }} label="Orçamento" icon={<ReceiptLongIcon />} />
        <BottomNavigationAction sx={{ '.Mui-selected': {color: 'white'}, }} label="Lançamento" icon={<CurrencyExchangeIcon />} />
        <BottomNavigationAction sx={{ '.Mui-selected': {color: 'white'}, }} label="Dashboard" icon={<DashboardIcon />} />
      </BottomNavigation> 
      {menuGroupSelected === 0 && <Settings members={settings.members} />}
      {menuGroupSelected === 1 && <Category />}
      {menuGroupSelected === 2 && <Budget />}
      {menuGroupSelected === 3 && <Release />}
      {menuGroupSelected === 4 && <Dashboard />}
    </G.Group>
  );
}