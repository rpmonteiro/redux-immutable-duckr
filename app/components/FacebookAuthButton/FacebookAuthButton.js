import React, { PropTypes } from 'react'
import { button } from './styles.css'

FacebookAuthButton.propTypes = {
  onAuth: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
}

export default function FacebookAuthButton ({onAuth, isFetching}) {
  return (
    <button onClick={onAuth} className={button}>
      {isFetching === true
        ? 'Loading'
        : 'Login with facebook'}
    </button>
  )
}
