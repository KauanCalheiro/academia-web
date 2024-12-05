import type Usuario from "~~/types/Usuario";

export const useAuth = () => {
    const cookieLifeTime = 4 * 60 * 60 * 1000;

    const cookie = useCookie<any>('auth', {
        expires: new Date(Date.now() + cookieLifeTime)
    });

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

    const addDoneExercise = (exerciseId: number) => {
        const currentUser = user();
        if (currentUser) {
            if (!currentUser.doneExercises) {
                currentUser.doneExercises = [];
            }
            currentUser.doneExercises.push(exerciseId);
            login(currentUser);
        }
    }

    const removeDoneExercise = (exerciseId: number) => {
        const currentUser = user();
        if (currentUser) {
            if (!currentUser.doneExercises) {
                currentUser.doneExercises = [];
            }
            currentUser.doneExercises = currentUser.doneExercises.filter((id: number) => id !== exerciseId);
            login(currentUser);
        }
    }

    return {
        login,
        logout,
        user,
        isAuthenticated,
        addDoneExercise,
        removeDoneExercise
    }
}
