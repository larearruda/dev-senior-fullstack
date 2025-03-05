import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { getAllTickets, Ticket } from "../../services/Ticket.service";
import InfoCard from "../../components/info-card/InfoCard";
import { useNavigate } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import { useSelector } from "react-redux";
import { StateIterface } from "../../store/store";

const Dashboard: React.FC = () => {
  const [tickets, setTickets] = useState([]);

  const userAuth = useSelector((state: StateIterface) => state.auth.user);
  const navigate = useNavigate();

  const getTickets = async () => {
    let t = await getAllTickets();
    console.log("respposta da api formatada", t);
    if (t.success) {
      setTickets(t.response);
    }
  };

  // interface FilterTicket
  const filterTickets = (status: string) => {
    let filtered = tickets.filter((t: Ticket) => t.status === status);
    return filtered.length;
  };

  const openChat = (ticket: Ticket) => {
    console.log("tem que colocar uma ação de onclick em algum botao", ticket);
    navigate("/chat");
  };

  useEffect(() => {
    console.log("variaveis de estado:", userAuth);
    getTickets();
  }, []);

  const allTicketsTable = (
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
            <TableCell>Numero da reserva</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Titulo da Solicitação</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket: Ticket) => (
            <TableRow key={ticket.id}>
              <TableCell> {ticket.bookingCode} </TableCell>
              <TableCell> {ticket.status} </TableCell>
              <TableCell> {ticket.title} </TableCell>
              <TableCell>
                <Button>
                  <MessageIcon onClick={() => openChat(ticket)} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: 5,
        }}
      >
        <InfoCard
          mainTitle="Chamados novos"
          numberCount={filterTickets("Novo")}
          subtitle="hoje"
          color="primary"
        />
        <InfoCard
          mainTitle="Chamados abertos"
          numberCount={filterTickets("Aberto")}
          subtitle="esta semana"
          color="warning"
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        {/* nao tá exibindo o navbar, sei lá pq */}
        {/* <NavBar />  */}
      </Box>
      <Box sx={{ display: "flex" }}>{allTicketsTable}</Box>
    </React.Fragment>
  );
};

export default Dashboard;
