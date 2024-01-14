// const promise = new Promise(function (resolved, rejected) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "data.txt", true);
//   xhr.send();

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       resolved(xhr.responseText);
//     } else {
//       rejected("Something went wrong. Please try again later.");
//     }
//   };
// });

// promise.then(function (solved) {
//   console.log(solved);
// });

// promise.catch(function (rejected) {
//   console.log(rejected);
// });

const getCountry = (name) => {
  const promise = new Promise(function (resolved, rejected) {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://restcountries.com/v3.1/name/${name}?fullText=true`,
      true
    );
    xhr.send();

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolved(JSON.parse(xhr.responseText));
      } else {
        rejected(`An error occured. Please try again later.`);
      }
    };
  });

  promise.then(function (data) {
    console.log(data);
  });
};

getCountry("Nigeria");
