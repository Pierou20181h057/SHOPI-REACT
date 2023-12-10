import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrdes from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/Navbar'

import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes ([
    { path: '/', element: <Home/> },
    { path: '/my-orders', element: <MyOrdes/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/signin', element: <SignIn/> },
    { path: '*', element: <NotFound/> },
  ])
  return routes
}

const App= () => {
  

  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
