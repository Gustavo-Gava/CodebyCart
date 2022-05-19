import { Flex, Box, Text, Img } from "@chakra-ui/react"

export function CartItem() {
	return (
		<Flex p="4" gap="2">
			<Img
				src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000"
				w="20"
				h="20"
				border="1px solid #c4c4c4"
			/>

			<Box>
				<Text fontWeight="bold" fontSize="medium" mb="2">
					Trufa de morango
				</Text>

				<Text fontSize={12} color="gray.500" lineHeight={1}>
					R$ 1,23
				</Text>
				<Text fontWeight="500" fontSize="md">
					R$ 1,11
				</Text>
			</Box>
		</Flex>
	)
}
