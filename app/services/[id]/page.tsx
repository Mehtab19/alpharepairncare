import { allServicesData } from '@/data/allServicesData';
import { notFound } from 'next/navigation';
import ServiceDetailsClient from '@/components/ServiceDetailsClient';
import { Metadata } from 'next';

// Define the params interface
interface PageProps {
  params: {
    id: string;
  };
}

// Next.js dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = allServicesData.find((s) => s.id === params.id);
  
  if (!service) {
    return {
      title: 'Service Not Found | Alpha Care Medinah',
    };
  }

  // Generate a meta description from the first paragraph of SEO content
  const firstParagraph = service.seoContent.find(block => block.type === 'p');
  const descriptionAr = firstParagraph && typeof firstParagraph.ar === 'string' 
    ? firstParagraph.ar.substring(0, 160) + '...' 
    : service.ar;

  return {
    title: `${service.ar} | ألفا كير`,
    description: descriptionAr,
    openGraph: {
      title: `${service.ar} | ألفا كير`,
      description: descriptionAr,
      images: [{ url: service.img }],
      locale: 'ar_SA',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.ar} | ألفا كير`,
      description: descriptionAr,
      images: [service.img],
    }
  };
}

// Server Component
export default function ServiceDetailsPage({ params }: PageProps) {
  // If we can't find it server-side, 404 early
  if (!allServicesData.some((s) => s.id === params.id)) {
    notFound();
  }

  return <ServiceDetailsClient id={params.id} />;
}