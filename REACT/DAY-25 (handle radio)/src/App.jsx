import React, { useState } from "react";
const payments = [
    { id: "UPI", info: "Instant transfer via UPI apps" },
    { id: "Card", info: "Pay using credit or debit card" },
    { id: "COD", info: "Pay when the order arrives" },
];
const App = () => {
    const [selectMode, setselectMode] = useState("");
    return (
        <div>
            {payments.map((item, index) => (
                <label key={index} htmlFor={item.id}>
                    <input
                        type="radio"
                        id={item.id}
                        name="payment"
                        value={item.id}
                        checked={selectMode.id === item.id}
                        onChange={() => {
                            setselectMode(item);
                            console.log(item)
                        }}
                    />
                    {item.id}
                </label>
            ))}
            <div>
                <p>{selectMode.id}</p>
                <p>using:{selectMode.info}</p>
            </div>
        </div>
    );
};

export default App;
