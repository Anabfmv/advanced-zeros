module.exports = function getZerosCount(number, base) {
  let del = maxnod(base);
  let be = counter(number,del);

  return be;

}

function maxnod (n){
  let del = 2, toto = Math.sqrt(n)+1
  while(del <= toto)
  if(n%del == 0)
  {
    max = del;
    n = n/del;
  }
else
++del;

if(n>1)
max = Math.max(max, n)
return max;
}

function counter (number,del){
  let t = 0;
  let i=1;
  let colNULL = 0;
  do {
    colNULL = Math.floor(number / Math.pow(del,i));
    t += colNULL;
    i++;
  } while (colNULL !=0);

  return t;
}
