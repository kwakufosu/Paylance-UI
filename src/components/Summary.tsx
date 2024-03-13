interface Props {
  recurring: number;
  single: number;
}

const Summary = ({ recurring, single }: Props) => {
  console.log(recurring, single);
  const total = single + recurring;
  return (
    <div className=" text-[13px]">
      <div className="flex justify-end gap-x-16 mb-5">
        <p className="text-gray-400">Single:</p>{" "}
        <p className="font-semibold">${single}</p>
      </div>
      <div className="flex justify-end gap-x-16 mb-5">
        <p className="text-gray-400">Recurring:</p>{" "}
        <p className="font-semibold">${recurring}</p>
      </div>
      <div className="flex justify-end gap-x-14 text-right mb-10">
        <p>Total:</p> <p className="font-extrabold">${total}</p>
      </div>
    </div>
  );
};

export default Summary;
