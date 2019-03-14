module.exports = 
function getZerosCount(number, base) {
  let del = primeDivider(base);
    if(del.length==0){
  del.push(base);
}

  let res = Array.from(new Set(del)).map(function(x){
    let col = del.filter(function(op){return op==x}).length;
    return Math.floor(counter(number,x)/col)
  });
  let min = Math.min.apply(null, res);
  
return min;
 }

function primeDivider (n){
  let list=[];
  let del = 2, toto = n/2
  while(del <= toto)
  if(n%del == 0)
  {
    if(isPrime(del)){
      list.push(del);
    }
    n = n/del;
  }
else
++del;
return list;
}

function isPrime (num){
    for(let i=2; i<num; i++){
      if(num%i==0){
        return false;
      }
    }
  return true;
}

function counter (number,del){
  let t = 0;
  let i=1;
  let colNULL = 0;
  do {
    colNULL = Math.floor(number / Math.pow(del,i));
    t += colNULL;
    i++;
  }
  while (colNULL !=0);
  return t;
}