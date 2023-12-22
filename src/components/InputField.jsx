import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const InputField = (props) => {
  const [isPassShow, setIsPassShow] = useState(false);
  const { type, onChange, placeholder, styling, fieldIcon } = props;


  const handleShowPass = () => {
    setIsPassShow(!isPassShow);

  };
  return (
    <div className='mb-4 w-full relative'>
      <span>
        <img src={fieldIcon} alt="email-icon" className='absolute left-2 top-[52%] translate-y-[-50%]' />
      </span>
      <input type={isPassShow ? 'text' : type} placeholder={placeholder} onChange={onChange} className={`border border-gray p-2 w-full h-10 rounded-lg text-md font-medium focus:outline-primary px-10 text-primary-color ${styling}`} />
      {type === 'password' && <span className="absolute right-2 top-[52%] translate-y-[-50%] cursor-pointer"
        onClick={handleShowPass}>
        {isPassShow ? <IoEyeOffOutline size={22} className="text-primary-color" /> : <IoEyeOutline size={22} className="text-primary-color" />}
      </span>}
    </div>
  );
};

export default InputField;