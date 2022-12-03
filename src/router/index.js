import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home';
import Dokumen from '../pages/Dokumen';
import Profil from '../pages/Profil';
import Login from '../pages/Login';
import DashboardAdmin from '../pages/admin/Dashboard';
import Posting from '../pages/admin/Posting';
import Kategori from '../pages/admin/Kategori'


const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/dokumen',
            name: 'dokumen',
            component: Dokumen,
        },
        {
            path: '/profil',
            name: 'profil',
            component: Profil,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/dashboard',
            name: 'dashboardadmin',
            component: DashboardAdmin,
        },
        {
            path: '/posting',
            name: 'posting',
            component: Posting,
        },
        {
            path: '/kategori',
            name: 'kategori',
            component: Kategori,
        }
    ]
})
export default router;