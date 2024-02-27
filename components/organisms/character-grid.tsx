"use client";
import {fetchCharacters} from "@/utils/api";
import {Character} from "@/utils/types";
import {Grid, Input, Pagination} from "@mui/material";
import {useEffect, useRef, useState} from "react";

interface CharacterGridProps {
	characters: Character[] | null;
}

export function CharacterGrid({characters}: CharacterGridProps) {
	console.log(characters);
	const [searchText, setSearchText] = useState<string>("");
	const [debouncedSearchText, setDebouncedSearchText] = useState<string>("");
	const [page, setPage] = useState<number>(1);
	const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const [filteredCharacters, filterCharacterList] = useState<Character[] | null>(characters);

	useEffect(() => {
		if (debounceTimeoutRef.current) {
			clearTimeout(debounceTimeoutRef.current);
		}

		debounceTimeoutRef.current = setTimeout(() => {
			setDebouncedSearchText(searchText);
		}, 500); // delay in ms

		return () => {
			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current);
			}
		};
	}, [searchText]);

	useEffect(() => {
		const fetch = async () => {
			const characters = await fetchCharacters(page, debouncedSearchText);
			filterCharacterList(characters);
		};

		fetch();
	}, [page, debouncedSearchText]);

	return (
		<div>
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<h3>Character Name</h3>
				<Input
					type="text"
					value={searchText}
					autoComplete="off"
					id="characterName"
					placeholder="Rick, Morty, etc."
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</div>
			<Grid container spacing={2}>
				{filteredCharacters?.map((character) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
						<div key={character.id} className="flex items-center gap-4">
							<img src={character.image} alt={character.name} className="w-16 h-16 rounded-full" />
							<div>
								<h3>{character.name}</h3>
								<p>{character.species}</p>
							</div>
						</div>
					</Grid>
				))}
			</Grid>
			<Pagination
				count={10} // Replace with total number of pages
				page={page}
				onChange={(event, value) => {
                    console.log(value);
                    setPage(value)
                }}
			/>
		</div>
	);
}
