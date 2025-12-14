import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Falcon Ridge Homes for Sale | Golf Course Community Mesquite',
  description: 'Falcon Ridge homes for sale in Mesquite, Nevada. Luxury golf course living with stunning views. Call Dr. Jan Duffy 702-718-2228.',
  keywords: [
    'Falcon Ridge Mesquite',
    'golf course homes Mesquite',
    'Falcon Ridge homes for sale',
    'golf community Mesquite',
  ],
};

export default function FalconRidgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

