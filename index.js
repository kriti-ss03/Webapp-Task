// async function query(data) {
//     const response = await fetch(
//         "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
//         {
//             headers: {
//                 "Accept": "image/png",
//                 "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//                 "Content-Type": "application/json"
//             },
//             method: "POST",
//             body: JSON.stringify(data),
//         }
//     );
//     const result = await response.blob();
//     return result;
// }
// query({ "inputs": "Astronaut riding a horse" }).then((response) => {
//     // Use image
//     let image = document.createElement("img");
//     let urlCreator = window.URL || window.webkitURL;
//     let imageUrl = urlCreator.createObjectURL(response);
//     image.src = imageUrl;
//     document.body.appendChild(image)
//     console.log(response);

// });

import React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";

const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(App);
