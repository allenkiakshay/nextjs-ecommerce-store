import Image from "next/image";

const Checkout = () => {
  return (
    <div className="flex w-[screen] h-fit px-10 md:px-20 lg:px-25 py-2">
      <div className="w-full h-full">
        <div className="flex justify-start items-start h-fit m-2 p-2 md:p-4 lg:p-6">
          <h1 className="text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px]">
            Checkout
          </h1>
        </div>
        <div className="hidden sm:flex gap-2 w-full md:w-8/12 h-fit p-2 border-b-2 border-[#c9c9c9]">
          <div className="w-5/12 h-fit text-[24px]">Product</div>
          <div className="w-2/12 h-fit text-[24px] text-center">Price</div>
          <div className="w-2/12 h-fit text-[24px] text-center">Quantity</div>
          <div className="w-2/12 h-fit text-[24px] text-center">Sub Total</div>
          <div className="w-1/12 h-fit text-[24px] text-center"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-2 w-full md:w-8/12 h-fit m-2 ml-0">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <>
                  <div
                    key={index}
                    className="hidden sm:flex items-center justify-center gap-2 w-full h-fit m-2 p-2 ml-0 border-b-2 border-[#c9c9c9]"
                  >
                    <div className="flex w-5/12 h-fit text-[24px] m-2">
                      <div className="relative w-20 h-20">
                        <Image
                          src="/otp.png"
                          alt="product"
                          layout="fill"
                          objectFit="fit"
                          className=" rounded-sm"
                        />
                      </div>
                      <div className="flex flex-col text-[24px] overflow-hidden">
                        <div className="text-[24px] pl-8 font-medium">
                          Product Name
                        </div>
                        <div className="text-[14px] pl-8 font-[10px">
                          Size: S
                        </div>
                      </div>
                    </div>
                    <div className="w-2/12 h-fit text-[24px] text-center">
                      ₹ 100
                    </div>
                    <div className="w-2/12 h-fit text-[24px] text-center">
                      <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 border-2 border-black rounded-lg p-1">
                        <button className="text-[24px]">-</button>
                        <p className="text-[24px]">1</p>
                        <button className="text-[24px]">+</button>
                      </div>
                    </div>
                    <div className="w-2/12 h-fit text-[24px] text-center">
                      ₹ 100
                    </div>
                    <div className="w-1/12 h-fit text-[24px] text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="red"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col sm:hidden items-center justify-center gap-2 w-full h-fit m-2 p-2 ml-0 border-b-2 border-[#c9c9c9]">
                    <div className="flex w-full h-fit text-[24px] m-2">
                      <div className="relative w-20 h-20">
                        <Image
                          src="/otp.png"
                          alt="product"
                          layout="fill"
                          objectFit="fit"
                          className=" rounded-sm"
                        />
                      </div>
                      <div className="flex flex-col text-[24px] overflow-hidden">
                        <div className="text-[18px] sm:text-[24px] pl-8 font-medium">
                          Product Name
                        </div>
                        <div className="text-[14px] pl-8 font-[10px">
                          Size: S
                        </div>
                        <div className="text-[14px] pl-8 font-[10px">
                          Total: ₹ 100
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 w-full h-fit text-[16px] text-center">
                      <div className="flex w-4/6 justify-center items-center gap-10 border-2 border-black rounded-lg p-1">
                        <button className="text-[24px]">-</button>
                        <p className="text-[24px]">1</p>
                        <button className="text-[24px]">+</button>
                      </div>
                      <div className="text-[14px] font-[10px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="red"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <div className="relative md:left-10 md:top-10 flex flex-col gap-2 w-full md:w-4/12 h-fit m-2 p-2 ml-0 border border-[#c9c9c9] rounded">
            <div className="flex justify-between w-full h-fit p-2 border-b-2 border-[#c9c9c9] text-[18px] md:text-[24px] font-bold">
              <div className="">Sub Total</div>
              <div className="">₹ 500</div>
            </div>
            <div className="flex flex-col p-2 pt-6">
              <div className="">Enter Discount Code</div>
              <div className="flex rounded-2xl">
                <input
                  type="text"
                  className="w-4/6 h-[40px] border-2 border-black p-2"
                />
                <button className="w-2/6 h-[40px] bg-black text-white p-2">
                  Apply
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full h-fit p-2 px-6 border-b-2 border-[#c9c9c9] text-[14px] md:text-[16px] font-medium">
              <div className="">Shiipping</div>
              <div className="">₹ 0</div>
            </div>

            <div className="flex justify-between w-full h-fit p-2 px-6 text-[18px] md:text-[24px] font-bold">
              <div className="">Grand Total</div>
              <div className="">₹ 500</div>
            </div>

            <div className="flex justify-center w-full h-fit p-2">
              <button className="w-8/12 h-[40px] bg-black text-white p-2 rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
