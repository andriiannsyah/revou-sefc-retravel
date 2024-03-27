// FORM VALIDATION

function formSubmit() {
  let form = document.forms["form-contact"];
  let username = form["name"].value;
  let email = form["email"].value;

  if (username === "" || email === "") {
    alert("Username atau email Harus diisi");
  } else {
    alert("Berhasil");
  }
}
document.getElementById("send-button").addEventListener("click", () => formSubmit());
