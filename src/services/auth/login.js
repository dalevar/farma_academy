export default function login(user) {
    if (user == 'admin@gmail.com') {
        user = 'admin'
    } else if (user == 'user@gmail.com') {
        user = 'user'
    } else if (user == 'superadmin@gmail.com') {
        user = 'super admin'
    }
    sessionStorage.setItem('user', user);
    return true
}