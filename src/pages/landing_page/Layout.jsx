import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const LayoutLandingPage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutLandingPage;
