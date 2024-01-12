// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [countryName, setCountryName] = useState("");
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       if (countryName.trim() === "") {
//         setData(null);
//         return;
//       }

//       setLoading(true);
//       const response = await axios.get(
//         "https://restcountries.com/v3.1/name/" + countryName
//       );
//       let [data] = response.data;
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       console.log("Error", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCountryName(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         onChange={handleInputChange}
//         onKeyDown={(event) => {
//           if (event.key === "Enter") {
//             fetchData();
//           }
//         }}
//         placeholder="Enter Country Name"
//         type="text"
//         value={countryName}
//       />
//     </div>
//   );
// }

// export default App;

import Card from "./components/Card";
import Like from "./components/Like";

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
