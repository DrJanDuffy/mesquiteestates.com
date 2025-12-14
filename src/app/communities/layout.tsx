import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mesquite Communities',
  description: 'Explore Mesquite, Nevada communities including Sun City Mesquite 55+, Falcon Ridge, Mesquite Vistas, and more. Find your perfect neighborhood with Dr. Jan Duffy.',
  keywords: [
    'Mesquite communities',
    'Sun City Mesquite',
    'Falcon Ridge Mesquite',
    'Mesquite neighborhoods',
    '55+ communities Mesquite',
    'golf communities Mesquite',
  ],
};

export default function CommunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

