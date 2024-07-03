import Fotter from "@/Components/HomePage/Footer";
import Navbar from "@/Components/HomePage/Navbar";
import Failure from "@/Components/Payments/Failure";
import Success from "@/Components/Payments/Success";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Success
        amount={100}
        orderId={"TEST"}
        transactionId={"TEST"}
        paymentMode={"TEST"}
      />
      <Fotter />
    </div>
  );
};
export default Page;
