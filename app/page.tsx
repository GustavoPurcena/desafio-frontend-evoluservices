import {CharacterGrid} from "@/components/organisms/character-grid";
import {fetchCharacters} from "@/utils/api";
import {FetchCharactersAPI} from "@/utils/types";

export default async function Home() {
	const characterList: FetchCharactersAPI = await fetchCharacters();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<CharacterGrid characterList={characterList} />
		</main>
	);
}
