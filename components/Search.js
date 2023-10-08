import { Input, InputGroup, InputLeftElement, Flex, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useStarshipsContext } from '@/context/StarshipsContext';

const Search = () => {
	const { setStarships, setPage, searchQuery, setSearchQuery } = useStarshipsContext();

	const handleChange = (e) => {
		const value = e.target.value;
		setSearchQuery(value);
		setPage(1);
		setStarships([]);
	};

	return (
		<Flex justifyContent='center'>
			<Stack>
				<InputGroup>
					<InputLeftElement pointerEvents='all'>
						<Search2Icon color='whiteAlpha.800' />
					</InputLeftElement>
					<Input
						placeholder='Search Name / Model '
						value={searchQuery}
						onChange={handleChange}
						pr='5.5rem'
						border='1px'
						borderColor='whiteAlpha.400'
						color='yellow.500'
					/>
				</InputGroup>
			</Stack>
		</Flex>
	);
};

export default Search;
