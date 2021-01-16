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

    let interval = timer()

    let minus=document.getElementById("minus"),
        plus=document.getElementById("plus"),
        heart=document.getElementById("heart"),
        playing=true

    minus.addEventListener("click",function(){
          var a=document.getElementById("counter"),
              b=parseInt(a.innerText);
          a.innerText=b-1
        })

    plus.addEventListener("click",function(){
            var a=document.getElementById("counter"),
                b=parseInt(a.innerText);
            a.innerText=b+1
          })

    heart.addEventListener("click",function(){
      var a=document.getElementById("counter"),
          b=parseInt(a.innerText),
          c=document.querySelector(".likes"),
          d=void 0;
      if([].concat(_toConsumableArray(c.children)).map(function(a){
        return parseInt(a.dataset.num)}).includes(b)){
          d=document.querySelector('[data-num="'+b+'"]');
        var e=parseInt(d.children[0].innerText);
        d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"
      }
        else(d=document.createElement("li")).setAttribute("data-num",b),
        d.innerHTML=b+" has been liked <span>1</span> time",
        c.appendChild(d)
      })

      pause.addEventListener("click",function(){
        playing?(playing=false,clearInterval(interval),this.innerText="resume"):(playing=true,interval=timer(),this.innerText="pause")
        [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){
                                                                                        "pause"!==a.id&&(a.disabled=!playing)
                                                                                        })
        })
}

function _toConsumableArray(a){
  if(Array.isArray(a)){
    for(var b=0,c=Array(a.length);
    b<a.length;
  b++)
  c[b]=a[b];
  return c
  }
  return Array.from(a)
}
