import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { Link } from "react-router-dom"

function MyOrdes() {
  const context = useContext(ShoppingCartContext)

    return ( 
      <Layout>
        <div className="flex items-center justify-center relative w-80">
          <h1 className='font-medium text-xl'>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
            </Link>
          ))
        }
      </Layout>
    )
  }
  
  export default MyOrdes