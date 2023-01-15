import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home';
import Dokumen from '../pages/Dokumen';
import Profil from '../pages/Profil';
import Login from '../pages/Login';
import DashboardAdmin from '../pages/admin/Dashboard';
import FormPosting from '../pages/admin/article/Form';
import DataPosting from '../pages/admin/article/Index';
import Kategori from '../pages/admin/Kategori';
import Survei from '../pages/admin/Survei'
import ContentDetail from '../pages/ContentDetail'
import DosenDetail from '../pages/DosenDetail'
import Kontak from '../pages/Kontak'


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
            path : '/dataposting',
            name :'dataposting',
            props : true,
            component :DataPosting,
        },
        {
            path: '/formposting/:id',
            name: 'formposting',
            props:true,
            component: FormPosting,
        },
        {
            path: '/kategori',
            name: 'kategori',
            component: Kategori,
        },
        {
            path: '/survei',
            name: 'survei',
            component: Survei,
        },
        // Content
        {
            path: '/contentcat/:title/:kategori',
            name: 'contentcat',
            props:true,
            component: ContentDetail,
        },
        {
            path: '/contentdetail/:title/:id',
            name: 'contentdetail',
            props:true,
            component: ContentDetail,
        },
        {
            path: '/lecturedetail/:title/:id',
            name: 'lecturedetail',
            props:true,
            component: DosenDetail,
        },
        {
            path: '/kontak',
            name: 'kontak',
            component: Kontak,
        }

    ]
})
export default router;