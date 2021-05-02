import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import Navbar from './components/navbar'
import PageNotFound from './pages/pageNotFound'
import { startServer  } from './infra/api-config'
import Alert from './components/alert'
import { getUser } from './infra/local-storage'
import { startSagaRoot } from './redux'
import { alertActions, getAlertMessage } from './redux/actions/alert-actions'
import PrivateRoute from './infra/private-route/private-route'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message : false,
    }
    this.user = ''
    startSagaRoot()
  }
  componentDidMount() {
    startServer()
    //this.user = getUser()
  }
  static getDerivedStateFromProps (props, state) {
    if (props.message !== state.message) {
      return {
        message :  props.message
      }
    }
    return {}
  }
 
  render() {
    this.user = getUser()
    return (
      <React.Fragment>
        <Navbar history={this.props.history} user={this.user} />
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' render={ (props )=><Login showAlert={this.showAlert} {...props} /> }/>
          <Route exact path='/conta' render={ (props) => <Signup showAlert={this.showAlert} {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
        <Alert message={this.state.message} handleOnClick={this.props.closeAlert} >{this.state.message}</Alert>
      </React.Fragment>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    message: getAlertMessage(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeAlert: () => dispatch(alertActions.closeAlert())
  }
}


export default withRouter(connect( (state) => mapStateToProps, mapDispatchToProps)(App))