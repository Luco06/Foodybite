import React, { useContext } from 'react'
import { AuthProvider } from '../context/AuthContext'
import AuthNav from './AuthNav'
import BottomNav from './BottomNav'
import MainNav from './MainNav'


const Nav = () => {
    const { isLoging } = useContext(AuthProvider)
    return (
         isLoging?(<BottomNav />) : (<AuthNav />)
    )
}

export default Nav
