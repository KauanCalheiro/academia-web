import { type RouteLocationNormalizedGeneric } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

const loginPage = 'login'

const pagesThatDontNeedAuth = ['pagina-captura', loginPage]

const pageToRedirectIfAlreadyAuthenticated = '/treino'
const pageToRedirectIfNotAuthenticated = `/${loginPage}`

export default defineNuxtRouteMiddleware((to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedGeneric) => {

    if (to.name === loginPage && useAuth().isAuthenticated()) {
        return pageToRedirectIfAlreadyAuthenticated
    }

    if (!pagesThatDontNeedAuth.includes(to.name as string)) {
        if (!useAuth().isAuthenticated()) {
            return pageToRedirectIfNotAuthenticated
        }
    }
    return
})
