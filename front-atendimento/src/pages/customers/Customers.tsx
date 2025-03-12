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
import { getAllCustomers } from "../../services/Customers.service";

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    let _customers = await getAllCustomers();
    if (_customers.success) {
      setCustomers(_customers.response);
    }
    console.log("customers", customers);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <React.Fragment>
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
              <TableCell>Nome do cliente</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {customers.map((customer: Customer) => (
              <TableRow key={customer.id}>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Customers;
