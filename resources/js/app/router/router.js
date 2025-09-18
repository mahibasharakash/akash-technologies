import {createRouter, createWebHistory} from "vue-router";

import portalLayout from "../portal/layout/layout.vue";
import home from "../portal/pages/home.vue";
import projects from "../portal/pages/projects.vue";
import blogs from "../portal/pages/blogs.vue";

const title = 'Portfolio - ';

const routes = [
    {
        path: '/', name: 'portalLayout', component: portalLayout,
        children: [
            { path: '', name: 'home', component: home, meta: {title: title + 'Home'} },
            { path: 'projects', name: 'projects', component: projects, meta: {title: title + 'Projects'} },
            { path: 'blogs', name: 'blogs', component: blogs, meta: {title: title + 'Blogs'} },
        ]
    },
];
const router = createRouter({
    history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return {top: 0, behavior: 'smooth'};
        }
    }
});

export default router;
