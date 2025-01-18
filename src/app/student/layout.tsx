'use client';

import { Topnav } from '@/components/student/topnav';
//import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  //const pathname = usePathname();

  

  return (
    <div className="min-h-screen flex flex-col">
      
      <Topnav />

      {/* Main Content Section */}
      <main className="flex-grow">
        {children} {/* This will render the content of the other pages */}
      </main>

      {/* You can also add a footer or additional global layout components if needed */}
    </div>
  );
}
