import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makePayment, resetPaymentState } from "../../redux/paymentSlice.js";
import toast, { Toaster } from "react-hot-toast";

const Payment = ({ courseId, coursePrice }) => {
  const [amount, setAmount] = useState(coursePrice || 50);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector((state) => state.payment);

  const handlePayment = () => {
    if (!courseId) {
      toast.error("Invalid course!");
      return;
    }
    dispatch(makePayment({ courseId, amount }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success("Payment Successful!");
      dispatch(resetPaymentState());
    } else if (status === "failed") {
      toast.error(error || "Payment Failed!");
    }
  }, [status, error, dispatch]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Course Payment</h2>
      <p className="text-lg mb-4 text-gray-700">
        Amount to Pay: <span className="font-semibold">${amount}</span>
      </p>

      <button
        onClick={handlePayment}
        disabled={status === "loading"}
        className={`w-full py-3 rounded-lg text-white text-lg font-semibold transition ${
          status === "loading"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {status === "loading" ? "Processing Payment..." : "Pay Now"}
      </button>

      {status === "succeeded" && data && (
        <div className="mt-5 p-3 bg-green-100 rounded text-green-800">
          Payment completed successfully! <br />
          Transaction ID: <span className="font-semibold">{data.transactionId || "N/A"}</span>
        </div>
      )}
    </div>
  );
};

export default Payment;
