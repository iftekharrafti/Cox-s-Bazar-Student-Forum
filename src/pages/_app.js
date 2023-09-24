import Footer from "@/components/footer/Footer";
import HeaderTop from "@/components/header/headerTop/HeaderTop";
import HeaderMenu from "@/components/header/headerMenu/HeaderMenu";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderTop />
      <HeaderMenu />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
