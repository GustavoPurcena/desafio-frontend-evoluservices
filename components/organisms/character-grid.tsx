"use client";
import {Character} from "@/utils/types";
import {Input} from "@mui/material";
import {useState} from "react";

interface CharacterGridProps {
	characters: Character[] | null;
}

export function CharacterGrid({characters}: CharacterGridProps) {
	const [searchText, setSearchText] = useState("");

	/*  const searchFilter = (filteredCharacters: any) => {
        return filteredCharacters.filter(
            (character: any) => character.name.toLowerCase().includes(searchText.toLowerCase())
        )
    } */

	// save the filtered array of objects
	// const filteredCharacters = searchFilter(characters);

	// show the filtered array to user

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
			{characters?.map((character) => (
				<div key={character.id} className="flex items-center gap-4">
					<img src={character.image} alt={character.name} className="w-16 h-16 rounded-full" />
					<div>
						<h3>{character.name}</h3>
						<p>{character.species}</p>
					</div>
				</div>
			))}
		</div>
	);
}
