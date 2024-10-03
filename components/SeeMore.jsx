import Link from 'next/link';

export default function SeeMore({ className }) {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <Link href="https://amezadomultimedia5.pixieset.com/risingrootfoundationhohoedonations/">
                <button className="bg-green-800 text-white px-14 py-3 rounded-full outline">
                    See More
                </button>
            </Link>
        </div>
    );
}
