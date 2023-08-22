import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosDemo() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((e) => console.log(e));
  });

  return (
    <div>
      {data.map((product) => {
        return <li>{product.title}</li>;
      })}
    </div>
  );
}
