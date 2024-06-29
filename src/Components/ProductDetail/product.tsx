import Image from "next/image";

const ProductDetail = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-[screen] h-full py-10 px-20">
        <div className="w-2/5 h-full flex flex-col">
          <div className="relative w-full h-[480px]">
            <Image
              src={"/otp.png"}
              alt="image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="relative flex items-center justify-center w-[80px] h-[80px]">
              <Image src={"/otp.png"} alt="image" fill className=" rounded-full"/>
            </div>
            <div className="relative flex items-center justify-center w-[80px] h-[80px]">
              <Image src={"/otp.png"} alt="image" fill className=" rounded-full"/>
            </div>
            <div className="relative flex items-center justify-center w-[80px] h-[80px]">
              <Image src={"/otp.png"} alt="image" fill className=" rounded-full"/>
            </div>
            <div className="relative flex items-center justify-center w-[80px] h-[80px]">
              <Image src={"/otp.png"} alt="image" fill className=" rounded-full"/>
            </div>
          </div>
        </div>
        <div className="w-3/5 h-[580px] flex flex-col">
          <div className="relative w-full h-full">
            <div className="relative top-0 left-0 w-full h-[60px] flex items-center justify-between px-10">
              <p className="text-3xl font-bold">Product Name</p>
              <div className="text-center w-fit h-[40px] flex gap-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="gold"
                    d="M8 0l2.477 5.092 5.556.807-4.017 3.914.951 5.527L8 12.822l-4.967 2.61.951-5.527-4.017-3.914 5.556-.807L8 0z"
                  />
                </svg>

                <p className="text-lg">4.5 (101 Reviews)</p>
              </div>
            </div>
            <div className="relative w-full h-[60px] flex gap-3 px-10 text-center">
              <p className="text-2xl font-medium">₹ 100</p>
              <p className="text-xl font-medium line-through text-[#aaaaaa] pt-[2px]">
                ₹ 100
              </p>
            </div>
            <div className="relative w-full h-fu px-10">
              <p className="text-md font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sit reiciendis voluptate ex! Ipsam eos omnis
                exercitationem atque nam architecto, deserunt fugiat dicta
                assumenda, nihil quae perferendis pariatur voluptas possimus!
              </p>
            </div>
            <div className="relative w-full h-fit flex flex-col px-10 pt-8">
              <p className="text-xl font-bold">Select Size</p>
              <div className="flex gap-2 mt-2">
                <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#aaaaaa] rounded-full hover:bg-black hover:text-white">
                  <p className="text-lg">S</p>
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#aaaaaa] rounded-full hover:bg-black hover:text-white">
                  <p className="text-lg">M</p>
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#aaaaaa] rounded-full hover:bg-black hover:text-white">
                  <p className="text-lg">L</p>
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#aaaaaa] rounded-full hover:bg-black hover:text-white">
                  <p className="text-lg">XL</p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-col px-10 pt-8">
              <p className="text-xl font-bold">Select Colour</p>
              <div className="flex gap-2 mt-2">
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black">
                  <p className="text-lg"></p>
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-red-600">
                  <p className="text-lg"></p>
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#aaaaaa]">
                  <p className="text-lg"></p>
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-slate-500">
                  <p className="text-lg"></p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex px-10 pt-8">
              <div className="w-fit h-[40px] flex items-center justify-between">
                <button className="absolute top-8 left-12 w-[40px] h-[40px] flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                  </svg>
                </button>
                <button className="absolute top-8 left-[74px] w-[40px] h-[40px] flex items-center justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                </button>
                <div className="w-[80px] h-[40px] flex items-center justify-center border border-black text-black rounded-md text-center">
                  1
                </div>
              </div>
              <div className="w-full h-[40px] flex items-center justify-start gap-6 pl-8">
                <button className="w-[200px] h-[40px] flex items-center justify-center bg-black text-white rounded-md">
                  Add To Cart
                </button>
                <button className="w-[48px] h-[40px] flex items-center justify-center border border-black rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
