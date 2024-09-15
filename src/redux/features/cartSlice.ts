import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	image: string;
}

interface CartState {
	cartItems: CartItem[];
	totalAmount: number;
	totalItems: number;
}

const initialState: CartState = {
	cartItems: [],
	totalAmount: 0,
	totalItems: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === newItem.id);
			console.log(newItem);

			if (existingItem) {
				// If item already exists, just increase the quantity
				existingItem.quantity += newItem.quantity;
			} else {
				// Otherwise, add the new item to the cart
				state.cartItems.push(newItem);
			}

			// Update total amount and total items
			state.totalAmount += newItem.price * newItem.quantity;
			state.totalItems += newItem.quantity;
		},
		removeItemFromCart: (state, action) => {
			const id = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);

			if (existingItem) {
				// Remove the item and update total amount and items
				state.totalAmount -= existingItem.price * existingItem.quantity;
				state.totalItems -= existingItem.quantity;
				state.cartItems = state.cartItems.filter((item) => item.id !== id);
			}
		},
		updateItemQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);

			if (existingItem) {
				const difference = quantity - existingItem.quantity;
				existingItem.quantity = quantity;
				state.totalAmount += existingItem.price * difference;
				state.totalItems += difference;
			}
		},
		clearCart: (state) => {
			state.cartItems = [];
			state.totalAmount = 0;
			state.totalItems = 0;
		}
	}
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount;
export const selectTotalItems = (state: RootState) => state.cart.totalItems;
