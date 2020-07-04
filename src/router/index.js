import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () =>import ('@/components/Login')
const Register = () =>import ('@/components/Register')
const Home = () =>import ('@/components/Home')
const Profile = () =>import ('@/components/Profile')
const ContentList = ()=>import ('@/components/ContentList')
const MessageList = () =>import ('@/components/MessageList')
const Watcher = () =>import('@/components/Watcher')
const Follow = () =>import('@/components/Follow')
const City = () =>import ('@/components/City')
const routes=[
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'profile',
        component:Profile
      },
      {
        path:'contentlist',
        component:ContentList,
        children:[
          {
            path:'watcher',
            component:Watcher
          },
          {
            path:'follow',
            component:Follow
          },
          {
            path:'city',
            component:City
          }
        ]
      },
      {
        path:'messagelist',
        component:MessageList
      }
    ]
  }

]
const router=new VueRouter({
  routes,
  mode:'history'
})

export default router
