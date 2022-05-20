import { Box, Button, Img, Text } from "@chakra-ui/react"
import { ShoppingCart } from "phosphor-react"
import { ItemProps } from "../pages"

interface ShopItemProps {
	item: ItemProps
	onAddItemToCart: (item: ItemProps) => void
}

export function ShopItem({ item, onAddItemToCart }: ShopItemProps) {
	return (
		<Box p="4" px="8" bgColor="white" borderRadius="8" w={410}>
			<Img w="52" mx="auto" src={item.imageUrl} />

			<Text fontSize="md">{item.name}</Text>
			<Text color="gray.500">{item.priceFormatted}</Text>
			<Text fontWeight="bold">{item.sellingPriceFormatted}</Text>

			<Button
				leftIcon={<ShoppingCart />}
				w="full"
				colorScheme="twitter"
				bgColor="blue.500"
				color="white"
				py="6"
				onClick={() => onAddItemToCart(item)}
			>
				Adicionar ao carrinho
			</Button>
		</Box>
	)
}
