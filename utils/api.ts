import axios from "axios";
import {Character} from "./types";

const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Fetches a list of characters from the Rick and Morty API.
 * @returns Promise<Character[]>
 */
export const fetchCharacters = async (): Promise<Character[]> => {
	try {
		const response = await axios.get(`${BASE_URL}/character`);
		return response.data.results;
	} catch (error) {
		// Handle or throw the error as per your error handling strategy
		throw error;
	}
};

/**
 * Fetches a single character by ID from the Rick and Morty API.
 * @param id - The ID of the character.
 * @returns Promise<Character>
 */
export const fetchCharacterById = async (id: number): Promise<Character> => {
	try {
		const response = await axios.get(`${BASE_URL}/character/${id}`);
		return response.data;
	} catch (error) {
		// Handle or throw the error as per your error handling strategy
		throw error;
	}
};
