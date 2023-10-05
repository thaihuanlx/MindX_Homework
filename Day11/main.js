const form = document.getElementById("form");
const dataUsername = ['abc@gmail.com', 'abc12@gmail.com', 'abc123@gmail.com']

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirmPassword");

function checkPassword(password) {
  if (password.length < 6) {
    return false;
  }

  let VietHoa = false;
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      VietHoa = true;
      break;
    }
  }

  return VietHoa;
}

function send() {
  const valueEmail = emailElement.value
  const valuePassWord = passwordElement.value
  const valueConfirmPassWord = confirmPasswordElement.value
  const checkConfirm = valuePassWord === valueConfirmPassWord
  const isCheckEmail = dataUsername.includes(valueEmail);
  const isValidatePass = checkPassword(valuePassWord)

  console.log({ valueEmail, valuePassWord, valueConfirmPassWord })
  
  if(isCheckEmail){
    alert("Email đã được sữ dụng")
  }

  if (!isValidatePass) {
    alert("Password phải có ít nhất 1 kí tự viết hoa và có ít nhất 6 kí tự ")
  }

  if (!checkConfirm) {
    alert("Password phải giống với confirm password")
  }

  const userInfor = {
    email: valueEmail,
    password: valuePassWord,
  };


  if(!isCheckEmail && isValidatePass && checkConfirm){
    localStorage.setItem("users", JSON.stringify(userInfor));
    alert("Đăng ký tài khoản thành công!");
  }
}


function login() {
  var username = document.getElementById('unLogin').value;
  var password = document.getElementById('pwLogin').value;

  var users = JSON.parse(localStorage.getItem('users'));
  console.log(users)
  console.log({username,password})
  if (users && users.email === username && users.password === password) {
    alert('Đăng nhập thành công!');
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không đúng!');
  }
}