"use client";
import {CharacterCardProps} from "@/utils/types";
import {Box, Typography, Paper, Grid, List, ListItem, ListItemText, Divider, Button} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/navigation";

const CharacterDetails = ({character}: CharacterCardProps) => {
	const router = useRouter();

	const handleBackClick = () => {
		router.push("/"); // Redirects to the landing page
	};

	return (
		<Box sx={{my: 4, mx: 2, display: "flex", flexDirection: "column", alignItems: "center"}}>
			<Paper elevation={3} sx={{padding: 3, margin: "auto", maxWidth: 600}}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Image src={character.image} alt={character.name} width={200} height={200} className="rounded-lg" />
					</Grid>
					<Grid item xs={12} md={8}>
						<Typography variant="h4" gutterBottom>
							{character.name}
						</Typography>
						<List>
							<ListItem>
								<ListItemText primary="Status" secondary={character.status} />
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText primary="Species" secondary={character.species} />
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText primary="Type" secondary={character.type || "N/A"} />
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText primary="Gender" secondary={character.gender} />
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText primary="Origin" secondary={character.origin.name} />
							</ListItem>
							<Divider />
							<ListItem>
								<ListItemText primary="Location" secondary={character.location.name} />
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Box marginTop={2}>
					<Typography variant="h6">Episodes featured:</Typography>
					<Box display="flex" flexWrap="wrap" gap={1}>
						{character.episode.map((episode, index) => (
							<Typography key={index} variant="body2" sx={{padding: "4px 8px"}}>
								{episode.slice(40)}
							</Typography>
						))}
					</Box>
				</Box>
			</Paper>
			<Button variant="outlined" color="primary" onClick={handleBackClick} sx={{mt: 2}}>
				Back to Search
			</Button>
		</Box>
	);
};

export default CharacterDetails;
