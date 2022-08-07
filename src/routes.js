import {createWebHistory,createRouter} from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import PageNotFoundPage from './components/PageNotFoundPage.vue';

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'AboutPage',
        path: '/about-us',
        component: AboutPage
    },
    {
        name: 'ProfilePage',
        path: '/profile/:name',
        component: ProfilePage
    },
    {
        name: 'PageNotFoundPage',
        path: '/:pathMatch(.*)*',
        component: PageNotFoundPage
    },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
});

export default router;