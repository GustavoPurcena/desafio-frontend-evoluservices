export type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
};

export type FetchCharactersAPI = {
	results: Character[];
	info: {
		count: number;
		pages: number;
		next: string;
		prev: string;
	};
};

export type CharacterGridProps = {
	characterList: FetchCharactersAPI;
};

export type CharacterCardProps = {
	character: Character;
};

export type SearchInputProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
