import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { generateMedinaSeoContent } from '@/data/medinaSeoData';

// Simulated Sidebar Data for Internal Linking
const popularServices = [
  { slug: 'samsung-washing-machine-medina', ar: 'صيانة غسالات سامسونج في المدينة المنورة' },
  { slug: 'lg-refrigerator-medina', ar: 'صيانة ثلاجات إل جي في المدينة المنورة' },
  { slug: 'daewoo-oven-medina', ar: 'صيانة أفران دايو في المدينة المنورة' },
];

export default function ServiceLandingPage({ params }: { params: { category: string, slug: string } }) {
  // In a real app, you would parse the slug to determine the brand and appliance
  // For example: 'samsung-washing-machine' -> Brand: Samsung, Appliance: Washing Machine
  const pageData = generateMedinaSeoContent('Samsung', 'غسالات', 'Washing Machine');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-500 mb-8 border-b pb-4">
        <Link href="/" className="hover:text-gold transition">الرئيسية</Link> &laquo; 
        <Link href={`/services/${params.category}`} className="hover:text-gold transition mx-2">
          قسم الخدمات
        </Link> &laquo; 
        <span className="text-ink font-semibold mx-2">{pageData.title.ar}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Right Sidebar - Most Requested Services (25% Width) */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-24 bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-ink mb-4 border-b-2 border-gold pb-2">
              الخدمات الأكثر طلباً
            </h3>
            <ul className="space-y-4">
              {popularServices.map((service, idx) => (
                <li key={idx} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                  <Link 
                    href={`/services/repair/${service.slug}`} 
                    className="text-sm font-medium text-gray-700 hover:text-gold transition flex items-center gap-3"
                  >
                    {/* Placeholder for sidebar thumbnail */}
                    <div className="w-12 h-12 bg-gray-300 rounded overflow-hidden flex-shrink-0">
                      <Image src="/logo.png" alt="thumbnail" width={48} height={48} className="object-cover" />
                    </div>
                    {service.ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area (75% Width) */}
        <main className="w-full lg:w-3/4">
          {pageData.blocks.map((block, index) => {
            switch (block.type) {
              case 'h1':
                return (
                  <h1 key={index} className="text-3xl md:text-4xl font-extrabold text-ink mb-8 text-center">
                    {block.content.ar}
                  </h1>
                );
              
              case 'h2':
                return (
                  <h2 key={index} className="text-2xl font-bold text-ink mt-10 mb-4">
                    {block.content.ar}
                  </h2>
                );
              
              case 'p':
                return (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                    {block.content.ar}
                  </p>
                );

              case 'ul':
                return (
                  <ul key={index} className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-8 bg-gray-50 p-6 rounded-lg border-r-4 border-gold">
                    {block.content.ar.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              
              case 'cta':
                return (
                  <div key={index} className="bg-ink text-white p-8 rounded-lg text-center mt-12 shadow-lg">
                    <p className="text-xl font-semibold mb-6">{block.content.ar}</p>
                    <a 
                      href="https://wa.me/966XXXXXXXXX" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gold text-ink font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300"
                    >
                      تواصل معنا عبر واتساب
                    </a>
                  </div>
                );

              default:
                return null;
            }
          })}
        </main>

      </div>
    </div>
  );
}