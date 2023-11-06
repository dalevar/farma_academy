import BannerSection from "./BannerSection";
import CTAsection from "./CTA";
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

      

      {/* CTA before Footer */}
      <CTAsection />
    </div>
  );
};
export default LandingPage;
