type Product = {
    title: string
    description: string
    type: string
    price: number
    id: number
    image: string
    category?: string
}

const productsArray: Product[] = [
    {   id: 1,
        title: 'Benedict with salmon',
        description: 'Served with poached egg and Dutch sauce on toast with guacamole. Decorate with arugula and green onion',
        type: 'Breakfast',
        price: 10,
        image: "/images/benedict salmon.jpg",
        category: 'Breakfast',
    },

    {   id: 2,
        title: 'English breakfast',
        description: 'Served with scramble, sausages, mushrooms, mixed salad with chickpeas, cream cheese and grilled bread',
        type: 'Breakfast',
        price: 11,
        image: "/images/english breakfast.webp",
        category: 'Breakfast',

    },
        
    
    {   id: 3,
        title: 'Oatmeal',
        description: 'Served with poached egg, arugula, parmesan and pickled peas. Cooked on chicken broth. Served with bread',
        type: 'Breakfast',
        price: 12,
        image: "/images/oatmeal.webp",
        category: 'Breakfast',

    },

    {   id: 4,
        title: 'Pana-kota',
        description: 'Cooking with the addition of avocados. Served with raspberry culie',
        type: 'Dessert',
        price: 13,
        image: "/images/pana kota.webp",
        category: 'Dessert',

    },

    {   id: 5,
        title: 'Grilled dessert from seasonal fruits',
        description: 'Served with salted caramel and mousse with mascarpone',
        type: 'Dessert',
        price: 14,
        image: "/images/fruits.webp",
        category: 'Dessert',
    },

    {   id: 6,
        title: 'Basque cheesecake',
        description: 'Gentle Curd Dessert, served with orange confiture. Recipe from the brand chef, brought from the city of San Sebastian',
        type: 'Dessert',
        price: 15,
        image: "/images/cheesecake.webp",
        category: 'Dessert',
    },

    {   id: 7,
        title: 'Chicken bouillon with ovochami ta orzo',
        description: 'Cooked with chicken, asparagus kvassole, carrots and orzo pasta. We embellish the greenery',
        type: 'First course',
        price: 16,
        image: "/images/bouillon.webp",
        category: 'First course',
    },

    {   id: 8,
        title: 'Mushroom soup',
        description: 'Cooking cream soup with porcini mushrooms with additional tops and truffle mouth. Decorated with milk pina',
        type: 'First course',
        price: 17,
        image: "images/soup.jpg",
        category: 'First course',
    },

    {   id: 9,
        title: 'Borsch',
        description: 'Served with donuts, bacon, smoked sour cream, garlic, green onion and chili pepper',
        type: 'First course',
        price: 18,
        image: "images/borsch.webp",
        category: 'First course',
    }

]

export default productsArray