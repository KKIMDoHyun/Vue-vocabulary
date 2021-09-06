import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from '../views/MainView.vue';
import vocabulary from '../views/vocabulary/Vocabulary.vue';
import test_page from '../views/test/TestPage.vue';
import test_result from '../views/test/TestResult.vue';
import result_List from '../views/result/ResultList.vue';

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
        },
        {
            path: '/testResult',
            name: 'testResult',
            component: test_result
        },
        {
            path: '/resultList',
            name: 'resultList',
            component: result_List
        }
    ]
  });
