const openBtn=document.getElementById("openBtn");
const message=document.getElementById("message");
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
const petals=document.getElementById("petals");
const stars=document.getElementById("stars");

function makePetal(){
  const p=document.createElement("div");
  p.className="petal";
  p.textContent=["🌸","🌷","💗","✨"][Math.floor(Math.random()*4)];
  p.style.left=Math.random()*100+"vw";
  p.style.setProperty("--drift",(Math.random()*240-120)+"px");
  p.style.animationDuration=(5+Math.random()*5)+"s";
  p.style.fontSize=(12+Math.random()*14)+"px";
  petals.appendChild(p);
  setTimeout(()=>p.remove(),11000);
}
setInterval(makePetal,420);

for(let i=0;i<55;i++){
  const s=document.createElement("div");
  s.className="star";
  s.style.left=Math.random()*100+"vw";
  s.style.top=Math.random()*100+"vh";
  s.style.animationDelay=Math.random()*2+"s";
  stars.appendChild(s);
}

function confetti(){
  for(let i=0;i<80;i++){
    const c=document.createElement("div");
    c.textContent=["💖","✨","🌸","🎉","🤍"][Math.floor(Math.random()*5)];
    c.style.position="fixed";
    c.style.left="50vw"; c.style.top="45vh";
    c.style.zIndex="30"; c.style.pointerEvents="none";
    c.style.fontSize=(12+Math.random()*18)+"px";
    document.body.appendChild(c);
    const x=(Math.random()*2-1)*innerWidth;
    const y=(Math.random()*2-1)*innerHeight;
    c.animate([{transform:"translate(-50%,-50%) scale(.2)",opacity:1},{transform:`translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:1200+Math.random()*1000,easing:"cubic-bezier(.2,.8,.3,1)"}).onfinish=()=>c.remove();
  }
}

openBtn.addEventListener("click",()=>{
  message.classList.remove("hidden");
  message.scrollIntoView({behavior:"smooth",block:"center"});
  music.play().then(()=>{musicBtn.classList.add("playing")}).catch(()=>{});
  confetti();
  for(let i=0;i<20;i++) setTimeout(makePetal,i*80);
});

document.getElementById("celebrate").addEventListener("click",()=>{
  confetti();
  for(let i=0;i<30;i++) setTimeout(makePetal,i*60);
});

musicBtn.addEventListener("click",()=>{
  if(music.paused){music.play();musicBtn.classList.add("playing")}
  else{music.pause();musicBtn.classList.remove("playing")}
});
