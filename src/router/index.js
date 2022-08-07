import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter);

const Home =  () => import('views/home/Home')
const Catagory = () => import('views/catagory/Catagory')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/catagory',
        component: Catagory
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
  
export default router