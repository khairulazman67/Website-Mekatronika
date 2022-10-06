import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home';
import Dokumen from '../pages/Dokumen';
import Profil from '../pages/Profil';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/dokumen',
            name: 'Dokumen',
            component: Dokumen,
        },
        {
            path: '/profil',
            name: 'Profil',
            component: Profil,
        },
    ]
})
export default router;