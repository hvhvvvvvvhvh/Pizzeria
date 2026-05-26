import Header from "../components/home/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Delivery from "../components/home/Delivery";
import MenuSection from "../components/home/MenuSection";
import DealsSection from "../components/home/DealsSection";
import PromoCards from "../components/home/PromoCards";
import LocationsSection from "../components/home/LocationsSection";
import FranchiseSection from "../components/home/FranchiseSection";
import InstagramSection from "../components/home/InstagramSection";
import ReviewsBar from "../components/home/ReviewsBar";
import AppDownloadSection from "../components/home/AppDownloadSection";
import FooterSection from "../components/home/layout/Footer";

export default function Home(){
  return(
    <>
      <Header/>
      <Hero/>
      <Features/>
      <Delivery />
      <MenuSection />
      <DealsSection />
      <PromoCards />
      <LocationsSection />
      <FranchiseSection />
      <InstagramSection />
      <ReviewsBar />
      <AppDownloadSection />
      <FooterSection />
    </>
  );
}