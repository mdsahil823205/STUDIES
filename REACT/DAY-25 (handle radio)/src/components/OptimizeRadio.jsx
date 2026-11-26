import React, { useState } from "react";

const App = () => {
    const [course, setCourse] = useState("");
    console.log(course)
    const courses = [
        "html",
        "css",
        "js",
        "react",
        "tailwind",
        "express",
        "mongo",
        "nextjs",
        "openAi",
        "dsa",
    ];

    return (
        <div>
            {courses.map((item, index) => (
                <label key={index} htmlFor={item}>
                    <input
                        type="radio"
                        name="gender"
                        id={item}
                        value={item}
                        checked={course === item}
                        onChange={(e) => { setCourse(e.target.value) }}
                    />
                    {item}
                </label>
            ))} 
        </div>
    );
};

export default App;
