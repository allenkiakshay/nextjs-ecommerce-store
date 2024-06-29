import ProductCard from "../HomePage/productcard";

const data = [
  {
    Category: "Category 1",
    Products: [
      {
        title: "Product 1",
        description: "Description 1",
        image: "/otp.png",
        price: "100",
      },
      {
        title: "Product 2",
        description: "Description 2",
        image: "/otp.png",
        price: "200",
      },
      {
        title: "Product 3",
        description: "Description 3",
        image: "/otp.png",
        price: "300",
      },
      {
        title: "Product 4",
        description: "Description 4",
        image: "/otp.png",
        price: "400",
      },
      {
        title: "Product 5",
        description: "Description 5",
        image: "/otp.png",
        price: "500",
      },
    ],
  },
  {
    Category: "Category 2",
    Products: [
      {
        title: "Product 1",
        description: "Description 1",
        image: "/otp.png",
        price: "100",
      },
      {
        title: "Product 2",
        description: "Description 2",
        image: "/otp.png",
        price: "200",
      },
      {
        title: "Product 3",
        description: "Description 3",
        image: "/otp.png",
        price: "300",
      },
      {
        title: "Product 4",
        description: "Description 4",
        image: "/otp.png",
        price: "400",
      },
      {
        title: "Product 5",
        description: "Description 5",
        image: "/otp.png",
        price: "500",
      },
    ],
  },
];

const Products = () => {
  return (
    <div className="flex flex-col w-full h-full p-10 sm:px-20 md:px-28 lg:px-32">
      {data.map((category, index) => (
        <div key={index} className="w-full h-full mb-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-6">{category.Category}</h2>
            <a href="#" className="text-sm text-blue-600">
              See More
            </a>
          </div>
          <div className="flex justify-center items-center h-full py-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center">
              {category.Products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
