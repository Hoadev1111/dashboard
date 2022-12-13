import './sidebar.scss'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import {useContext} from 'react';
import {DarkModeContext} from '../../context/darkModeContext'

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration: 'none'}}>
            <span className="logo">HoadevAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link to='/users' style={{textDecoration: 'none'}}>
            <li>
              <Person2OutlinedIcon className='icon'/>
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{textDecoration: 'none'}}>
            <li>
              <Inventory2Icon className='icon'/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <GradingRoundedIcon className='icon'/>
            <span>Orders</span>
          </li> 
          <li>
            <LocalShippingRoundedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BarChartOutlinedIcon className='icon'/>
            <span>Starts</span>
          </li>
          <li>
            <NotificationsNoneRoundedIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyRoundedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsRoundedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
