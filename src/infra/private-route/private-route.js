import React from 'react'
import { Route } from 'react-router'

const getToken = () => {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : null
}
const PrivateRoute = ({ href = '/login', ...restProps }) => {
    if (Boolean(getToken())) {
        return <Route
            {...restProps}
        />
    }
    window.location.href = href
    return null
}

export default PrivateRoute
