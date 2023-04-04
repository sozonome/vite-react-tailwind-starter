import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div className="font-sans prose">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
