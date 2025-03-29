import { Suspense } from "react";
import "./App.css";
import Laptops from "./Components/Laptops";

function App() {
  const fetchLaptop = async () => {
    const res = await fetch(
      "https://fakestoreapi.in/api/products/category?type=laptop"
    );
    return res.json();
  };
  const fetchLaptopPromise = fetchLaptop();
  // const laptopPromise = fetchLaptopPromise.product`s;
  return (
    <>
      <Suspense
        fallback={
          <h2 className="text-center text-3xl pt-70 m-5">
            Laptop's Are Loading...
          </h2>
        }
      >
        <Laptops fetchLaptopPromise={fetchLaptopPromise}></Laptops>
      </Suspense>
    </>
  );
}

export default App;
