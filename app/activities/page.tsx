import { client } from "@/sanity/lib/client"
import Link from "next/link"
import Image from 'next/image' // Import the Image component

interface Activity {
  title: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
  description?: string;
}

const ActivitiesPage = async () => {
  const activities: Activity[] = await client.fetch(`*[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    _createdAt,
    mainImage{
      asset->{
        url
      }
    },
    description
  }`)

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Recent Activities</h1>
          <p className="text-gray-600 text-lg">Stay updated with our latest efforts and stories</p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
          {activities.map((activity: Activity) => (
            <li key={activity.slug.current}>
              <Link href={`/activities/${activity.slug.current}`} className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  {activity.mainImage && activity.mainImage.asset && activity.mainImage.asset.url && (
                    <Image
                      src={activity.mainImage.asset.url}
                      alt={activity.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-md mb-4"
                    />
                  )}
                  <h2 className="text-xl font-semibold text-green-700 mb-2">{activity.title}</h2>
                  <p className="text-sm text-gray-500">
                    {new Date(activity._createdAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ActivitiesPage
