import Header from "@/components/ui/home/Header";
import Properties from "@/components/ui/home/Properties"
import Choose_us from "@/components/ui/home/Choose_us";
import Reviews from "@/components/ui/home/Reviews";
import Agents from "@/components/ui/home/Agents";
import Footer from "@/components/common/Footer";
import StructuredData from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <Properties />
      <Agents />
      <Choose_us />
      <Reviews />

      <Footer />
    </>
  );
}
