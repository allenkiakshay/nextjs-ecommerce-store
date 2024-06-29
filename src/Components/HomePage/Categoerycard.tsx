import Image from "next/image";
import { FC } from "react";

interface CardProps {
  name: string;
  image: string;
}

const Card: FC<CardProps> = ({ name, image }) => {
  return (
    <div className="relative w-[280px] h-[450px] sm:w-[200px] sm:h-[350px] md:w-[240px] md:h-[400px] lg:w-[280px] lg:h-[450px]">
      <div className="flex w-full h-full justify-center items-end">
        <Image src={image} alt={name} layout="fill" className="rounded-[4px]"/>
        <div className="z-30 w-full h-[40px] bg-white mx-5 mb-5 rounded-[6px] flex justify-center items-center hover:bg-black hover:text-white">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
