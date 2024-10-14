import type Usuario from "~~/types/Usuario";

export const useAuth = () => {
    const cookie = useCookie<any>('auth');

    const login = (user: Usuario) => {
        const encryptedUser = btoa(JSON.stringify(user));
        cookie.value = encryptedUser
    }

    const logout = () => {
        cookie.value = false
    }

    const user = (): Usuario => {
        const encryptedUser = cookie.value
        if (encryptedUser) {
            return JSON.parse(atob(encryptedUser)) as Usuario;
        }
        return {} as Usuario;
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
