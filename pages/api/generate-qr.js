import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.post(`http://localhost:4000/generate-qr`);
        res.status(200).json({ data: response.data.data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
}
