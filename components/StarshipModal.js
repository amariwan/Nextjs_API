import { useState } from 'react';
import { Box, Text, Button, useDisclosure, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';

const StarshipModal = ({ starship }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const OverlayOne = () => <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />;
	const [overlay, setOverlay] = useState(<OverlayOne />);
	const bg =
		'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)';

	return (
		<Box>
			<Button
				fontSize='15'
				_hover={{
					backgroundColor: 'whiteAlpha.300',
				}}
				backgroundColor='whiteAlpha.200'
				color='whiteAlpha.800'
				variant='solid'
				onClick={onOpen}
			>
				Character About
			</Button>
			<Modal
				isCentered
				size='md'
				variant='purple'
				backGround='blue'
				overlayClassName='custom-modal-overlay'
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<Button
					_hover={{
						backgroundColor: 'whiteAlpha.300',
					}}
					onClick={onOpen}
				>
					Open
				</Button>
				{overlay}
				<ModalContent bg={bg}>
					<ModalHeader fontWeight='bold' color='whatsapp.600'>
						{starship.name}
					</ModalHeader>
					<ModalCloseButton
						color='white'
						_hover={{
							backgroundColor: 'whiteAlpha.200',
						}}
					/>
					<ModalBody color='white'>
						<Stack textAlign='justify'>
							<Text>
								<Text as='span' color='orange.200'>
									Model:{' '}
								</Text>
								{starship.model}
							</Text>
							<Text>
								<Text as='span' color='orange.200'>
									Hyperdrive rating:{' '}
								</Text>
								{starship.hyperdrive_rating}
							</Text>
						</Stack>
					</ModalBody>
					<ModalFooter>
						<Button
							_hover={{
								backgroundColor: 'whiteAlpha.300',
							}}
							backgroundColor='whiteAlpha.200'
							color='whiteAlpha.800'
							mr={3}
							onClick={onClose}
						>
							Close
						</Button>
						<Link href={`/${starship.name}`}>
							<Button
								_hover={{
									backgroundColor: 'whiteAlpha.300',
								}}
								backgroundColor='whiteAlpha.200'
								color='whiteAlpha.800'
								variant='solid'
							>
								Show More
							</Button>
						</Link>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default StarshipModal;
