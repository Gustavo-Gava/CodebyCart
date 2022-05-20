import { expensiveItems } from "../../json/expensiveItems.ts"

export default function handler(req, res) {
	res.status(200).json(expensiveItems)
}
