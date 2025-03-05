import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Booking, getAllBookings } from "../../services/Booking.service";

const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    let _bookings = await getAllBookings();
    if (_bookings.success) {
      setBookings(_bookings.response);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <React.Fragment>
      {" "}
      <TableContainer
        component={Paper}
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código da reserva</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking: Booking) => (
              <TableRow key={booking.id}>
                <TableCell> {booking.bookingCode} </TableCell>
                <TableCell> {booking.status} </TableCell>
                <TableCell> </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Bookings;
