import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-[screen] h-[350px] sm:h-[550px] md:h-[750px] p-8 pt-3">
      <a href="#">
        <div className="relative w-full h-full">
          <Image
            src={"/banner.png"}
            alt="Homepage banner"
            layout="fill"
            objectFit="fill"
          />
        </div>
      </a>
    </div>
  );
}
