import Image from "next/image";
import { FC } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
}) => {
  return (
    <div className="relative w-[200px] h-[320px] sm:w-[160px] sm:h-[260px] md:w-[180px] md:h-[290px] lg:w-[200px] lg:h-[320px] group">
      <div className="relative w-full h-[80%] flex justify-center items-center">
        <Image
          src={image}
          alt="product image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-[4px]"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-50 group-hover:rounded-t-[4px] transition-opacity duration-300">
          <div className="w-full h-full flex justify-center items-end pb-[10px] px-4">
            <button className="w-full h-[40px] bg-white rounded-md flex justify-center items-center">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-30 w-full h-[40%] bg-white p-2">
        <p className="text-md font-bold truncate">{title}</p>
        <p className="h-[20px] text-sm font-medium overflow-hidden truncate">
          {description}
        </p>
        <p className="text-sm font-medium">₹ {price}</p>
        <a
          href="#"
          className="flex gap-1 text-xs font-medium group transform transition-transform duration-300 group-hover:translate-x-1"
        >
          view details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-arrow-right transform transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
