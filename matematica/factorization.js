
function factorize(n){
let factors=[];
for (let d=2;d<=n;d++)
 {
    if (n%d==0)
    {
      let e=0;  
      do
      {
        e++;
        let m=n/d;
        console.log(n+"="+m+"*"+d);
        n=m;
      }
      while (n%d==0);
      let new_factor=[d,e];
      factors.push(new_factor);
    };
 };
 return factors;
};

function pretty_factorization(n)
{
 let factors_list= factorize(n);
 console.log("factors_list=",factors_list);
 if (factors_list.length==0) return "1";
 let text="";
 for (let i=0;i<factors_list.length;i++)
  {
    if (i>0)
      text=text+"*";
    let factor=factors_list[i];
    console.log("factor=",factor)
    text=text+factor[0]+"^"+factor[1];
  };
 return text;
}

console.log(pretty_factorization(12376462));
 