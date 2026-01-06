import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";
import PracticeCountries from "./Practice/PracticeCountries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((response) => response.json());
function App() {
  return (
    <>
      <h1 className="font-extrabold">React World On the Go</h1>
      <Suspense fallback= {<p>Country Details is loading...</p>}>
        <Countries countriesPromise = { countriesPromise }/>
      </Suspense>

      {/* <Suspense fallback={<p>Country details is loading....</p>}>
        <PracticeCountries countriesPromise={countriesPromise} />
      </Suspense> */}
    </>
  );
}

export default App;
