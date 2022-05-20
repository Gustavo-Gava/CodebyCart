import { ChakraProvider } from "@chakra-ui/react"
import { CartContextProvider } from "../contexts/CartContext"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<CartContextProvider>
				<Component {...pageProps} />
			</CartContextProvider>
		</ChakraProvider>
	)
}

export default MyApp
