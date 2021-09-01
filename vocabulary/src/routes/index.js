import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from '../views/MainView.vue';
import vocabulary from '../views/vocabulary/Vocabulary.vue';
import test_page from '../views/test/TestPage.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainView
        },
        {
            path: '/vocabulary',
            name: 'vocabulary',
            component: vocabulary
        },
        {
            path: '/test',
            name: 'test',
            component: test_page
        }
    ]
  });
