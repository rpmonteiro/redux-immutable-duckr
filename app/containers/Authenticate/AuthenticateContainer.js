import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'
import { connect } from 'react-redux'

const AuthenticateContainer = React.createClass({
  propTypes: {
    // fetchingUser: PropTypes.func.isRequired,
    // fetchingUserFailure: PropTypes.func.isRequired,
    // fetchingUserSuccess: PropTypes.func.isRequired,
    // authUser: PropTypes.func.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.context.router.replace('feed'))
    // this.props.fetchingUser()
    // auth().then(user => {
    //   this.props.fetchingUserSuccess(user.uid, user, Date.now())
    //   this.props.authUser(user.uid)
    // })
    // .catch((error) => this.props.fetchingUserFailure(error))
  },
  render () {
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={this.props.isFetching}
        error={this.props.error} />
    )
  },
})

// function mapStateToProps (state) {
//   return {
//     isFetching: state.isFetching,
//     error: state.error,
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators(userActionCreators, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)

export default connect(
  (state) => ({isFetching: state.isFetching, error: state.error}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer)
