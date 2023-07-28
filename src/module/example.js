console.log("Wellcome")

let a={name:"hari",Age:23,Location:"KNR"}
console.log(a)
 
let dt=new Date()
console.log(dt.getDay())

let dt1=new Date()
 console.log(dt1.getFullYear())

 let dt2=new Date()
 console.log(dt2.getHours())

let dt3=new Date()
 console.log(dt3.getMilliseconds())

let dt4=new Date()
 console.log( dt4.getMinutes())

let dt5=new Date()
 console.log( dt5.getSeconds())

let dt6=new Date()
 console.log(dt6.getTime())



 console.log("Wellcome")

const Sum=(a,b)=>{
      return a+b
}
console.log(Sum(5,10))

console.log([10,15,20,25])

let n=5;
let i=0
for(let i=0; i<=n; i++){
    console.log("Haridatha")
}

let a1 =[1,2,3,4,5,6,7,8,9,10]
let sum=0;
for(let i=0;i<=a1.length-1;i++){
    sum=sum+a1[i]
}
console.log(sum)

setTimeout(function(){
    console.log("Wellcome")},2000)

    let count=10
    setInterval(function(){
      if(count===0){
        clearInterval()
      }else{
        console.log("counter"+count);
        count--;
      }
      },2000)

      
    let N=5;
    let star="";
    for(let i=0;i<N;i++){
        for(let j=0;j<i;j++){
            star+="*";
        }
      star+='/n'
    }    
   

    let aa="hello";
    let bb="world";


