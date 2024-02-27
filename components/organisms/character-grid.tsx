"use client";
import {fetchCharacters} from "@/utils/api";
import {Character, CharacterGridProps} from "@/utils/types";
import {Box, CircularProgress, Grid, Input, Pagination, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import CharacterCard from "../molecules/character-card";
import SearchInput from "../atoms/search-input";

export function CharacterGrid({characterList}: CharacterGridProps) {
	const isInitialMount = useRef(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [debouncedSearchText, setDebouncedSearchText] = useState<string>("");
	const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [page, setPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number>(characterList?.info.pages);
	const [filteredCharacters, filterCharacterList] = useState<Character[] | null>(characterList?.results);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (debounceTimeoutRef.current) {
			clearTimeout(debounceTimeoutRef.current);
		}
		debounceTimeoutRef.current = setTimeout(() => {
			setDebouncedSearchText(value);
		}, 600); // delay in ms to wait for user to stop typing
	};

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		const fetch = async () => {
			setIsLoading(true);
			const {
				results: characters,
				info: {pages: pageCount},
			} = await fetchCharacters(page, debouncedSearchText);

			setPageCount(pageCount);
			filterCharacterList(characters);
			setIsLoading(false);
		};

		fetch();
	}, [page, debouncedSearchText]);

	return (
		<Box padding={3}>
			<Grid container direction="column" alignItems="center" justifyContent="center" marginBottom={3}>
				<Grid item>
					<Typography variant="h4" gutterBottom>
						Search for Characters!
					</Typography>
				</Grid>
				<Grid item width={300}>
					<SearchInput onChange={handleSearch} />
				</Grid>
			</Grid>

			<Grid container spacing={2}>
				{isLoading ? (
					<Grid item xs={12} className="flex justify-center">
						<CircularProgress />
					</Grid>
				) : filteredCharacters?.length === 0 ? (
					<Grid item xs={12} className="flex justify-center">
						<h2>No characters found</h2>
					</Grid>
				) : (
					filteredCharacters?.map((character) => <CharacterCard key={character.id} character={character} />)
				)}
			</Grid>
			<Box display="flex" justifyContent="center" marginTop={2}>
				<Pagination count={pageCount} page={page} onChange={(event, value) => setPage(value)} color="primary" />
			</Box>
		</Box>
	);
}
