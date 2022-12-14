import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Title, ProductCard } from "../../components";
import { ApiProduct } from "../../service/api.product";

const Detailed = () => {
  const [product, setProduct] = useState([]);
  const [deatailed, setDeatailed] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDetailed = async () => {
      console.log('render');

      try {
        const data = await ApiProduct.apiProduct(`products/${id}`);
        console.log(data);
        setDeatailed(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailed();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiProduct.apiProduct("products?limit=3");
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img
            className="md:h-[445px] h-[345px]"
            src={deatailed.image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold title text-text">
            {deatailed.title}
          </h1>
          <p className="text-base description text-text">
            {deatailed.description}
          </p>
          <div className="flex items-start justify-between w-full">
            <span className="text-3xl font-bold text-text">
              ${deatailed.price}
            </span>
            <Button value={"Add to card"} bg={"button"} />
          </div>
        </div>
      </div>
      <div className="mt-16 realted-products">
        <Title textValue={"Related products."} />
        <div className="grid mt-10 sm:grid-cols-2 lg:grid-cols-3 product-card gap-7">
          {product.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detailed;
