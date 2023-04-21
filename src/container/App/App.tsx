import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'

import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import CarouselBox from 'components/CarouselBox'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import Home from 'pages/Home/Home'
import ProductPage from 'pages/Product/ProductPage'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <CarouselBox />
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
                <Home />
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
