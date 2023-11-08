import HeaderAccesses from "./HeaderAccessesSection";
import BodyAccesses from "./BodyAccessesSection"
import FooterAccesses from "./FooterAccessesSection"

const AccessesModulePage = () => {
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
export default AccessesModulePage;
