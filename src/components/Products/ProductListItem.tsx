import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toogleLike } from 'redux/likeReducer'

type Props = {
    id: number
    title: string
    description: string
    type: string
    price: number
    image: string
}
const ProductListItem = ({
    id,
    title,
    description,
    type,
    price,
    image,
}: Props) => {
    const isLiked = useAppSelector((state) => state.productsLike[id])
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <Button onClick={() => dispatch(toogleLike(id))}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-price">
                    Price: <strong>${price}</strong>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
