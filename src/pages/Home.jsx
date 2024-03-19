import { useEffect, useState } from "react";
import SlideProducts from "../components/SlideProducts";
import SlideImageHomepage from "../components/sub-components/SlideImageHomepage";
import HomeAbout from "../components/HomeAbout";
import * as Api from "../services/product"
import SkeletonSimilarProducts from "../components/sub-components/SkeletonSimilarProducts";

function Home() {
  const [dataMen, setDataMen] = useState([]);
  const [dataWomen, setDataWomen] = useState([]);
  const [dataGirl, setDataGirl] = useState([]);
  const [dataBoy, setDataBoy] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const [resMen, resWomen, resGirl, resBoy] = await Promise.all([
        Api.getProducts({ categories: 0 }),
        Api.getProducts({ categories: 1 }),
        Api.getProducts({ categories: 2 }),
        Api.getProducts({ categories: 3 })
      ]);
      setDataMen(resMen);
      setDataWomen(resWomen);
      setDataGirl(resGirl);
      setDataBoy(resBoy);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <SlideImageHomepage />
      <HomeAbout />
      {loading ? <SkeletonSimilarProducts /> : <SlideProducts products={dataMen?.slice(0, 10)} title={'Men Collection'} />}
      {loading ? <SkeletonSimilarProducts /> : <SlideProducts products={dataWomen?.slice(0, 10)} title={'Women Collection'} />}
      {loading ? <SkeletonSimilarProducts /> : <SlideProducts products={dataGirl?.slice(0, 10)} title={'Girl Collection'} />}
      {loading ? <SkeletonSimilarProducts /> : <SlideProducts products={dataBoy?.slice(0, 10)} title={'Boy Collection'} />}
    </>
  )
}

export default Home