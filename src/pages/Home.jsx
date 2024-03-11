import { Product } from "../components";
import SlideProducts from "../components/SlideProducts";
import SlideImageHomepage from "../components/sub-components/SlideImageHomepage";


function Home() {
  return (
    <>
      <SlideImageHomepage />
      <SlideProducts />
      <Product />
    </>
  )
}

export default Home