export function formatUserInfo (name, photoURL, uid) {
  return {
    name,
    photoURL,
    uid,
  }
}

export function formatDuck (text, {name, avatar, uid}) {
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now(),
  }
}
