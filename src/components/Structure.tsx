import Footer from "./Footer";
import Header from "./Header";

const Structure = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Structure;
