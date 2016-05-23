export function formatUserInfo (name, photoURL, uid) {
  return {
    name,
    photoURL,
    uid,
  }
}

export function formatDuck (text, {name, photoURL, uid}) {
  return {
    text,
    name,
    photoURL,
    uid,
    timestamp: Date.now(),
  }
}
