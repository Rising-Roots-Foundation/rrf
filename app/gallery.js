import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder') || 'gallery/fodomehlomabasicschool'; // Default folder

  try {
    const response = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by('public_id', 'desc')
      .max_results(50)
      .execute();

    const images = response.resources.map((image) => ({
      src: image.secure_url,
      alt: image.public_id,
    }));

    return new Response(JSON.stringify(images), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch images from Cloudinary' }), {
      status: 500,
    });
  }
}
