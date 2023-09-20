var height1 = document.getElementById('height');
var weight1 = document.getElementById('weight');
var cal = document.getElementById('cal');

function calculate(height, weight) {
    if(height <= 0 || weight <= 0) {
        alert('Chỉ số không hợp lệ');
    }
    height = height/100;
    let bmi = weight/Math.pow(height,2);
    return bmi;
}

cal.onclick = function result() {
    var height = height1.value;
    var weight = weight1.value;
    var bmi = calculate(height, weight);
    if(bmi < 18.5){
        alert('Bạn bị gầy, nguy cơ phát triển bệnh thấp');
    } else if(bmi >= 18.5 && bmi <= 24.9){
        alert('Bạn bình thường, nguy cơ phát triển bệnh trung bình');
    } else if(bmi >= 25 && bmi <= 29.9){
        alert('Bạn hơi béo, nguy cơ phát triển bệnh cao');
    } else if(bmi >= 30 && bmi <= 34.9){
        alert('Bạn béo phì cấp độ 1, nguy cơ phát triển bệnh cao');
    } else if(bmi >= 35 && bmi <= 39.9){
        alert('Bạn béo phì cấp độ 2, nguy cơ phát triển bệnh rất cao');
    } else if(bmi > 40){
        alert('Bạn béo phì cấp độ 3, nguy cơ phát triển bệnh nguy hiểm');
    }
}