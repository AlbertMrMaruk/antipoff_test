type BtnSubmitProps = {
  value: string;
  onClickFunc: () => void;
};

const BtnSubmit = ({ value, onClickFunc }: BtnSubmitProps) => {
  return (
    <div
      className="bg-[#512689] rounded-lg  w-[100%] py-2 px-4 text-white text-center leading-5 cursor-pointer"
      onClick={onClickFunc}
    >
      {value}
    </div>
  );
};

export default BtnSubmit;
