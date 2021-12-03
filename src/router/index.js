import Vue from 'vue';
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const ShopCart=()=>import('../views/shopCart/ShopCart')
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail');
const CategoryRightArea = () => import('../components/content/category/CategoryRightArea')


Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category,
    // 为什么加了这一行右侧就能显示呢？
    redirect: '/category/all',
    children: [{
      name: 'CategoryRightArea',
      path: ':title',
      component: CategoryRightArea
    }]
    // children: [{
    //   name:'CategoryRightArea',
    //   path: '/category/:title',
    //   component:CategoryRightArea
    // }]
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  },
]

const router = new VueRouter({
  routes
});

export default router;
