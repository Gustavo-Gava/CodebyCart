import { Box, Button, Divider, Flex, Icon, Img, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { CaretLeft } from "phosphor-react"
import { useMemo } from "react"
import { ItemProps } from ".."
import { CartItem } from "../../components/CartItem"
import { useCart } from "../../contexts/CartContext"
import { formatter } from "../../utils/formatMoney"

export default function Cart() {
	const { cart, setCart } = useCart()
	const route = useRouter()

	const totalPrice = useMemo(() => {
		return cart.reduce((total, product) => {
			return total + product.sellingPrice
		}, 0)
	}, [cart])

	const totalPriceFormatted = useMemo(() => {
		return formatter.format(totalPrice)
	}, [totalPrice])

	function handleNavigateBack() {
		route.back()
	}

	return (
		<Box maxW={480} mx="auto" mt="12" bgColor="white" borderRadius="8" position="relative">
			<Box position="absolute" top="4" left="4">
				<Icon
					as={CaretLeft}
					fontSize={22}
					_hover={{ opacity: 0.9, cursor: "pointer" }}
					onClick={handleNavigateBack}
				/>
			</Box>

			<Text as="h2" textAlign="center" fontWeight="700" fontSize="xl" py="3">
				Meu Carrinho
			</Text>

			<Box as="hr" w="100%" h="1px" bgColor="gray.500" />

			<Box>
				{cart.map((item: ItemProps) => (
					<CartItem item={item} />
				))}
			</Box>

			<Box as="hr" w="100%" h="1px" bgColor="gray.500" />

			<Flex flexDir="column" align="center" justify="center">
				<Flex w="full" align="center" justify="space-between" px="4" py="3">
					<Text fontWeight="bold">Total</Text>
					<Text fontWeight="bold">{totalPriceFormatted}</Text>
				</Flex>

				{totalPrice >= 10 && (
					<Box py="1" px="2" bgColor="green.200" display="inline-block" borderRadius="full" mb="4">
						<Text color="green.700">Parabéns, sua compra tem frete grátis!</Text>
					</Box>
				)}
			</Flex>
			<Box as="hr" w="100%" h="1px" bgColor="gray.500" />

			<Flex as="footer" px="4" py="3" align="center" justify="center">
				<Button colorScheme="twitter" bgColor="blue.500" color="white" w="full" py="6">
					Finalizar Compra
				</Button>
			</Flex>
		</Box>
	)
}
