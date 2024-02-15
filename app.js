var menu = document.getElementById("navbar__menu");
var togglemenu = document.getElementById("togglemenu");

togglemenu.addEventListener("click", () => {
  menu.classList.toggle("act");
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jennifereneh05@gmail.com",
    Password: "Aamaka20@#$",
    To: "jennifereneh6@gmail.com",
    From: document.getElementById("email").value,
    subject: "New Contract Enquiry",
    body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}
