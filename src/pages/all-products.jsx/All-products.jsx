import { useEffect, useState } from "react";
import { Category, ProductCard } from "../../components/";
import { ApiProduct } from "../../service/api.product";

const AllProducts = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiProduct.apiProduct("products");
        console.log(data);
        setproduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <Category />
        <div className="grid mt-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 products gap-7">
          {product.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
