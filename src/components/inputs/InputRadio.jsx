// eslint-disable-next-line react/prop-types
const InputRadio = ({children}) => {
  return (
    <div className="mt-3">
      <div>
        <div className="ml-1">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id=""
              className="h-5 w-5 border-gray-300 focus:ring-2 cursor-pointer"
            />
            <label htmlFor="">{children}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRadio;
