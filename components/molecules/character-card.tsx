"use client";
import React from "react";
import Image from "next/image";
import {CharacterCardProps} from "@/utils/types";
import {Grid, Typography, Box, Paper, Tooltip} from "@mui/material";
import {styled} from "@mui/material/styles";
import Link from "next/link";

const StyledPaper = styled(Paper)({
	minWidth: 150,
	maxWidth: 200,
	margin: "auto",
	marginBottom: 2,
	transition: "transform 0.3s ease-in-out",
	"&:hover": {
		transform: "scale(1.05)",
		cursor: "pointer",
	},
});

const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={character.id}>
			<Link href={`/${character.id}`} passHref>
				<StyledPaper elevation={3}>
					<Box display="flex" flexDirection="column" alignItems="center" padding={1}>
						<Image src={character.image} alt={character.name} width={96} height={96} className="rounded-full" />
						<Tooltip title={character.name} placement="bottom">
							<Typography
								variant="h6"
								gutterBottom
								noWrap
								sx={{
									overflow: "hidden",
									textOverflow: "ellipsis",
									maxWidth: "100%",
								}}
							>
								{character.name}
							</Typography>
						</Tooltip>
						<Typography variant="body2" color="text.secondary">
							{character.species}
						</Typography>
					</Box>
				</StyledPaper>
			</Link>
		</Grid>
	);
};

export default CharacterCard;
