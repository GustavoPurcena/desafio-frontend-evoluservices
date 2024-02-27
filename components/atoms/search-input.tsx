import {SearchInputProps} from "@/utils/types";
import {Input} from "@mui/material";

const SearchInput = ({onChange}: SearchInputProps) => {
	return (
		<Input
			type="text"
			autoComplete="off"
			id="characterName"
			placeholder="Rick, Morty, etc."
			onChange={onChange}
			fullWidth
		/>
	);
};

export default SearchInput;
