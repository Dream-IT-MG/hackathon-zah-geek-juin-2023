export function saveSession(key, data) {
    sessionStorage.setItem(key, data);
}

export function getSession(key) {
    return sessionStorage.getItem(key);
}

export function saveObjectSession(key, object) {
    sessionStorage.setItem(key, JSON.stringify(object));
}

export function getObjectSession(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

export function removeSession(key) {
    return sessionStorage.removeItem(key);
}

export function clearSession() {
    return sessionStorage.clear()
}