// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllCards } from "../../services/cardsService";


export default async function handler(req, res) {
  const card = await getAllCards(); 
  res.status(200).json(card);

}
