import React from 'react'

//icon imports
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

//css styling
import './nav.css';

function Nav() {
    return (
        <div className='navigationbar'>
            <div className='navbarIcon'>
                <MenuOutlinedIcon />
            </div>
            <div className='logo'>
                <h2 className='text'>FLEX</h2>
            </div>
            <div className='icons'>
                <SearchOutlinedIcon />
                <AccountCircleOutlinedIcon />
                <ShoppingCartOutlinedIcon />
            </div>
        </div>

    )
}

export default Nav
