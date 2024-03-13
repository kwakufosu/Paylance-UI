/* eslint-disable @typescript-eslint/no-unused-vars */

import { Iservice } from "../data/data";

interface Props {
  service: Iservice;

  onQuantityChange: (serviceId: number, newQuantity: number) => void;
}

const Button = ({ service, onQuantityChange }: Props) => {
  function handleIncrement() {
    onQuantityChange(service.id, service.quantity + 1);
  }

  function handleDecrement() {
    if (service.quantity === 0) return;
    onQuantityChange(service.id, service.quantity - 1);
  }
  return (
    <div className="flex justify-center items-center">
      <button className="p-1" onClick={handleDecrement}>
        -
      </button>
      <p className="px-1">{service.quantity}</p>
      <button className="p-1" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Button;
