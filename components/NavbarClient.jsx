'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/homepage/Navbar'), { ssr: false });

export default Navbar;
