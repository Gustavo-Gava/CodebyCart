import { Flex, Box, Text, Img } from "@chakra-ui/react"
import { ItemProps } from "../pages"

interface CartItemProps {
	item: ItemProps
}

export function CartItem({ item }: CartItemProps) {
	return (
		<Flex p="4" gap="2">
			<Img src={item.imageUrl} w="20" border="1px solid #c4c4c4" />

			<Box>
				<Text fontWeight="bold" fontSize="medium" mb="2">
					{item.name}
				</Text>

				<Text fontSize={12} color="gray.500" lineHeight={1}>
					{item.priceFormatted}
				</Text>
				<Text fontWeight="500" fontSize="md">
					{item.priceFormatted}
				</Text>
			</Box>
		</Flex>
	)
}
