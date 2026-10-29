import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[];
}

const initialState: BookState = { bookItems: [] };

const isSameBooking = (a: BookingItem, b: BookingItem) =>
    a.nameLastname === b.nameLastname
    && a.tel === b.tel
    && a.venue === b.venue
    && a.bookDate === b.bookDate;

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const existingIndex = state.bookItems.findIndex(
                (item) => item.venue === action.payload.venue
                    && item.bookDate === action.payload.bookDate
            );
            if (existingIndex >= 0) {
                state.bookItems[existingIndex] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(
                (item) => !isSameBooking(item, action.payload)
            );
        },
    },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
