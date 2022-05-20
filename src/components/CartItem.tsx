import { Flex, Box, Text, Img, Button } from "@chakra-ui/react"
import { Trash } from "phosphor-react"
import { useCart } from "../contexts/CartContext"
import { ItemProps } from "../pages"

interface CartItemProps {
	item: ItemProps
}

export function CartItem({ item }: CartItemProps) {
	return (
		<Flex p="4" gap="4">
			<Img src={item.imageUrl} w="24" border="1px solid #c4c4c4" />

			<Box>
				<Text fontWeight="bold" fontSize="medium" my="2">
					{item.name}
				</Text>

				<Text fontSize={12} color="gray.500" lineHeight={1}>
					{item.priceFormatted}
				</Text>
				<Text fontWeight="500" fontSize="md">
					{item.sellingPriceFormatted}
				</Text>
			</Box>
		</Flex>
	)
}
