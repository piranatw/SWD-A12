"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { Dayjs } from "dayjs";
import DateReserve from "@/components/DateReserve";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingPage() {
    const dispatch = useDispatch<AppDispatch>();

    const [nameLastname, setNameLastname] = useState("");
    const [tel, setTel] = useState("");
    const [venue, setVenue] = useState("");
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);

    const makeBooking = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!nameLastname || !tel || !venue || !bookDate) return;

        dispatch(addBooking({
            nameLastname,
            tel,
            venue,
            bookDate: bookDate.format("YYYY/MM/DD"),
        }));
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] bg-neutral-50 px-6 py-16
        flex flex-col items-center gap-8">
            <form onSubmit={makeBooking} className="w-full max-w-[520px] rounded-md
            bg-white px-12 py-10 shadow-md">
                <h1 className="mb-10 text-5xl font-light text-neutral-800">
                    Venue Booking
                </h1>

                <div className="flex flex-col gap-8">
                    <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="Name-Lastname"
                    label="Name-Lastname"
                    value={nameLastname}
                    onChange={(e) => setNameLastname(e.target.value)}/>

                    <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="Contact-Number"
                    label="Contact-Number"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}/>

                    <DateReserve
                    venue={venue}
                    bookDate={bookDate}
                    onVenueChange={setVenue}
                    onDateChange={setBookDate}/>
                </div>

                <Button
                type="submit"
                name="Book Venue"
                variant="contained"
                fullWidth
                sx={{marginTop: "2.5rem", paddingY: "0.6rem"}}>
                    Book Venue
                </Button>
            </form>
        </main>
    );
}
