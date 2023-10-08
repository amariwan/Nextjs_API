import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import StarshipsProvider from '@/context/StarshipsContext';
import Layout from '@/layout/Layout';

export default function App({ Component, pageProps }) {
	const theme = extendTheme({
		fonts: {
			body: ` 'Bruno Ace SC', cursive;`,
			heading: `'Bruno Ace SC', cursive;`,
		},
	});
	const queryClient = new QueryClient();
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<StarshipsProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</StarshipsProvider>
			</QueryClientProvider>
		</ChakraProvider>
	);
}
