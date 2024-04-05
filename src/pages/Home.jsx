import { useEffect, useState } from "react";
import * as Api from "../services/product"
import { HomeAbout, SkeletonSimilarProducts, SlideImageHomepage, SlideProducts } from "../components";


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
        Api.getProducts({ gender: 0 }),
        Api.getProducts({ gender: 1 }),
        Api.getProducts({ gender: 2 }),
        Api.getProducts({ gender: 3 })
      ]);
      setDataMen(resMen?.results);
      setDataWomen(resWomen?.results);
      setDataGirl(resGirl?.results);
      setDataBoy(resBoy?.results);
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