import Image from "next/image";

type Product = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
};

// Sample products array
const products: Product[] = [
  {
    id: 1,
    imageUrl: "/otp.png", // replace with actual image paths
    name: "Product 1",
    price: 150,
    quantity: 2,
    size: "M",
    color: "Red",
  },
  {
    id: 2,
    imageUrl: "/otp.png",
    name: "Product 2",
    price: 350,
    quantity: 1,
    size: "L",
    color: "Blue",
  },
];

// ProductCard component with explicit typing
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex w-full h-full gap-4 p-4 bg-white rounded-lg shadow-lg">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={80}
        height={80}
        className="rounded"
      />
      <div className="flex flex-col w-full h-full justify-between">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">Size: {product.size}</p>
          <p className="text-gray-500">Color: {product.color}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">₹ {product.price}</p>
          <p className="text-gray-500">Qty: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

const Order: React.FC = () => {
  return (
    <div className="flex w-full h-fit px-10 md:px-20 lg:px-25 py-4 bg-gray-100">
      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-4 w-full md:w-8/12 h-fit m-2">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullName"
                      className="text-lg font-semibold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="mobileNumber"
                      className="text-lg font-semibold mb-2"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="text-lg font-semibold mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Flat, House No, Building, Apartment, Office"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="area" className="text-lg font-semibold mb-2">
                    Area, Colony, Street, Sector, Village
                  </label>
                  <input
                    type="text"
                    id="area"
                    className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Area, Colony, Street, Sector, Village"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="landmark"
                    className="text-lg font-semibold mb-2"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    id="landmark"
                    className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Landmark"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="city"
                      className="text-lg font-semibold mb-2"
                    >
                      Town/City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Town/City"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="pincode"
                      className="text-lg font-semibold mb-2"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="state" className="text-lg font-semibold mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full h-[40px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="State"
                  />
                </div>
              </form>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg mt-4">
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
              <div className="flex flex-col space-y-4">
                <label className="text-lg font-semibold flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    className="form-radio"
                  />
                  Cash on Delivery
                </label>
                <label className="text-lg font-semibold flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="payOnline"
                    className="form-radio"
                  />
                  Pay Online
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-4/12 h-fit m-2 mt-4 md:mt-0">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
              <div className="space-y-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="flex justify-between w-full mt-6 border-t pt-4">
                <h2 className="text-xl font-semibold">Sub Total</h2>
                <p className="text-xl font-semibold">₹ 500</p>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="discountCode" className="mb-2">
                  Enter Discount Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="discountCode"
                    className="w-2/3 h-[40px] border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:border-blue-500"
                    placeholder="Discount Code"
                  />
                  <button className="w-1/3 h-[40px] bg-black text-white rounded-r-lg">
                    Apply
                  </button>
                </div>
              </div>
              <div className="flex justify-between w-full my-4 border-b pb-2">
                <p className="text-lg">Shipping</p>
                <p className="text-lg">₹ 0</p>
              </div>
              <div className="flex justify-between w-full mb-4">
                <h2 className="text-xl font-bold">Grand Total</h2>
                <p className="text-xl font-bold">₹ 500</p>
              </div>
              <button className="w-full h-[40px] bg-black text-white rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
