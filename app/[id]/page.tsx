import CharacterDetails from "@/components/molecules/character-details";
import {fetchCharacterById} from "@/utils/api";
import {Character} from "@/utils/types";
import {redirect} from "next/navigation";

export default async function CharacterPage({params}: {params: {id: string}}) {
	const {id} = params;
	if (!id) {
		redirect("/");
	}
	const character: Character = await fetchCharacterById(Number(id));

	return <CharacterDetails character={character} />;
}
