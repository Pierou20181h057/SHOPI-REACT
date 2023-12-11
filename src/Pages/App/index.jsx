import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
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
    { path: '/sign-in', element: <SignIn/> },
    { path: '*', element: <NotFound/> },
  ])
  return routes
}

const App= () => {
  

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
