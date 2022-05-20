import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { ShoppingBag, ShoppingCart } from "phosphor-react"
import { useCallback, useEffect, useState } from "react"
import { ShopItem } from "../components/ShopItem"
import { useCart } from "../contexts/CartContext"
import { api } from "../services/api"
import { formatter } from "../utils/formatMoney"

export interface ItemProps {
	id: string
	price: number
	priceFormatted: string
	sellingPrice: number
	sellingPriceFormatted: string
	name: string
	imageUrl: string
}

export default function Home() {
	const { cart, setCart } = useCart()
	const route = useRouter()
	const [items, setItems] = useState([] as ItemProps[])

	function onAddItemToCart(item: ItemProps) {
		setCart((prevValue) => [...prevValue, item])
	}

	function handleNavigateToCart() {
		route.push("/cart")
	}

	useEffect(() => {
		const loadData = async () => {
			const [cheapestItems, expensiveItems] = await Promise.all([
				api.get("cheapestItems"),
				api.get("expensiveItems"),
			])

			const cheapestItemsFormatted = cheapestItems.data.items.map((item) => {
				const newItemFormatted = {
					...item,
					price: item.price / 100,
					priceFormatted: formatter.format(item.price / 100),
					sellingPrice: item.sellingPrice / 100,
					sellingPriceFormatted: formatter.format(item.sellingPrice / 100),
				}

				return newItemFormatted
			})

			const expensiveItemsFormatted = expensiveItems.data.items.map((item) => {
				const newItemFormatted = {
					...item,
					price: item.price / 100,
					priceFormatted: formatter.format(item.price / 100),
					sellingPrice: item.sellingPrice / 100,
					sellingPriceFormatted: formatter.format(item.sellingPrice / 100),
				}

				return newItemFormatted
			})

			setItems([...cheapestItemsFormatted, ...expensiveItemsFormatted])
		}

		loadData()
	}, [])

	return (
		<Box maxW={1300} mx="auto" p="4">
			<Flex as="header" justify="space-between" mb="4">
				<Text fontWeight="bold" fontSize="2xl">
					CodebyCart
				</Text>

				<Link onClick={handleNavigateToCart} _hover={{ textDecoration: "none", opacity: 0.8 }}>
					<Flex>
						<Box>
							<Text fontWeight="bold" fontSize="small">
								Meu Carrinho
							</Text>
							<Text fontSize={10} textAlign="right">
								{cart.length === 1 ? `${cart.length} item` : `${cart.length} itens`}
							</Text>
						</Box>

						<ShoppingCart fontSize="35" />
					</Flex>
				</Link>
			</Flex>

			<Flex gap="4" wrap="wrap" mx="auto" justify="center">
				{items.map((item) => (
					<ShopItem item={item} onAddItemToCart={onAddItemToCart} />
				))}
			</Flex>
		</Box>
	)
}
