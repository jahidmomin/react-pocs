import { useEffect, useState } from "react";

export default function UseFetch() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        // alert(data)
        setTimeout(() => {
          setdata(data);
        }, 200);
      })
      .catch((err) => console.log(err));
  }, []);

  return data;
}
