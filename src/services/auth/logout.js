export default function logout() {
    sessionStorage.removeItem('user')
    return true
}