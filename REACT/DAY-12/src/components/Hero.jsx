import React from "react";

const Hero = ({ title, age, isStudents }) => {
    console.log(title, age, isStudents);
    return (
        <div>
            <h1>{title}</h1>
            <h2>{age}</h2> <h4>{isStudents && "student hai" }</h4>
        </div>
    );
};

export default Hero;
