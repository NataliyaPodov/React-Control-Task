import { Button, Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import './ProductsList.scss'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                <div>
                    <Button
                        className="button"
                        /* onClick={item.category === 'Breakfast'} */
                    >
                        <div className="img">
                            <img src="/images/iconBreakfast.svg" alt="" />
                        </div>
                        <div className="type">
                            <p>Breakfast</p>
                        </div>
                    </Button>
                    <Button className="button">
                        <div className="img">
                            <img src="/images/iconDeserts.svg" alt="" />
                        </div>
                        <div className="type">
                            <p>Dessert</p>
                        </div>
                    </Button>
                    <Button className="button">
                        <div className="iimg">
                            <img src="/images/iconSoup.svg" alt="" />
                        </div>
                        <div className="type">
                            <p>First course</p>
                        </div>
                    </Button>
                </div>
            </Typography>

            <Grid container spacing={4}>
                {productsArray
                    .filter((item) => item.category)
                    .map(({ id, title, description, type, price, image }) => (
                        <Grid item xs={12} sm={4} key={id}>
                            <ProductListItem
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
export default ProductsList
