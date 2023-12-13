import { ShoppingCartContext } from "../Context"
import { useContext } from "react"
export const totalPrice = () => {
    var totalPri = 0
    const context = useContext(ShoppingCartContext);
    context.cartProducts.map(product => (
        totalPri = totalPri + product.price
    ))
    return totalPri
}