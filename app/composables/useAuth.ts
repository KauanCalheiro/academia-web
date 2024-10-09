import type Usuario from "~~/types/Usuario";

export const useAuth = () => {
    const sessionKey = 'auth';
    const cookie = useCookie<boolean>('authenticated')

    const login = (user: Usuario) => {
        const encryptedUser = btoa(JSON.stringify(user));
        sessionStorage.setItem(sessionKey, encryptedUser);
        cookie.value = true
    }

    const logout = () => {
        sessionStorage.removeItem(sessionKey);
        cookie.value = false
    }

    const user = () => {
        const encryptedUser = sessionStorage.getItem(sessionKey);
        if (encryptedUser) {
            return JSON.parse(atob(encryptedUser)) as Usuario;
        }
        return null;
    }

    const isAuthenticated = () => {
        return cookie.value
    }

    return {
        login,
        logout,
        user,
        isAuthenticated
    }
}
