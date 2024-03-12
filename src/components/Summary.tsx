const Summary = () => {
  return (
    <div className=" text-[13px]">
      <div className="flex justify-end gap-x-16 mb-5">
        <p className="text-gray-400">Single:</p>{" "}
        <p className="font-semibold">$958</p>
      </div>
      <div className="flex justify-end gap-x-16 mb-5">
        <p className="text-gray-400">Recurring:</p>{" "}
        <p className="font-semibold">$699</p>
      </div>
      <div className="flex justify-end gap-x-14 text-right mb-10">
        <p>Total:</p> <p className="font-extrabold">$1657</p>
      </div>
    </div>
  );
};

export default Summary;
