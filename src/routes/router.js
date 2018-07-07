import Vue from 'vue';
import VueRouter from 'vue-router';
import HeroList from '../views/hero/List.vue';
import Equips from '../views/equips/List.vue';
import Weapons from '../views/weapons/List.vue';
import Add from '../views/hero/Add.vue';
import Edit from '../views/hero/Edit.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { name: 'home', path: '/', redirect: '/heroes' },
        { name: 'heroes', path: '/heroes', component: HeroList },
        { name: 'equips', path: '/equips', component: Equips },
        { name: 'weapons', path: '/weapons', component: Weapons },
        { name: 'heroesadd', path: '/heroes/add', component: Add },
        { name: 'heroesedit', path: '/heroes/edit/:id', component: Edit }
    ]
});
export default router;
