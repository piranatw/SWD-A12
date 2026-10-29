"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { AppDispatch, RootState } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
    const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    if (bookItems.length === 0) {
        return (
            <div className="p-6 text-center text-xl text-neutral-700">
                No Venue Booking
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-4">
            {
                bookItems.map((item) => (
                    <div
                    key={`${item.venue}-${item.bookDate}`}
                    className="w-full max-w-[520px] rounded-md bg-white
                    px-8 py-4 text-neutral-800 shadow-md">
                        <div className="text-xl">{item.nameLastname}</div>
                        <div>Contact Number: {item.tel}</div>
                        <div>Venue: {item.venue}</div>
                        <div>Booking Date: {item.bookDate}</div>
                        <Button
                        name="Cancel Booking"
                        variant="outlined"
                        color="error"
                        sx={{marginTop: "0.75rem"}}
                        onClick={() => dispatch(removeBooking(item))}>
                            Cancel Booking
                        </Button>
                    </div>
                ))
            }
        </div>
    );
}
