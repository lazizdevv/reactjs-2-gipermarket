import React from "react";
import { useGetAds } from "../../service/query/useGetAds";

export const Ads = () => {
  const { data } = useGetAds();
  return (
    <>
      <section className="container">
        <div className="bg-primary pb-8">
          <h1 className="text-2xl font-semibold pb-6">Акции</h1>
          <div className="flex flex-wrap justify-between items-center gap-5">
            {data?.map((ads) => (
              <div key={ads.id} className="">
                <img src={ads.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
