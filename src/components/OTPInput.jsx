import React, { useRef, useState } from 'react';

const OTPInput = ({ onChange }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef(new Array(6).fill(null).map(() => React.createRef()));

    const handleInputChange = (e, index) => {
        const newValue = e.target.value;
        let newOtp;

        if (!isNaN(newValue) && newValue !== '') {
            newOtp = [...otp];
            newOtp[index] = newValue;

            setOtp(newOtp);

            if (index < 5 && newValue !== '') {
                inputRefs.current[index + 1].current.focus();
            }
        } else {
            if (index > 0) {
                inputRefs.current[index - 1].current.focus();
            }

            newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
        }
        onChange(newOtp.join(''));
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].current.focus();
        } else if (e.key !== 'Backspace' && index < 5 && otp[index] !== '') {
            inputRefs.current[index + 1].current.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData.getData('text');
        const pastedDigits = pastedData.match(/\d/g);

        if (pastedDigits && pastedDigits.length === 6) {
            let newOtp = pastedDigits.slice(0, 6);
            setOtp(newOtp);

            inputRefs.current[5].current.focus();

            onChange(newOtp.join(''));
        }
    };

    return (
        <div className="grid grid-cols-6 gap-4 w-full mb-6" onPaste={(e) => handlePaste(e)}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={inputRefs.current[index]}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-14 border border-primary-border rounded-2xl text-center focus:outline-primary text-xs text-mega-black font-normal"
                />
            ))}
        </div>
    );
};

export default OTPInput;
