//bai1
const arr = [0,5,9,4,6,10,18];
const chan = [];
const le = [];
arr.forEach((num) => {
  if (num % 2 === 0) {
    chan.push(num);
  }else{
    le.push(num);
  }
});
console.log("Số chẳn",chan);
console.log("Số lẻ",le);

//bai2
const arr2 = [2, 3, 4];
function soDuyNhat(arr) {
    const a = arr2.filter(val => val % 2 === 0)
    const b = arr2.filter(val => val % 2 !== 0)
    if(a.length === 1){
      return a[0]
    }else{
      return b[0]
    }
    
  }
  
  
  const result = soDuyNhat(arr2);
  console.log("Kết quả số duy nhất là",result)