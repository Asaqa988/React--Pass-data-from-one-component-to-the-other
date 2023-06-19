import React from "react";

// import MyProduct from "./components/products";

import MyItems from "./components/items";

export default function App() {
  const myList = [
    {
      title: "Pepsi",
      color: "green",
      price: "1 JD",
      image:
        "https://th.bing.com/th/id/OIP.3-Nm7e9rl1OI9AInnOkBVAHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "7up",
      color: "orange",
      price: "1.5 JD",
      image:
        "https://th.bing.com/th/id/OIP.75EfL93PPfmj2E-H8YNo3gHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "RedBull",
      color: "Gray",
      price: "2.5JD",
      image:
        "https://th.bing.com/th/id/OIP.QsTtjxy0LqP_tk0yj_UZLgHaHa?pid=ImgDet&rs=1",
    },
  ];
  const myName = "abedalraheem ";

  return (
    <div>
      <MyItems
        title={myList[0].title}
        color={myList[0].color}
        MyPrice={myList[0].price}
        image={myList[0].image}
      />
      <MyItems
        title={myList[1].title}
        color={myList[1].color}
        MyPrice={myList[1].price}
        image={myList[1].image}
      />

      <MyItems
        title={myList[2].title}
        color={myList[2].color}
        MyPrice={myList[2].price}
        image={myList[2].image}
      />
    </div>
  );
}
