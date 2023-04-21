import { Button } from '@mui/material'
import './CartHeader.scss'
/* import { useAppSelector } from 'redux/hooks' */

const CartHeader = () => {
    /* const productsInCart = useAppSelector((state) => state.productsInCart) */
    return (
        <div>
            <div>
                <Button>
                    <img className="image" src="/images/like.jpg" alt="" />
                </Button>
            </div>
        </div>
    )
}
export default CartHeader
