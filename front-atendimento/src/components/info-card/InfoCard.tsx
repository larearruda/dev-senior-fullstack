import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

interface InfoCardProps {
	mainTitle: string,
	numberCount: number,
	subtitle: string,
	color: 'primary' | 'warning' | 'danger'
}

const InfoCard: React.FC<InfoCardProps> = ({mainTitle, numberCount, subtitle}) => {
	return (
		<React.Fragment>
			<Card variant="outlined" sx={{
					width: 150,
					marginRight: 2,
				}}>
				<CardContent>
					<Typography  sx={{ color: 'text.secondary', fontSize: 14 }}>
						{mainTitle}
					</Typography>
					<Typography variant="h5" component="div">
						{String(numberCount)}
					</Typography>
					<Typography variant="body2">
						{subtitle}
					</Typography>
				</CardContent>
				{/* <CardActions>
					<Button size="small">Learn More</Button>
				</CardActions> */}
			</Card>
		</React.Fragment>
	)
}
export default InfoCard;
