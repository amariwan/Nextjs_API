import {
	Flex,
	Card,
	Heading,
	Stack,
	Image,
	Center,
	CardFooter,
	ButtonGroup,
} from '@chakra-ui/react';
import images from '../public/dataImage.json';
import { useStarshipsContext } from '@/context/StarshipsContext';
import { motion } from 'framer-motion';
import { StarIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import StarshipModal from './StarshipModal';

const StarshipCard = ({ starship }) => {
	const image = images.find((image) => image.name === starship.name);
	const { handleAddFavorite, favorite, removeFavorite } = useStarshipsContext();

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const handleIsFavorite = () => {
			setIsFavorite(favorite.some((item) => item.name === starship.name));
		};
		handleIsFavorite();
	}, [favorite, starship]);

	const handleToggleFavorite = () => {
		if (isFavorite) {
			removeFavorite(starship);
		} else {
			handleAddFavorite(starship);
		}
	};

	return (
		<Flex
			as={motion.div}
			whileTap={{ scale: 0.9 }}
			bg='#05061d'
			transition='0.5s linear'
			position='relative'
		>
			<Card
				bg='transparent'
				borderRadius='5'
				_hover={{
					boxShadow: '10px 10px 47px 0px rgba(255, 0, 0,0.2)',
					transition: '400ms',
				}}
				width='300px'
			>
				<Image
					src={image.img}
					style={{
						width: '300px',
						height: '300px',
						borderRadius: '5px',
					}}
				/>
				<Stack>
					<Heading
						display='grid'
						placeItems='center'
						minH='76px'
						size='md'
						pt='4'
						color='orange.400'
					>
						{starship.name}
					</Heading>
				</Stack>
				<Center>
					<CardFooter>
						<ButtonGroup>
							<StarIcon
								cursor='pointer'
								top='2'
								right='2'
								position='absolute'
								p='2'
								background={isFavorite ? 'white' : 'blackAlpha.200'}
								color={isFavorite ? 'orange.400' : 'white'}
								w={8}
								h={8}
								onClick={handleToggleFavorite}
							/>
							<StarshipModal starship={starship} />
						</ButtonGroup>
					</CardFooter>
				</Center>
			</Card>
		</Flex>
	);
};

export default StarshipCard;
