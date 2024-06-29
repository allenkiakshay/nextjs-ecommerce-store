import ProductCard from "./productcard";

export default function Bestsellers() {
  return (
    <div className="flex w-[screen] h-full p-10 sm:px-20 md:px-28 lg:px-32">
      <div className="w-full h-full bg-white">
        <div className="flex justify-center items-center h-[80px]">
          <div className="text-4xl pl-10">Our Bestseller</div>
        </div>
        <div className="flex justify-center items-center h-full py-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <ProductCard
                  key={index}
                  title={`Product ${index + 1}`}
                  description={`Description ${index + 1}`}
                  image={`/otp.png`}
                  price={`${(index + 1) * 100}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
