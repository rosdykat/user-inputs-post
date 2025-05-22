console.log("testing!");

// Selecting the form
const messageForm = document.getElementById("messageForm");

// Creating a submit event listener 
function handleSubmitMessageForm(event) {
  event.preventDefault(); // Prevent defaults
  console.log("Form submitted!");
  // do something with the form data here
  const formData = new FormData(messageForm);
  const message = formData.get("message") //
  const formValues = Object.fromEntries(formData)
  // 
  fetch("http://localhost:8080/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}

// This is the event listener to run the functin when the user clicks submit
messageForm.addEventListener("submit", handleSubmitMessageForm);

// // TODO: get the staff data from the server and display it (render it) on the page
// async function getStaff(){
//   const result = await fetch("https://localhost:8080/staff");
//   console.log(result)
// }

// getStaff();