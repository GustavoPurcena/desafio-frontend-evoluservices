import {CharacterGrid} from "@/components/organisms/character-grid";
import {fetchCharacters} from "@/utils/api";
import {Character} from "@/utils/types";
import {useSearchParams} from "next/navigation";

export default async function Home() {
  const characterList: Character[] = await fetchCharacters();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CharacterGrid characters={characterList} />
    </main>
  );
}
