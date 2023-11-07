import BannerSection from "./BannerSection";
import CTASection from "./CTA";
import CalculatorSection from "./CalculatorSection";
import OfferSection from "./OfferSection";
import TheSolutionOffered from "./TheSolutionOfferedSection";
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
      <CTASection />

      {/* the solution offered */}
      <TheSolutionOffered />
    </div>
  );
};
export default LandingPage;
