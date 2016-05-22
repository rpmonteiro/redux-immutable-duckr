export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Ric',
        avatar: 'blob:https%3A//drive.google.com/6244f140-343b-45b1-a178-3e5d47ce713e',
        uid: 'rpmonteiro',
      })
    }, 200)
  })
}
