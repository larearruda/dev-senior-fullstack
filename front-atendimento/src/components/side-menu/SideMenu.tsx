import React from 'react';
import { Box, Divider, styled } from '@mui/material';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';

const SideMenu: React.FC = () => {
	// f7f9fa

	const drawerWidth = 240;

	const Drawer = styled(MuiDrawer)({
		width: drawerWidth,
		flexShrink: 0,
		boxSizing: 'border-box',
		mt: 10,
		[`& .${drawerClasses.paper}`]: {
			width: drawerWidth,
			boxSizing: 'border-box',
		},
	});
	return (
		<Drawer
			variant="permanent"
			sx={{
				display: { xs: 'none', md: 'block' },
				[`& .${drawerClasses.paper}`]: {
					backgroundColor: '#f7f9fa',
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					mt: 'calc(var(--template-frame-height, 0px) + 4px)',
					p: 1.5,
				}}
			>
			</Box>
			<Divider />
			<Box
				sx={{
					overflow: 'auto',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
			</Box>
		
		</Drawer>
	);
};

export default SideMenu;