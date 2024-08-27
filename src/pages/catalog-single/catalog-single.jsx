import React from "react";
import { useSingleCatalog } from "../../service/useSingleCatalog";
import { useParams } from "react-router-dom";
import { Card } from "./components/card/card";
import { Loading } from "../../components/loading";

const CatalogSingle = () => {
  const { categoryName } = useParams();
  const {
    data: products,
    isLoading,
    isError,
    isFetched,
    isPending,
  } = useSingleCatalog(categoryName);

  if ((isFetched, isLoading, isPending)) return <Loading />;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div>
      <h1>Products in {categoryName}</h1>
      <div className="grid grid-cols-4">
        {products?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogSingle;
