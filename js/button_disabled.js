let button_feebback = document.getElementById("button_feedback");

button_feebback.addEventListener("click", () => {
  if (phone.classList.contains("invalid") || phone.value == "") {
    error_phone.innerHTML = "Error message";
    phone.style.borderBottom = "1px solid #F31919";
    phone.classList.add("invalid");
  } else {
    access++;
  }

  if (email.classList.contains("invalid") || email.value == "") {
    error_email.innerHTML = "Error message";
    email.style.borderBottom = "1px solid #F31919";
    email.classList.add("invalid");
  } else {
    access++;
  }

  if (name.classList.contains("invalid") || name.value == "") {
    error_name.innerHTML = "Error message";
    name.style.borderBottom = "1px solid #F31919";
    name.classList.add("invalid");
  } else {
    access++;
  }
  if (access == 3) {
    button_feebback.setAttribute("data-hystmodal", "#myModal");
  }
  access = 0;
  setTimeout(() => {
    button_feebback.removeAttribute("data-hystmodal", "#myModal");
  }, 0);
});
