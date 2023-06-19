import React from "react";

import '../components/products.css'

function MyProduct() {
  const CourseNameList = [
    {
      name: "React.js",
      price: 199.99,
    },
    {
      name: "Flutter",
      price: 149.99,
    },
    {
      name: "QA Testing",
      price: 99.99,
    },
    {
      name: "Python Programming",
      price: 179.99,
    },
    {
      name: "JavaScript Basics",
      price: 79.99,
    },
    {
      name: "node JS",
      price: 200,
    },
    {
      name: "digital marketing",
      price: 99,
    },
    
  ];

  const CourseMap = CourseNameList.map((course) => (
    <div>
      <p id="course-name">  {course.name}</p>
      <b id="price"> {course.price}</b>
    </div>
  ));



  return (
    <div>
      {CourseMap.map((Course_details_price_name, index) => (
        <div key={index}>

          {Course_details_price_name}
        </div>
      ))}
    </div>
  );
}

export default MyProduct;
