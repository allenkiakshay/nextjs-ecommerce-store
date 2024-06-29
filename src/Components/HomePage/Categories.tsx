import Card from "./Categoerycard";

export default function Categories() {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden sm:flex w-[screen] h-fill p-10 sm:px-20 md:px-28 lg:px-32">
        <div className="w-full h-full bg-white">
          <div className="flex justify-between items-center h-[80px]">
            <div className="text-2xl font-semibold pl-10">
              Shop by Categories
            </div>
            <div className="flex gap-6 text-lg font-medium pr-3">
              <div className="flex items-center justify-center w-[20px] h-[20px] rounded-[6px] p-5 text-black hover:bg-black hover:text-white border-2 border-black">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </p>
              </div>
              <div className="flex items-center justify-center w-[20px] h-[20px] rounded-[6px] p-5 text-black hover:bg-black hover:text-white border-2 border-black">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full py-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
              <Card name="Casual Wear" image="/Password.png" />
              <Card name="Ethnic Wear" image="/Password.png" />
              <Card name="Casual Wear" image="/Password.png" />
              <Card name="Casual Wear" image="/Password.png" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="sm:hidden text-center justify-center items-center w-[screen] h-fill p-10">
        <div className="text-3xl font-bold h-[50px]">Shop by Categories</div>
        <div className="flex justify-center items-center h-full p-10">
          <Card name="Casual Wear" image="/Password.png" />
        </div>
      </div>
    </>
  );
}
