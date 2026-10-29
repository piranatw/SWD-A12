'use client'

import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

type DateReserveProps = {
    venue: string;
    bookDate: Dayjs | null;
    onVenueChange: (venue: string) => void;
    onDateChange: (date: Dayjs | null) => void;
}

export default function DateReserve({
    venue,
    bookDate,
    onVenueChange,
    onDateChange,
}: DateReserveProps) {
    return (
        <div className="flex flex-col gap-8">
            <FormControl variant="standard" required fullWidth>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                labelId="venue-label"
                id="venue"
                name="venue"
                value={venue}
                onChange={(e) => onVenueChange(e.target.value)}>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Event date"
                value={bookDate}
                onChange={(value) => onDateChange(value)}
                slotProps={{textField: {variant: "standard", fullWidth: true, required: true}}}/>
            </LocalizationProvider>
        </div>
    )
}
