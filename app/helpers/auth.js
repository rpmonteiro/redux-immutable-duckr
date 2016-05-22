import { ref, facebookProvider } from 'config/constants'
import { formatUserInfo } from 'helpers/utils'
import { fetchingUserSuccess, authUser } from 'redux/modules/users'

export default function auth () {
  return ref.auth().signInWithPopup(facebookProvider)
}

export function checkIfAuthed (store) {
  const currentUser = ref.auth().currentUser
  if (currentUser === null) {
    return false
  } else if (store.getState().isAuthed === false) {
    const { photoURL, displayName, uid } = currentUser
    const userInfo = formatUserInfo(displayName, photoURL, uid)
    store.dispatch(authUser(uid))
    store.dispatch(fetchingUserSuccess(uid, userInfo, Date.now()))
  }
  return true
}

export function logout () {
  ref.auth().signOut()
}
