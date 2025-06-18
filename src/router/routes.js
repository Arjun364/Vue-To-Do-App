import Navigation from "@/components/Navigationbar/Navigation.vue"
import About from "@/views/About/About.vue"
import Home from "@/views/Home/Home.vue"
import Dashboard from "@/views/Dashboard/Dashboard.vue"
import TaskList from "@/views/TaskList/TaskList.vue"
import Notfound from "@/views/NotFound/Notfound.vue"
import AddTask from "@/views/TaskList/AddTask.vue"
import EditTask from "@/views/TaskList/EditTask.vue"


const basicRoutes = [
    {
        path: '/home',
        components: {
            default:Home,
            TopSideBar:Navigation
        },
        name: 'Home',
    },
    {
        path: '/about',
        components: {
            default:About,
            TopSideBar:Navigation
        },
        name: 'About',
    },
    {
        path: '/dashboard',
        components: {
            default:Dashboard,
            TopSideBar:Navigation
        },
        name: 'Dashboard',
    },
    {
        path: '/tasklist',
        components: {
            default:TaskList,
            TopSideBar:Navigation
        },
        name: 'TaskList',
    },
    {
        path: '/tasklist/add',
        components: {
            default:AddTask,
            TopSideBar:Navigation
        },
        name: 'AddTaskList',
    },
    {
        path: '/tasklist/edit/:id',
        components: {
            default:EditTask,
            TopSideBar:Navigation
        },
        name: 'EditTaskList',
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