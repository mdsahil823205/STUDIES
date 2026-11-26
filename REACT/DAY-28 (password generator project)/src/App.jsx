import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const selectInput = useRef(null);
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [length, setLength] = useState(18);
  const [password, setPassword] = useState("");
  const [addNumber, setAddNumber] = useState(false);
  const [addCharacter, setAddCharacter] = useState(false);

  function generatePassword() {
    let pass = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const character = "~!@#$%^&*_,./|?'";

    if (addNumber) alphabet += number;
    if (addCharacter) alphabet += character;

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
      pass += alphabet[randomValues[i] % alphabet.length];
    }

    setPassword(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [length, addNumber, addCharacter]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    selectInput.current?.select();
  };

const handleReset = () => {
  if (!addNumber && !addCharacter && length === 18) {
    generatePassword();
  } else {
    setAddNumber(false);
    setAddCharacter(false);
    setLength(18);
  }
};

  const handleSave = () => {
    if (password && !savedPasswords.includes(password)) {
      setSavedPasswords((prev) => [...prev, password]);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-md flex flex-col p-4 mx-auto">
      <h1 className="text-4xl mt-10 font-bold capitalize mx-auto"><span className="text-red-500">JWT</span> key generator</h1>

      {/* Password Display Input */}
      <input
        ref={selectInput}
        type="text"
        placeholder="Password"
        className="bg-white text-black p-3 my-8 rounded-2xl border-none outline-none"
        value={password}
        readOnly
      />

      {/* Length Range Slider */}
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="length" className="text-lg">
          Length: {length}
        </label>
        <input
          id="length"
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="cursor-pointer"
        />
      </div>

      {/* Add Number Checkbox */}
      <label
        className="text-xl capitalize flex items-center gap-2 select-none cursor-pointer mb-2"
        htmlFor="number"
      >
        <input
          type="checkbox"
          id="number"
          checked={addNumber}
          onChange={(e) => setAddNumber(e.target.checked)}
        />
        add number
      </label>

      {/* Add Character Checkbox */}
      <label
        className="text-xl capitalize flex items-center gap-2 select-none cursor-pointer mb-4"
        htmlFor="character"
      >
        <input
          type="checkbox"
          id="character"
          checked={addCharacter}
          onChange={(e) => setAddCharacter(e.target.checked)}
        />
        add character
      </label>

      {/* Action Buttons */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl mt-3 text-xl capitalize active:scale-95 transition cursor-pointer"
        onClick={handleCopy}
      >
        copy password
      </button>

      <button
        className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-xl mt-3 text-xl capitalize active:scale-95 transition cursor-pointer"
        onClick={handleReset}
      >
        reset password
      </button>

      <button
        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-xl mt-3 text-xl capitalize active:scale-95 transition cursor-pointer"
        onClick={handleSave}
      >
        save password
      </button>

      {/* Saved Passwords List */}
      {savedPasswords.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Saved Passwords:</h2>
          <div className="flex flex-col gap-1">
            {savedPasswords.map((item, index) => (
              <p
                key={index}
                className="bg-gray-800 text-white px-3 py-1 rounded break-all"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
