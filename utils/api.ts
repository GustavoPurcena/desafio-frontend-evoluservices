import axios from "axios";
import {Character} from "./types";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (page: number = 1, name: string = ''): Promise<Character[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/character`, {
      params: {
        page: page,
        name: name
      }
    });
    return response.data.results;
  } catch (error) {
    // Handle or throw the error as per your error handling strategy
    throw error;
  }
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
	try {
		const response = await axios.get(`${BASE_URL}/character/${id}`);
		return response.data;
	} catch (error) {
		// Handle or throw the error as per your error handling strategy
		throw error;
	}
};
