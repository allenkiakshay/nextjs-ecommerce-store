interface FailureProps {
  amount: number;
  orderId: string;
  transactionId: string;
  paymentMode: string;
}

const Failure: React.FC<FailureProps> = ({
  amount,
  orderId,
  transactionId,
  paymentMode,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <p className="text-lg text-gray-700 mb-8">
        Unfortunately, your transaction could not be completed. Please try
        again.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <p className="text-gray-700">
          <strong>Amount:</strong> ${amount}
        </p>
        <p className="text-gray-700">
          <strong>Order ID:</strong> {orderId}
        </p>
        <p className="text-gray-700">
          <strong>Transaction ID:</strong> {transactionId}
        </p>
        <p className="text-gray-700">
          <strong>Payment Mode:</strong> {paymentMode}
        </p>
      </div>
      <a className="text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
};

export default Failure;
