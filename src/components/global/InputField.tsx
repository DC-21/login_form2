interface InputFieldProps {
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => {
  return (
    <div className="w-full flex">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 focus:outline-none rounded mt-4"
      />
    </div>
  );
};

export default InputField;
