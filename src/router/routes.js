import Navigation from "@/components/Navigationbar/Navigation.vue"
import About from "@/views/About/About.vue"
import Home from "@/views/Home/Home.vue"
import Notfound from "@/views/NotFound/Notfound.vue"


const basicRoutes = [
    {
        path: '/home',
        component: {
            default:Home,
            TopSideBar:Navigation
        },
        name: 'Home',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    }
]

export default  [
    ...basicRoutes,
    // for not defined routes 
    {
        path: '/:pathMatch(.*)*',
        component: Notfound,
        name: 'NotFound',
    }
]