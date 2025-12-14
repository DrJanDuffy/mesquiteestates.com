import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Mesquite Home | Expert Realtor Services',
  description: 'Sell your Mesquite home with Dr. Jan Duffy. Expert market analysis, professional marketing, and negotiation. Get your home\'s value. Call 702-718-2228.',
  keywords: [
    'sell home Mesquite',
    'Mesquite home values',
    'sell house Mesquite NV',
    'Mesquite realtor sell',
  ],
};

export default function SellYourHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

