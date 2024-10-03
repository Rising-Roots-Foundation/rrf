import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
    try {
        const response = await cloudinary.search
            .expression('folder:gallery/*')
            .sort_by('public_id', 'desc')
            .max_results(16)
            .execute();

        const images = response.resources.map((image) => ({
            src: image.secure_url || image.url, // Use secure_url for HTTPS or fallback to url
            alt: image.public_id,
        }));

        res.status(200).json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Error fetching images' });
    }
}
