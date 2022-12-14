import { useEffect,useState } from "react";
import { Banner, Title, Category, ProductCard } from "../../components";
import {ApiProduct} from '../../service/api.product'

const Home = () => {
  const [product, setproduct] = useState([])

  useEffect(()=>{
    const getData= async ()=>{
      console.log('render');
      try {
        const data =await ApiProduct.apiProduct('products?limit=6')
        console.log(data);
        setproduct(data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  },[])
  
  return (
    <>
      <Banner />
      <div className="container mx-auto mt-14">
        <div className="products">
          <Title
            textValue={"Our products."}
            buttonValue={"View all (12)"}
            buttonbg={"white"}
            link={"/all-products"}
          />
          <Category />
          <div className="grid mt-8 gap-7 sm:grid-cols-2 lg:grid-cols-3 products">
            {
              product.map((item)=>(
                <ProductCard key={item.id} product={item}/>
              ))
            }
          </div>
        </div>
        <div className="grid gap-10 mt-20 lg:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold lg:text-4xl md:text-3xl sm:text-2xl text-text">
              Seedra helps to grow fast and efficiant
            </h1>
            <p className="mt-8 text-base text-text">
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
              <br />
              <br />
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings.
              <br />
              Your easy growing experience is our guarantee Spinach commom
              culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
              risotto, and more
              <br />
              <br />
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img className="lg:w-[468px] lg:h-[468px] w-[268px] h-[268px]" src="./assets/image/Ellipse 2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
