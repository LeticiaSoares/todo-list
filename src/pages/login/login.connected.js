import React from 'react'
import { connect } from 'react-redux'
import { POST_USER } from '../../redux/actions'
import Login from './login'


const mapDispatchToProps = dispatch => ({
    loginUser (user) {
      dispatch({
        type: POST_USER,
        payload: user
      })
    }
})
  
export default connect( (state) => ({}),mapDispatchToProps)(Login)




