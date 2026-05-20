export const cartInitialState = {
    cartProducts: [],
    DeliveryCharges: 100,
    platformFee:10,
    totalAmount: 0,
    cartLength: 0
};

function calculateCart(cartPrd, delCharges, platformFee){
    let totalAmt = cartPrd.reduce(
        (acc, item) => acc + item.prod_price * (item.prodQuantity || 1),
        0
    );

    totalAmt = totalAmt + delCharges + platformFee;

    return {
        cartProducts: cartPrd,
        DeliveryCharges: delCharges,
        platformFee:platformFee,
        totalAmount: cartPrd.length ? totalAmt : 0,
        cartLength: cartPrd.length
    };
}



export const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_BAG': {
            console.log("Incoming:", action.payload.prod_id);
            console.log("Existing cart:", state.cartProducts);

            const existingProduct = state.cartProducts.find(
                item => item.prod_id === action.payload.prod_id
            );

            console.log("Found existing?", existingProduct);

            let updatedCart;

            if (existingProduct) {
                // ✅ Increase quantity
                updatedCart = state.cartProducts.map(item =>
                    item.prod_id === action.payload.prod_id
                        ? { ...item, prodQuantity: item.prodQuantity + 1 }
                        : item
                );
            } else {
                // ✅ Create new product (FIXED SCOPE)
                const newProduct = {
                    ...action.payload,
                    cart_id: crypto.randomUUID(),
                    prodQuantity: 1
                };
                console.log(newProduct)
                updatedCart = [...state.cartProducts, newProduct];
            }

            return calculateCart(updatedCart, state.DeliveryCharges, state.platformFee);
        }

        case 'QUANTITY_INCREASE': {
            return state; // fix later if needed
        }

        case 'QUANTITY_DECREASE': {
            return state; // fix later if needed
        }

        case 'EMPTY_BAG':
            return {
                cartProducts: [],
                totalAmount: 0,
                DeliveryCharges: 100,
                cartLength: 0
            };

        default:
            return state;
    }
};
