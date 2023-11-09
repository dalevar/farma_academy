import BannerSection from "./BannerSection";
import CTASection from "./CTA";
import CalculatorSection from "./CalculatorSection";
import OfferSection from "./OfferSection";
import TheSolutionOffered from "./TheSolutionOfferedSection";
import TrustedBySection from "./TrustedBySection";
import TestimonialSection from "./TestimonialSection";
import ExperienceSection from "./ExperienceSection";
import CooperationSection from "./CooperationSection";
import MentorJob from "./MentorJob";
import ConsultantSection from "./ConsultantSection";
const LandingPage = () => {
  return (
    <main className="flex-auto overflow-x-hidden">
      {/* banner */}
      <BannerSection />

      {/* calculator */}
      <CalculatorSection />

      {/* dipercayai oleh */}
      <TrustedBySection />

      {/* penawaran mendaftar */}
      <OfferSection />

      {/* the solution offered */}
      <TheSolutionOffered />
      
      {/* Consultant section */}
      <ConsultantSection />

      {/* Mentor job section */}
      <MentorJob />

      {/* Cooperation section */}
      <CooperationSection />

      {/* Experience section */}
      <ExperienceSection />

      {/* Testimoni section */}
      <TestimonialSection />

      {/* CTA before Footer */}
      <CTASection />
    </main>
  );
};
export default LandingPage;
