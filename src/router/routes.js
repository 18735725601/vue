import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login.vue'


export default[
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShowFooterGuide:true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/',
    redirect: '/msite'
  }
]