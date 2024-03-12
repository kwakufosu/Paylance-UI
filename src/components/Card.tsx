/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from "formik";

interface IValues {
  expiryYear: string;
  cvv: string;
}

const Card = () => {
  const validate = (values: IValues) => {
    const errors: IValues = {
      expiryYear: "",
      cvv: "",
    };

    if (+values.expiryYear < 2023) {
      errors.expiryYear = "Kindly check your  expiry year and month";
    }
    if (values.cvv.length !== 3) {
      errors.cvv = "CVV should contain 3 characters";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      paymentMethod: "",
      nameOnCard: "",
      cardNum: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      saveOption: "",
    },
    validate,
    onSubmit: (values) => {
      return console.log(values);
    },
  });
  return (
    <div className="bg-gray-900 h-screen rounded-lg text-white px-2  ">
      <h2 className="text-[20px] p-4 tracking-wider px-9">Payment Info</h2>

      <form onSubmit={formik.handleSubmit} className="p-3 px-9">
        <div className="text-[13px] text-gray-400">
          <label htmlFor="paymentMethod" className="block mb-8">
            Payment Method:
          </label>

          <div className="flex items-center">
            <input
              name="paymentMethod"
              className="rounded-lg bg-gray-800 outline-none mr-10"
              type="radio"
              onChange={formik.handleChange}
              value="creditcard"
            />
            <label htmlFor="paymentMethod">Credit Card</label>
          </div>

          <div className="mt-4 flex items-center">
            <input
              name="paymentMethod"
              className="rounded-lg bg-gray-800 outline-none mr-10"
              type="radio"
              onChange={formik.handleChange}
              value="paypal"
            />
            <label htmlFor="paymentMethod">PayPal</label>
          </div>
        </div>

        <div className="mt-8 text-[13px] text-gray-400">
          <label htmlFor="nameOnCard" className="block mb-1">
            Name On Card:
          </label>
          <input
            name="nameOnCard"
            className="w-full  p-2 px-3  rounded-lg bg-gray-800 outline-none text-white"
            type="text"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mt-8 text-[13px] text-gray-400">
          <label htmlFor="cardNum" className="block mb-1">
            Card Number:
          </label>
          <input
            name="cardNum"
            className="w-full p-2 px-3  rounded-lg bg-gray-800 outline-none text-white"
            type="text"
            onChange={formik.handleChange}
          />
        </div>

        <div className=" flex justify-between mt-8 text-[13px] text-gray-400">
          <div>
            <label htmlFor="expirationDate" className="block mb-1">
              Expiration Date:
            </label>
            <div className="flex gap-x-4">
              <div>
                <input
                  placeholder="month"
                  type="text"
                  name="expiryMonth"
                  onChange={formik.handleChange}
                  className="w-24 p-2 px-3 rounded-lg bg-gray-800 outline-none text-white"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="year"
                  type="number"
                  name="expiryYear"
                  onChange={formik.handleChange}
                  className="w-24  p-2 px-3 rounded-lg bg-gray-800 outline-none text-white"
                  min="2024"
                  max="2030"
                  required
                />

                {formik.touched.expiryYear && formik.errors.expiryYear ? (
                  <p>{formik.errors.expiryYear}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="cvv" className="block mb-1">
              CVV:
            </label>
            <input
              name="cvv"
              className="w-20 p-2 px-3  rounded-lg bg-gray-800 outline-none text-white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cvv}
            />
            {formik.touched.cvv && formik.errors.cvv ? (
              <p>{formik.errors.cvv}</p>
            ) : null}
          </div>
        </div>

        <div className="flex items-center text-[13px] text-gray-400 mt-5">
          <input
            name="saveOption"
            className="rounded-lg bg-gray-800 outline-none mr-6 mt-2 "
            type="radio"
            onChange={formik.handleChange}
            value="yes"
          />
          <label htmlFor="saveOption" className="pt-2">
            Save Payment On File
          </label>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-white text-center w-full mt-10 p-3 text-black font-semibold text-[20px] "
        >
          Pay Marcus
        </button>
      </form>
    </div>
  );
};

export default Card;
