import { cheapestItems } from "../../json/cheapestItems"

export default function handler(req, res) {
	console.log(cheapestItems.items)

	res.status(200).json(cheapestItems)
}
