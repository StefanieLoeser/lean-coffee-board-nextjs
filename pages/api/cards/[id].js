import Card from "../../../components/Card";
import dbConnect from "../../../dbConnect";

export default async function handler (request, response) {
await dbConnect();

if (request.method === 'DELETE') {
     const { id } = request.query;
     const card = await Card.findByIdAndDelete(id);
     response.status(200).json(card);
}
    
}