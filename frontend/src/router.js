import { createWebHistory, createRouter } from "vue-router";
import MainView from '@/views/MainView'
import OneNoteView from '@/views/OneNoteView'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: MainView
        },
        {
            path: '/:id',
            component: OneNoteView
        },
    ]
})

export default router