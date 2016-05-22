import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import * as userActionCreators from 'redux/modules/users'
import { connect } from 'react-redux'

const AuthenticateContainer = React.createClass({
  handleAuth () {
    auth().then(user => {
      console.log('Authed User', user)
    })
  },
  render () {
    return (
      <Authenticate
        isFetching={false}
        error=''
        onAuth={this.handleAuth} />
    )
  },
})
export default connect()(AuthenticateContainer)
