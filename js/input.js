//---------------NAME
let access = 0;
let name = document.getElementById("name-input");
let error_name = document.getElementById("name-error");
name.onblur = function () {
  if (name.value == "") {
    name.classList.add("invalid");
  }
};

name.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    error_name.innerHTML = "";
    name.style.borderBottom = "1px solid #FAFAFA";
  }
};

// -----------------------PHONE
let phone = document.getElementById("phone-input");
let error_phone = document.getElementById("phone-error");
phone.onblur = function () {
  if (phone.value.length < 12 || !phone.value.includes("+7")) {
    // не email
    phone.classList.add("invalid");
  }
};

phone.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    error_phone.innerHTML = "";
    phone.style.borderBottom = "1px solid #FAFAFA";
  }
};

//------------------------EMAIL
let email = document.getElementById("email-input");
let error_email = document.getElementById("email-error");
email.onblur = function () {
  if (!email.value.includes("@")) {
    email.classList.add("invalid");
  }
};

email.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    error_email.innerHTML = "";
    email.style.borderBottom = "1px solid #FAFAFA";
  }
};
