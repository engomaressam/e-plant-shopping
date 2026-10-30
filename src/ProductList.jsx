import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();
    // Plants already in the cart, read from the Redux store so the buttons stay right after visiting the cart
    const cartItems = useSelector(state => state.cart.items);
    const inCart = new Set(cartItems.map(item => item.name));

    // The plant data array as described in the project requirements
    const plantsArray = [
        {
            name: "Snake Plant",
            image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
            description: "Produces oxygen at night, improving air quality.",
            cost: "$15"
        },
        {
            name: "Spider Plant",
            image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
            description: "Filters formaldehyde and xylene from the air.",
            cost: "$12"
        },
        {
            name: "Peace Lily",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/960px-Spathiphyllum_cochlearispathum_RTBG.jpg",
            description: "Known for its beautiful white flowers and air-purifying qualities.",
            cost: "$18"
        },
        {
            name: "Monstera Deliciosa",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Monstera_deliciosa2.jpg/960px-Monstera_deliciosa2.jpg",
            description: "Famous for its iconic, split leaves.",
            cost: "$25"
        },
        {
            name: "Fiddle Leaf Fig",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Starr_031108-0130_Ficus_lyrata.jpg/960px-Starr_031108-0130_Ficus_lyrata.jpg",
            description: "A popular, stylish houseplant with large, violin-shaped leaves.",
            cost: "$30"
        },
        {
            name: "ZZ Plant",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Zamioculcas_zamiifolia_1.jpg/960px-Zamioculcas_zamiifolia_1.jpg",
            description: "A low-maintenance plant with glossy, dark green leaves.",
            cost: "$22"
        }
    ];

    // Function to handle adding an item to the cart
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant)); // Dispatches the addItem action with the plant data
    };

    return (
        <div className="product-grid">
            {/* Maps over the plant array to display each plant */}
            {plantsArray.map((plant, index) => (
                <div className="product-card" key={index}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h2 className="product-title">{plant.name}</h2>
                    <p>{plant.description}</p>
                    <p className="product-price">{plant.cost}</p>
                    <button
                        className={`product-button ${inCart.has(plant.name) ? "added-to-cart" : ""}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={inCart.has(plant.name)} // Disabled while the plant is in the cart
                    >
                        {inCart.has(plant.name) ? "Added to Cart" : "Add to Cart"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
