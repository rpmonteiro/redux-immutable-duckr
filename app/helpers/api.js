import { ref } from 'config/constants'

function saveToDucks (duck) {
  // const duckId = ref.database().ref('ducks').push().key()
  // const duckPromise = ref.database.ref(`ducks/${duckId}`).set({...duck, duckId})
  // return {
  //   duckId,
  //   duckPromise,
  // }
  //   var newPostKey = firebase.database().ref().child('posts').push().key;

  const duckId = ref.database().ref().child('ducks').push().key
  console.log(duck)
  const duckPromise = ref.database().ref(`ducks/${duckId}`).set({...duck, duckId})
  console.log(duckId)
  return {
    duckId,
    duckPromise,
  }
}

function saveToUsersDucks (duck, duckId) {
  return ref.database().ref().child(`usersDucks/${duck.uid}/${duckId}`)
    .set({...duck, duckId})
}

function saveLikeCount (duckId) {
  return ref.database().ref().child(`likeCount/${duckId}`).set(0)
}

export function saveDuck (duck) {
  const { duckId, duckPromise } = saveToDucks(duck)

  return Promise.all([
    duckPromise,
    saveToUsersDucks(duck, duckId),
    saveLikeCount(duckId),
  ]).then(() => ({...duck, duckId}))
}
