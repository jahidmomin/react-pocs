import React, { useEffect } from "react";
import UseFetch from "./customhooks/UseFetch";

export default function UseFetchImpl() {
  const data = UseFetch();
  return <div>
    {
        data.map(product=>{
            return <li>{product.title}</li>;
        })
    }
  </div>;
}
