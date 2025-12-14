import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '55+ Communities Mesquite NV | Retire in Mesquite',
  description: 'Explore 55+ active adult communities in Mesquite, Nevada. Sun City Mesquite and more. Retire in Mesquite with resort-style living. Call Dr. Jan 702-718-2228.',
  keywords: [
    '55+ communities Mesquite NV',
    'retire in Mesquite',
    'active adult communities Mesquite',
    '55+ living Mesquite',
    'Sun City Mesquite',
  ],
};

export default function FiftyFivePlusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

