//http://localhost:3000/api/cards

import Card from "../../../components/Card";
import dbConnect from "../../../dbConnect";
import { getAllCards } from "../../../services/cardsService";


export default async function handler(request, response) {

switch(request.method) {
    
    case 'GET':
    const card = await getAllCards(); 
    response.status(200).json(card);
    break;
    
    case 'POST':
    await dbConnect();
    const data = request.body;
    const createdCard =  await Card.create(data);
    response.status(201).status({message: 'Yes!'})
    break;
    
    default: 
    response.status(405).json({message: 'Method not allowed'})



}
}