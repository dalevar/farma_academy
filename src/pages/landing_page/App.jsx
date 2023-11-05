import BannerSection from "./BannerSection";
import CalculatorSection from "./CalculatorSection";
import OfferSection from "./OfferSection";
import TrustedBySection from "./TrustedBySection";

const LandingPage = () => {

  return (
    <div>
      {/* banner */}
      <BannerSection />

      {/* calculator */}
      <CalculatorSection />

      {/* dipercayai oleh */}
      <TrustedBySection />

      {/* penawaran mendaftar */}
      <OfferSection />


    </div>
  );
};
export default LandingPage;