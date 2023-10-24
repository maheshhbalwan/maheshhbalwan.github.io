import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that 'children' is provided and is a valid React node.
};

export default MainLayout;
