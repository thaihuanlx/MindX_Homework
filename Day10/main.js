function kiemtra(){
    const userName=document.getElementById("un").value ;
    const passWord=document.getElementById("pw").value ;
    if(userName==="admin" && passWord==="admin123"){
        alert("Đăng nhập thành công !")
    }else{
        alert("Đăng nhập thất bại ! vui lòng đăng nhập lại !")
    }
}