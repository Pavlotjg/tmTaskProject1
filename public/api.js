export function fetchUsers() {
  return fetch('http://localhost:3100/users').then(
    res => res.json()
  )
}
