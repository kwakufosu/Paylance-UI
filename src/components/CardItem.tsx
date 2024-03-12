import { services } from "../data/data";
import Button from "./Button";
const CardItem = () => {
  return (
    <ul>
      {services.map((service) => {
        return (
          <li className="grid grid-cols-5 gap-x-5 mb-14 " key={service.title}>
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
              <Button />
            </div>

            <p className=" pt-6 text-[15px]  text-right font-semibold">
              $
              {service.title === "Web" || service.title === "Social Media" ? (
                <>
                  <p className="inline">{service.price}</p>

                  <p className="text-[7px] block ">Monthly</p>
                </>
              ) : (
                service.price
              )}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CardItem;
