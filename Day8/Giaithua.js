function countNumber(n) 
{
  if(n === 0){
    return 1;
  }
  return n * countNumber(n - 1);
}
console.log(countNumber(5))