import React from "react";
import { useParams } from "react-router-dom";
import { useSingleBrands } from "../../service/useSingleBrands";
import { Card } from "../catalog-single/components/card/card";
import { Loading } from "../../components/loading";

const BrandSingle = () => {
  const { brand } = useParams();

  const { data, isLoading } = useSingleBrands();

  const filteredProducts = data?.filter((product) => product.brand === brand);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default BrandSingle;
