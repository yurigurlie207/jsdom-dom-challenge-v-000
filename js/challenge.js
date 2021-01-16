// Your code goes here
document.addEventListener( "DOMContentLoaded", function () {
  myJSChallenge()
} );


function myJSChallenge() {

  let timer=function(){
    return setInterval(function(){
      let a=document.getElementById("counter"),
          b=parseInt(a.innerText);
      a.innerText=b+1
      },1e3)
    }

    let interval=timer()




}
