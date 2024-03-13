/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import CardItem from "./CardItem";
import Summary from "./Summary";

const Checkout = () => {
  const [single, setSingle] = useState(0);
  const [recurring, setRecurring] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-[25px] mb-10">Check Out</h1>
        <div className="grid grid-cols-5 justify-between font-semibold text-gray-300 text-[15px]">
          <p className=" mb-5 col-span-3">Services:</p>
          <p className=" mb-5 text-center">Quantity:</p>
          <p className=" mb-5 text-right">Price:</p>
        </div>

        <CardItem setSingle={setSingle} setRecurring={setRecurring} />
        <Summary recurring={recurring} single={single} />
      </div>
    </>
  );
};

export default Checkout;
