import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Conestoga Golf Club | Sun City Mesquite Golf Course | Dr. Jan Duffy',
  description: 'Conestoga Golf Club - 18-hole championship course at Sun City Mesquite. Gary Panks design, 1880 Grille restaurant. Call 702-718-2228.',
};

export default function ConestogaGolfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

