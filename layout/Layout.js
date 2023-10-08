import React from 'react';
import Navbar from '@/components/Navbar';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<Box bg='#020314'>
			<Navbar />
			{children}
		</Box>
	);
};

export default Layout;
