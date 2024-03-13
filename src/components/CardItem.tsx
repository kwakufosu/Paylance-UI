/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { services } from "../data/data";
import Button from "./Button";

interface Props {
  setRecurring: React.Dispatch<React.SetStateAction<number>>;
  setSingle: React.Dispatch<React.SetStateAction<number>>;
}

const CardItem = ({ setRecurring, setSingle }: Props) => {
  const [service, setService] = useState(services);

  useEffect(() => {
    const calculateSums = () => {
      const recurringTotal = service
        .filter((item) => item.recurring)
        .reduce((sum, item) => sum + item.quantity * item.price, 0);

      const standaloneTotal = service
        .filter((item) => !item.recurring)
        .reduce((sum, item) => sum + item.quantity * item.price, 0);

      setRecurring(recurringTotal);
      setSingle(standaloneTotal);
    };

    calculateSums();
  }, [service, setRecurring, setSingle]);

  const handleQuantityChange = (serviceId: number, newQuantity: number) => {
    setService((prevServices) =>
      prevServices.map((service) =>
        service.id === serviceId
          ? { ...service, quantity: newQuantity }
          : service
      )
    );
  };
  return (
    <ul>
      {service.map((service) => {
        return (
          <li className="grid grid-cols-5 gap-x-5 mb-14 " key={service.id}>
            <div className="col-span-3 flex gap-x-5">
              <div className="w-20  bg-gray-100 p-3 rounded-lg">
                {<service.icon />}
              </div>
              <div>
                <h2>{service.title} </h2>
                <p className="font-light text-gray-400 text-[10px]">
                  {service.description}
                </p>
              </div>{" "}
            </div>

            <div className="flex justify-center">
              <Button
                service={service}
                onQuantityChange={handleQuantityChange}
              />
            </div>

            <p className=" pt-4 text-[15px]  text-right font-semibold">
              $
              {service.title === "Web" || service.title === "Social Media" ? (
                <>
                  <p className="inline">{service.price * service.quantity}</p>

                  <p className="text-[7px] block ">Monthly</p>
                </>
              ) : (
                service.price * service.quantity
              )}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CardItem;
