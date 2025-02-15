import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getAllTickets, Ticket } from '../../services/Ticket.service';
import InfoCard from '../../components/info-card/InfoCard';
import SideMenu from '../../components/side-menu/SideMenu';


const TicketsDashboard: React.FC = () => {
	const [tickets, setTickets] =  useState([]);

	const getTickets = async () => {
		let t = await getAllTickets();
		setTickets(t);
	}

	// interface FilterTicket
	const filterTickets  = (status: string) => {
		let filtered = tickets.map((t: Ticket) => {
			if(t.status === status){
				return t;
			}
		})
		return filtered.length;
	};

	useEffect(() => {
		getTickets();
	}, [])

	// const bull = (
	// 	<Box
	// 		component="span"
	// 		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	// 	>
	// 		•
	// 	</Box>
	// );
  
	const allTicketsTable = (
			<TableContainer 
        component={Paper}
        sx={{ 
          marginTop: 5,
          display: 'flex',
				flexDirection: 'row',
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
					{
						tickets.map((ticket: Ticket) => (
							<TableRow key={ticket.id}>
								<TableCell> {ticket.bookingCode} </TableCell>
								<TableCell> {ticket.status} </TableCell>
								<TableCell> {ticket.title} </TableCell>
								<TableCell></TableCell>
							</TableRow>
						))
					}

				</TableBody>
			</Table>
			</TableContainer>
	);

	return (
		<React.Fragment>
			<Box sx={{ 
				display: 'flex',
				flexDirection: 'row',
				marginTop: 5
			}}>
			<SideMenu />
			<InfoCard 
					mainTitle='Chamados novos'
					numberCount={filterTickets("Novo")}
					subtitle='hoje'
					color='primary'
					/>
				<InfoCard 
					mainTitle='Chamados abertos'
					numberCount={filterTickets("Aberto")}
					subtitle='esta semana'
					color='warning'/>
			</Box>
      <Box sx={{display: 'flex', }}>
				{allTicketsTable}
      </Box>
		</React.Fragment>
	);
}

export default TicketsDashboard;