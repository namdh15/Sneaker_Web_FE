import { useEffect, useState } from "react";
import SlideProducts from "../components/SlideProducts";
import SlideImageHomepage from "../components/sub-components/SlideImageHomepage";
import HomeAbout from "../components/HomeAbout";
import * as Api from "../services/product"
import SkeletonSimilarProducts from "../components/sub-components/SkeletonSimilarProducts";

function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await Api.getProducts();
      setData(response);
      setFilter(response);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <SlideImageHomepage />
      <HomeAbout />
      {loading ? <SkeletonSimilarProducts /> : <SlideProducts products={filter?.slice(0, 10)} title={'MEN COLLECTION'} />}
      {loading ? <SkeletonSimilarProducts /> : <SlideProducts products={filter?.slice(0, 10)} title={'WOWEN COLLECTION'} />}
      {loading ? <SkeletonSimilarProducts /> : <SlideProducts products={filter?.slice(0, 10)} title={'Sandals Collection'} />}
    </>
  )
}

export default Home