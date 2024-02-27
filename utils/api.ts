import axios from "axios";
import {Character, FetchCharactersAPI} from "./types";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (page: number = 1, name: string = ""): Promise<FetchCharactersAPI> => {
	try {
		const response = await axios.get(`${BASE_URL}/character`, {
			params: {
				page: page,
				name: name,
			},
		});
		return response.data as FetchCharactersAPI;
	} catch (error) {
		if (error instanceof axios.AxiosError) {
			// no characters found
			if (name !== "" && error.response?.status === 404) {
				return {
					info: {
						count: 0,
						pages: 0,
						next: "",
						prev: "",
					},
					results: [],
				};
			}
		}
		throw error;
	}
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
	try {
		const response = await axios.get(`${BASE_URL}/character/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};
