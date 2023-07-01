
import { SESSION_USER, TOKEN_USER } from 'assets/utils/constants/userConstants';
import { clearSession, getObjectSession, removeSession, } from 'assets/utils/sessionHelper';


export function logout() {
    return new Promise((resolve, reject) => {
        removeSession(SESSION_USER);
        removeSession(TOKEN_USER);
        resolve(true);
        localStorage.clear();
        clearSession();
        reject(Error("Impossible de se déconnecter"));
    });
}


export function isLoggedIn() {
    return !!getObjectSession(SESSION_USER);
}

export function getRole(){
    let objectSession  = getObjectSession(SESSION_USER);
    return objectSession?.user?.role;
}

export function getUserInfos() {
    return getObjectSession(SESSION_USER);
}
