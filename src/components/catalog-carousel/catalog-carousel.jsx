import { useGetCalalogs } from "../../service/useGetCatalogs";
import { Link } from "react-router-dom";

export const CatalogCarousel = () => {
  const { data: banners = [], isLoading, error } = useGetCalalogs();

  if (error) return <div>Error loading banners.</div>;

  return (
    <>
      <div className="my-10 overflow-x-auto scrollbar-hidden w-full flex gap-4 p-4">
        {banners?.map((banner, index) => (
          <div key={index} className="">
            <Link className="" to={`/${banner.name}`}>
              <div className="mx-auto w-60 h-[124px] py-3 px-4 bg-accent shadow-lg shadow-primary  flex gap-5 justify-center items-center text-center">
                <img
                  src={banner.img}
                  alt={banner.id}
                  className="w-24 h-auto object-cover"
                />
                <p className="mt-2">{banner.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};