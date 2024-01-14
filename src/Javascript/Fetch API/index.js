// const fetchAPI = () => {
//   fetch("data.txt")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
//       return res.text();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log("Fetch error:", error);
//     });
// };

// fetchAPI();

const fetchAPI = () => {
  return new Promise(function (resolve, reject) {
    fetch("data.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error! Status: " + error);
        }
        return response.text();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject("Something went wrong. Please try again.");
      });
  });
};

fetchAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
