import React, { useState } from 'react';

import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
const MainNavigation =()=>{
    const [DrawerIsOpened, setDrawerIsOpened] = useState(false);
    const openDrawerHandler=()=>{
        setDrawerIsOpened(true);
    }
    const closeDrawerHandler=()=>{
        setDrawerIsOpened(false);
    }
    return(
        <React.Fragment>
        {DrawerIsOpened && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer show={DrawerIsOpened} onClick={closeDrawerHandler} >
            <nav className='main-navigation__drawer-nav'>
                <NavLinks/>
            </nav>
        </SideDrawer>
        <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-nvigation__title'>
                    <Link to="/">Your Places </Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
            </React.Fragment>
    )
}
export default MainNavigation;