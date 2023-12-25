import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const InputField = (props) => {
  const [isPassShow, setIsPassShow] = useState(false);
  const { type, onChange, placeholder, styling, icon, value, name, errors, register, control, } = props;


  const handleShowPass = () => {
    setIsPassShow(!isPassShow);
  };

  return (<>
    <div className='w-full mb-4'>
      <div className="relative">
        <span>
          <img src={icon} alt="email-icon" className='absolute left-2 top-[52%] translate-y-[-50%] h-5 object-cover' />
        </span>
        <input

          type={isPassShow ? 'text' : type}
          placeholder={placeholder}
          {...register(name)}
          control={control}
          name={name}
          className={`border border-gray p-2 w-full h-10 rounded-lg text-md font-normal focus:outline-primary px-10 text-primary-color ${styling}`} />
        {type === 'password' && <span className="absolute right-2 top-[52%] translate-y-[-50%] cursor-pointer"
          onClick={handleShowPass}>
          {isPassShow ? <IoEyeOffOutline size={22} className="text-primary-color" /> : <IoEyeOutline size={22} className="text-primary-color" />}
        </span>}
      </div>
      {errors[name] && (
        <p className="text-xs text-red-600 text-start w-full p-1">
          {errors[name].message}
        </p>
      )}
    </div>
  </>
  );
};

export default InputField;