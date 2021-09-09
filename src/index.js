import Main from './Main'
require('./index2');
require('./index3');
//var r=require('react');
var br=require('react-dom');


br.render(<Main />,document.getElementById('main'),()=>document.body.style.backgroundColor="blue");

const x=document.createElement("section");
x.innerHTML+=`<img src="https://orig00.deviantart.net/a839/f/2015/206/a/4/a48b379073dc61d22a425c977bee9c44-d92tm84.gif " />`;
document.getElementById('main').appendChild(x);

br.render([<img key={1} src="https://th.bing.com/th/id/R.799f2baccb7b5fb5b49817d9229bd7f6?rik=SkC8CyXaE5uRvg&riu=http%3a%2f%2forig15.deviantart.net%2fd08c%2ff%2f2015%2f337%2f0%2f8%2fbbcp_bullet_stand_animation__color_11__by_caliburwarrior-d9iww3r.gif&ehk=piJryBKpJax8G64WCNjGnYyq%2fEKDyhqHR4KAj92Y6OM%3d&risl=&pid=ImgRaw&r=0" />,<h2  key={2}>Hello world</h2>,<img  key={3} src="https://i.imgur.com/teGqtsy.gif" />,<p  key={4}>The first stupid thing human learned is to speak a language and the second stupidest thing he learned is not understanding his own language. If you say I  will learn something from fools, then I say you are a fool.</p>,<br  key={5} />,<hr  key={6} />,<p  key={7}>Stupid people have been known to kill what they don't understand. Stupid people didn't realize that all the shitty things are either misunderstandings or scams.</p>],document.getElementById('gifs'),()=>{document.getElementById("gifs").style.display='flex';document.getElementById("gifs").style.backgroundColor="green"});


const y=document.createElement("section");
x.innerHTML+=`<img src="https://mugen.spriteclub.tv/idles/9739.gif " />`;
document.getElementById('main').appendChild(y);

var mx=document.createElement("article");
mx.style.backgroundColor="#bfa";
var yt={'name':'<h1>Aaryan </h1>',blue:45};
  mx.innerHTML+=`sdssada ${yt['name']} ${yt['blue']}`;
document.getElementById('bd').appendChild(mx);


