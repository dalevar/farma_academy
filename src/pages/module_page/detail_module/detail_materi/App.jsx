import HeaderAccesses from "./HeaderAccessesSection";
import BodyAccesses from "./BodyAccessesSection"
import FooterAccesses from "./FooterAccessesSection"

const AccessMateriPage = () => {
  return (
    <div>
      {/* banner */}
      <HeaderAccesses />

      {/* Body */}
      <BodyAccesses />

      {/* Footer */}
      <FooterAccesses />
    </div>
  );
};
export default AccessMateriPage;
