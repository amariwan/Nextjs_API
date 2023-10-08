import { useState } from 'react';
import {
	Flex,
	IconButton,
	Button,
	useDisclosure,
	Link,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	VStack,
	Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const bg =
		'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)';

	const router = useRouter();

	return (
		<Flex justifyContent='space-between' alignItems='center'>
			<NextLink href='/' passHref>
				<Image src='/logo.png' width='150px' pr='2' />
			</NextLink>
			<IconButton
				aria-label='Open Menu'
				size='lg'
				backgroundColor='whiteAlpha.200'
				icon={
					<HamburgerIcon
						color='whiteAlpha.800'
						_hover={{
							backgroundColor: 'whiteAlpha.300',
						}}
						backgroundColor='whiteAlpha.200'
					/>
				}
				onClick={onOpen}
				display={['flex', 'flex', 'none', 'none']}
			/>
			<Drawer placement='right' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent bg={bg}>
					<DrawerCloseButton color='whiteAlpha.800' />
					<VStack alignItems='flex-start' pt='20'>
						<NextLink href='/' passHref>
							<Button
								as={Link}
								variant='ghost'
								aria-label='Home'
								onClick={onClose}
								w='100%'
								color='whiteAlpha.800'
								_hover={{
									backgroundColor: 'whiteAlpha.300',
								}}
							>
								HOME
							</Button>
						</NextLink>
						<NextLink href='/favorites' passHref>
							<Button
								as={Link}
								variant='ghost'
								aria-label='Favorites'
								onClick={onClose}
								w='100%'
								color='whiteAlpha.800'
								_hover={{
									backgroundColor: 'whiteAlpha.300',
								}}
							>
								FAVORİTES
							</Button>
						</NextLink>
					</VStack>
				</DrawerContent>
			</Drawer>
			<Flex
				display={['none', 'none', 'flex', 'flex']}
				alignItems='center'
				justifyContent='flex-end'
			>
				<NextLink href='/' passHref>
					<Button
						variant={router.pathname === '/' ? 'solid' : 'ghost'}
						colorScheme='whiteAlpha'
						_hover={{
							backgroundColor: 'whiteAlpha.300',
						}}
						color='whiteAlpha.800'
						aria-label='Home'
						mx={2}
					>
						HOME
					</Button>
				</NextLink>
				<NextLink href='/favorites' passHref>
					<Button
						variant={router.pathname === '/favorites' ? 'solid' : 'ghost'}
						colorScheme='whiteAlpha'
						_hover={{
							backgroundColor: 'whiteAlpha.300',
						}}
						color='whiteAlpha.800'
						aria-label='Favorites'
						mx={2}
					>
						FAVORİTES
					</Button>
				</NextLink>
			</Flex>
		</Flex>
	);
};

export default Navbar;
