import React, { useState, useRef, useEffect } from 'react';

const Otpbox = ({ onComplete }) => {
  const length = 6; // Define the length of the OTP
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputsRef = useRef([...Array(length)].map(() => React.createRef()));

  useEffect(() => {
    inputsRef.current[0].current.focus();
  }, []);

  const handleChange = (element, index) => {
    const value = element.value;
    // Ensure the input is numeric
    if (!value.match(/^\d*$/)) {
      return; // If not numeric, ignore this input
    }

    const newOtp = [...otp];
    // Ensure we're only taking the last character typed if it's numeric
    newOtp[index] = value.length > 1 ? value[value.length - 1] : value;

    if (value && index < length - 1) {
      inputsRef.current[index + 1].current.focus();
    }

    setOtp(newOtp);
    if (newOtp.every((num) => num !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleBackspace = (element, index) => {
    if (!element.value && index > 0) {
      inputsRef.current[index - 1].current.focus();
    }
    const newOtp = [...otp];
    newOtp[index] = '';
    setOtp(newOtp);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text')
                       .slice(0, length)
                       .split('')
                       .filter(char => char.match(/^\d$/)); // Keep only numeric values

    if (pasteData.length === length) {
      setOtp(pasteData);
      onComplete(pasteData.join(''));
      pasteData.forEach((value, i) => {
        inputsRef.current[i].current.value = value;
      });
      // Focus the last input after pasting
      inputsRef.current[length - 1].current.focus();
    }
  };

  return (
    <div onPaste={handlePaste}>
      {otp.map((data, index) => (
        <input
          key={index}
          ref={inputsRef.current[index]}
          type="text"
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => e.key === "Backspace" && handleBackspace(e.target, index)}
          maxLength="1"
          className='align-middle border border-black w-16 h-20 mx-4 items-center bg-white text-center text-black'
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default Otpbox;
