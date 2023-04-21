import { useParams } from 'react-router-dom'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}
const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()

    const product = productsObject[parseInt(id!)]
    return <div>{product.title}</div>
}
export default ProductPage
