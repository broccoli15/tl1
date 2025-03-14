//sua loi ten

function fixName(name) {
    fName = name;
    st = fName.split(" ");
    fName = "";
    for (i = 0; i < st.length; i++) {
      if (st[i].length > 0) {
        if (fName.length > 0) fName = fName + " ";
        fName = fName + st[i].substring(0, 1).toUpperCase();
        fName = fName + st[i].substring(1).toLowerCase();
      }
    }
    return fName;
  }
  
  document.getElementById("username").focus();
  document.getElementById("username").onblur = function () {
    this.value = fixName(this.value);
  };
  
  function nextStep(onkey, myself, nextcontrol) {
    if (window.event) onkey = window.event;
    if (onkey.keyCode == 13) {
      document.getElementById(nextcontrol).focus();
    }
  }
  
  document.getElementById("username").onkeyup = function (onkey) {
    nextStep(onkey, this, "emailuser");
  };
  
  //kiem tra dinh dang email dung
  function correctEmail(str) {
    return true;
  }
  document.getElementById("emailuser").onkeyup = function (onkey) {
    nextStep(onkey, this, "age");
  };
  
  document.getElementById("age").onkeyup = function (onkey) {
    nextStep(onkey, this, "ngaysinh");
  };
  
  document.getElementById("ngaysinh").onkeyup = function (onkey) {
    nextStep(onkey, this, "nam");
  };
  
  document.getElementById("nam").onkeyup = function (onkey) {
    nextStep(onkey, this, "nu");
  };
  
  //kiem tra su hop le cua ten su dung
  function correctUsername(str) {
    return true;
  }
  //dinh dang ngay thang nam
  
  function birthDate(date) {
    str = date.split("/");
  
    if (str.length != 3) return false;
  
    if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;
  
    day = parseInt(s[0]);
    month = parseInt(s[1]);
    year = parseInt(s[2]);
  
    //kiem tra ngay thang nam hop le
    if (month > 12 || month < 1) return false;
  
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      if (day > 31) return false;
    } else if (month == 2) {
      if (year % 4 == 0 && year % 100 != 0) {
        if (day > 29) return false;
      } else if (day > 28) return false;
    } else if (day > 30) return false;
  
    if (day < 1) return false;
  
    d = new Date();
    if (year > d.getFullYear() || year < 1950) return false;
  
    return true;
  }
  
  function Submit() {
    var p = true;
  
    document.getElementById("username2").innerHTML = "";
    document.getElementById("emailuser2").innerHTML = "";
    document.getElementById("ngaysinh2").innerHTML = "";
    document.getElementById("nameuser2").innerHTML = "";
    document.getElementById("wrong_pass").innerHTML = "";
    document.getElementById("wrong_repass").innerHTML = "";
  
    if (document.getElementById("username").value == "") {
      document.getElementById("username2").innerHTML = "Nhập họ tên của bạn";
      document.getElementById("username").focus();
      p = false;
    }
  
    if (document.getElementById("emailuser").value == "") {
      document.getElementById("emailuser2").innerHTML = "Nhập email của bạn";
      document.getElementById("emailuser").focus();
      p = false;
    } else if (!correctEmail(document.getElementById("emailuser").value)) {
      document.getElementById("emailuser2").innerHTML =
        "Email chưa đúng định dạng";
      document.getElementById("emailuser").focus();
      p = false;
    }
  
    if (document.getElementById("ngaysinh").value == "") {
      document.getElementById("ngaysinh2").innerHTML = "Nhập ngày sinh của bạn";
      document.getElementById("ngaysinh").focus();
      p = false;
    } else if (!birthDate(document.getElementById("ngaysinh").value)) {
      document.getElementById("ngaysinh2").innerHTML =
        "Ngày sinh chưa đúng định dạng";
      document.getElementById("ngaysinh").focus();
      p = false;
    }
  
    if (document.getElementById("nameuser").value == "") {
      document.getElementById("nameuser2").innerHTML = "Nhập tên sử dụng của bạn";
      document.getElementById("nameuser").focus();
      p = false;
    } else if (!correctUsername(document.getElementById("nameuser").value)) {
      document.getElementById("nameuser2").innerHTML = "Tên sử dụng không đúng";
      document.getElementById("nameuser").focus();
      p = false;
    }
  
    if (document.getElementById("pass").value == "") {
      document.getElementById("wrong_pass").innerHTML = "Nhập mật khẩu của bạn";
      document.getElementById("pass").focus();
  
      p = false;
    } else if (document.getElementById("repass").value == "") {
      document.getElementById("wrong_repass").innerHTML =
        "Nhập xác nhận lại mật khẩu của bạn";
      document.getElementById("repass").focus();
  
      p = false;
    } else if (
      document.getElementById("pass").value !=
      document.getElementById("repass").value
    ) {
      document.getElementById("wrong_pass").innerHTML =
        "Mật khẩu chưa trùng khớp";
      document.getElementById("pass").focus();
      p = false;
    }
  
    if (p) document.getElementById("form-content").submit();
  }
  
  function Pass() {
    document.location.href = "https://itest.com.vn/lects/webappdev/form/";
  }
  
  document.getElementById("upload").onchange = function () {
    let preview = document.querySelector("img.preview");
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function () {
      preview.src = reader.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
      preview.classList.remove("nodisplay");
    }
  };
  