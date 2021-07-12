(()=>{"use strict";const n=()=>{const n=document.createElement("div");n.classList.add("background-container");const e=document.createElement("header");n.append(e);const t=document.createElement("h1");e.append(t);const o=document.createElement("span");o.style.color="red",o.innerText="El ",t.append(o);const a=document.createElement("span");a.style.color="white",a.innerText="Gri",t.append(a);const r=document.createElement("span");r.style.color="blue",r.innerText="ngo's ",t.append(r);const c=document.createElement("span");c.style.color="green",c.innerText="MEXI",t.append(c);const i=document.createElement("span");i.style.color="white",i.innerText="CAN ",t.append(i);const d=document.createElement("span");d.style.color="red",d.innerText="Tacos",t.append(d);const s=document.createElement("ul");s.classList.add("tabs"),e.append(s);const l=document.createElement("li");l.classList.add("home"),l.textContent="Home",s.append(l);const m=document.createElement("li");m.textContent="Menu",m.classList.add("menu"),s.append(m);const p=document.createElement("li");p.classList.add("contact"),p.textContent="Contact",s.append(p);const u=document.createElement("div");u.classList.add("foreground-container"),n.append(u);const g=document.createElement("h2");g.textContent="The best tacos north of the border!";const h=document.createElement("h2");h.textContent="¡Los mejores tacos en el otro lado!";const x=document.createElement("img");x.src="/restaurant/images/flags.png",x.alt="an american flag on the left and a mexican flag on the right";const f=document.createElement("p");f.textContent="Visit us all week from 6pm to 2am!";const b=document.createElement("p");b.textContent=" ¡Visítanos lunes a domingo de 6pm a 2am! ",u.append(g,h,x,f,b);const E=document.createElement("footer"),y=document.createElement("span");y.classList.add("copyright"),y.textContent="Copyright © 2021 mattdimicelli",E.append(y),n.append(E);const w=document.createElement("a");w.href="https://github.com/mattdimicelli";const v=document.createElement("img");v.src="/restaurant/images/GitHub-Mark-32px.png",v.alt="github logo",w.append(v),E.append(w),document.querySelector(".background-container").replaceWith(n),document.querySelector("style").innerHTML="\n  * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\np {\n  margin-bottom: 1rem;\n  font-size: 2rem;\n}\n\n.foreground-container h2, p {\n  font-size: 1.7rem;\n  margin-bottom: 1rem;\n}\n\n.background-container {\n  background-image: url('/restaurant/images/taco-plancha.jpg');\n  background-size: cover;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\nheader{\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 20vh;\n  background-color: rgba(0,0,0,0.85);\n  width: 100%;\n}\n\nheader ul.tabs {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  list-style: none;\n}\n\nheader ul.tabs > li {\n  padding: 2rem;\n  font-size: 2.5rem;\n}\n\nheader ul.tabs > li:hover {\n  text-decoration: underline;\n}\n\nheader h1 {\n  font-size: 4rem;\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.foreground-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid red;\n  background-color: rgba(0,0,0,0.60);\n  max-width: 650px;\n  align-items: center;\n  color: white;\n  width: 100vw;\n  text-align: center;\n  padding: 3rem;\n}\n\n.foreground-container img {\n  max-width: 300px;\n  width: 50%;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n\nfooter {\nfont-size: 1.5rem;\nheight: 5vh;\nflex-direction: row;\ncolor: white;\ndisplay: flex;\njustify-content: center;\nbackground-color: rgba(0,0,0,0.60);\nwidth: 100%;\nalign-items: center;\nfont-size: 1.7rem;\n}\n\n.copyright {\n  margin-right: 1rem;\n}\n\n@media only screen and (min-width: 450px) {\n  .foreground-container h2, p {\n      font-size: 2rem;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .foreground-container h2, p {\n      font-size: 2.4rem;\n  }\n}"},e=()=>{const n=document.createElement("div");n.classList.add("background-container");const e=document.createElement("header");n.append(e);const t=document.createElement("h1");e.append(t);const o=document.createElement("span");o.style.color="red",o.innerText="El ",t.append(o);const a=document.createElement("span");a.style.color="white",a.innerText="Gri",t.append(a);const r=document.createElement("span");r.style.color="blue",r.innerText="ngo's ",t.append(r);const c=document.createElement("span");c.style.color="green",c.innerText="MEXI",t.append(c);const i=document.createElement("span");i.style.color="white",i.innerText="CAN ",t.append(i);const d=document.createElement("span");d.style.color="red",d.innerText="Tacos",t.append(d);const s=document.createElement("ul");s.classList.add("tabs"),e.append(s);const l=document.createElement("li");l.classList.add("home"),l.textContent="Home",s.append(l);const m=document.createElement("li");m.textContent="Menu",m.classList.add("menu"),s.append(m);const p=document.createElement("li");p.classList.add("contact"),p.textContent="Contact",s.append(p);const u=document.createElement("div");u.classList.add("foreground-container"),n.append(u);const g=document.createElement("div");g.classList.add("taco"),u.append(g);const h=document.createElement("img");h.src="/restaurant/images/carnitas.jpg",h.alt="carnitas taco",g.append(h);const x=document.createElement("h2");x.textContent="Carnitas",g.append(x);const f=document.createElement("div");f.classList.add("taco"),u.append(f);const b=document.createElement("img");b.alt="chorizo taco",b.src="/restaurant/images/chorizo.jpg";const E=document.createElement("h2");E.textContent="Chorizo",f.append(b,E);const y=document.createElement("div");y.classList.add("taco"),u.append(y);const w=document.createElement("img");w.src="/restaurant/images/suadero.jpg",w.alt="suadero taco";const v=document.createElement("h2");v.textContent="Suadero",y.append(w,v);const L=document.createElement("div");L.classList.add("taco"),u.append(L);const z=document.createElement("img");z.src="/restaurant/images/pollo.jpg",z.alt="pollo taco";const C=document.createElement("h2");C.textContent="Pollo",L.append(z,C);const k=document.createElement("div");k.classList.add("taco"),u.append(k);const T=document.createElement("img");T.src="/restaurant/images/tripa.jpg",z.alt="tripa taco";const j=document.createElement("h2");j.textContent="Tripa",k.append(T,j);const S=document.createElement("div");S.classList.add("taco"),u.append(S);const M=document.createElement("img");M.src="/restaurant/images/al-pastor.jpg",M.alt="al pastor taco";const q=document.createElement("h2");q.textContent="Al Pastor",S.append(M,q);const H=document.createElement("div");H.classList.add("taco"),u.append(H);const A=document.createElement("img");A.src="/restaurant/images/asada.jpg",A.alt="asada taco";const G=document.createElement("h2");G.textContent="Asada",H.append(A,G);const N=document.createElement("div");N.classList.add("taco"),u.append(N);const I=document.createElement("img");I.src="/restaurant/images/buche.png",I.alt="buche taco";const P=document.createElement("h2");P.textContent="Buche",N.append(I,P);const W=document.createElement("footer"),X=document.createElement("span");X.classList.add("copyright"),X.textContent="Copyright © 2021 mattdimicelli",W.append(X),n.append(W);const B=document.createElement("a");B.href="https://github.com/mattdimicelli";const V=document.createElement("img");V.src="/restaurant/images/GitHub-Mark-32px.png",V.alt="github logo",B.append(V),W.append(B),document.querySelector(".background-container").replaceWith(n),document.querySelector("style").innerHTML="     * {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    p {\n        margin-bottom: 1rem;\n        font-size: 2rem;\n    }\n\n    .foreground-container h2, p {\n        font-size: 1.7rem;\n        margin-bottom: 1rem;\n    }\n\n    .background-container {\n        background-image: url('/restaurant/images/taco-plancha.jpg');\n        background-size:cover;\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        z-index: -1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    header{\n        color: white;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n        height: 20vh;\n        background-color: rgba(0,0,0,0.85);\n        width: 100%;\n    }\n\n    header ul.tabs {\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        list-style: none;\n    }\n\n    header ul.tabs > li {\n        padding: 2rem;\n        font-size: 2.5rem;\n    }\n\n    header ul.tabs > li:hover {\n        text-decoration: underline;\n    }\n\n    header h1 {\n        font-size: 4rem;\n        text-align: center;\n        margin-top: 2rem;\n    }\n\n    .foreground-container {\n        display: flex;\n        flex-direction: row;\n        border: 1px solid red;\n        background-color: rgba(0,0,0,0.60);\n        max-width: 800px;\n        align-items: space-evenly;\n        color: white;\n        width: 100vw;\n        text-align: center;\n        padding: 2rem;\n        justify-content: space-evenly;\n        flex-wrap: wrap;\n        margin-bottom: 2rem;\n        margin-top: 2rem;\n    }\n\n    .taco {\n        background-color: rgba(0,0,0,0.60);\n        border: 1px solid green;\n        padding-left: 0;\n        padding-right: 0;\n        margin: 2rem;\n        width: 90%;\n        max-width: 300px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        transition: background 0.25s;\n    }\n\n    .foreground-container img {\n\n        max-width: 500;\n        max-height: 500;\n        width: 150px;\n        height: 150px;\n        object-fit: cover;\n        margin: 3rem;\n        margin-bottom: 1rem;\n        border-radius: 20px;\n    }\n\n    footer {\n      font-size: 1.5rem;\n      height: 5vh;\n      flex-direction: row;\n      color: white;\n      display: flex;\n      justify-content: center;\n      background-color: rgba(0,0,0,0.60);\n      width: 100%;\n      align-items: center;\n      font-size: 1.7rem;\n    }\n\n    .copyright {\n        margin-right: 1rem;\n    }\n\n    .white {\n        background-color: rgba(255, 255, 255, 0.10)\n    }\n\n    @media only screen and (min-width: 450px) {\n        .foreground-container h2, p {\n            font-size: 2rem;\n        }\n    }\n\n    @media only screen and (min-width: 900px) {\n        .foreground-container h2, p {\n            font-size: 2.4rem;\n        }\n    }\n    \n   ";const F=document.querySelectorAll("div.taco");for(let n of F)n.addEventListener("mouseover",O),n.addEventListener("mouseout",D);function O(){this.classList.add("white")}function D(){this.classList.remove("white")}};n();let t=document.querySelector("ul.tabs");t.addEventListener("click",(function o(a){switch(a.target.className){case"home":n(),t=document.querySelector("ul.tabs"),t.addEventListener("click",o);break;case"menu":e(),t=document.querySelector("ul.tabs"),t.addEventListener("click",o);break;case"contact":(()=>{const n=document.createElement("div");n.classList.add("background-container");const e=document.createElement("header");n.append(e);const t=document.createElement("h1");e.append(t);const o=document.createElement("span");o.style.color="red",o.innerText="El ",t.append(o);const a=document.createElement("span");a.style.color="white",a.innerText="Gri",t.append(a);const r=document.createElement("span");r.style.color="blue",r.innerText="ngo's ",t.append(r);const c=document.createElement("span");c.style.color="green",c.innerText="MEXI",t.append(c);const i=document.createElement("span");i.style.color="white",i.innerText="CAN ",t.append(i);const d=document.createElement("span");d.style.color="red",d.innerText="Tacos",t.append(d);const s=document.createElement("ul");s.classList.add("tabs"),e.append(s);const l=document.createElement("li");l.classList.add("home"),l.textContent="Home",s.append(l);const m=document.createElement("li");m.textContent="Menu",m.classList.add("menu"),s.append(m);const p=document.createElement("li");p.classList.add("contact"),p.textContent="Contact",s.append(p);const u=document.createElement("div");u.classList.add("foreground-container"),n.append(u);const g=document.createElement("h2");g.textContent="561-123-3456";const h=document.createElement("span");h.textContent="Phone:",g.prepend(h);const x=document.createElement("h2");x.textContent=" On the beach at the end of S 39th St in Mexico Beach, FL, 32456";const f=document.createElement("span");f.textContent="Address:",x.prepend(f);const b=document.createElement("footer"),E=document.createElement("span");E.classList.add("copyright"),E.textContent="Copyright © 2021 mattdimicelli",b.append(E),n.append(b);const y=document.createElement("a");y.href="https://github.com/mattdimicelli";const w=document.createElement("img");w.src="/restaurant/images/GitHub-Mark-32px.png",w.alt="github logo",y.append(w),b.append(y),document.querySelector(".background-container").replaceWith(n),document.querySelector("style").innerHTML="\n    * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\np {\n    margin-bottom: 1rem;\n    font-size: 2rem;\n}\n\n.foreground-container h2, p {\n    font-size: 1.7rem;\n    margin: 1rem;\n\n}\n\n.foreground-container span {\n    font-size: 2.5rem;\n    margin-right: 1rem;\n}\n\n.background-container {\n    background-image: url('/restaurant/images/taco-plancha.jpg');\n    background-size: cover;\n    height: 100vh;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    z-index: -1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader{\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    height: 20vh;\n    background-color: rgba(0,0,0,0.85);\n    width: 100%;\n}\n\nheader ul.tabs {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    list-style: none;\n}\n\nheader ul.tabs > li {\n    padding: 2rem;\n    font-size: 2.5rem;\n}\n\nheader ul.tabs > li:hover {\n    text-decoration: underline;\n}\n\nheader h1 {\n    font-size: 4rem;\n    text-align: center;\n    margin-top: 2rem;\n}\n\n.foreground-container {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid red;\n    background-color: rgba(0,0,0,0.60);\n    max-width: 570px;\n    align-items: center;\n    color: white;\n    width: 100vw;\n    text-align: center;\n    padding: 2rem 0;\n    margin-bottom: 2rem;\n    margin-top: 2rem;\n}\n\n.foreground-container img {\n    width: 90%;\n    max-width: 600px;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    border: 1px solid green;\n}\n\nfooter {\n  font-size: 1.5rem;\n  height: 5vh;\n  flex-direction: row;\n  color: white;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(0,0,0,0.60);\n  width: 100%;\n  align-items: center;\n  font-size: 1.7rem;\n}\n\n.copyright {\n    margin-right: 1rem;\n}\n\n\n\n@media only screen and (min-width: 450px) {\n    .foreground-container h2, p {\n        font-size: 2rem;\n    }\n}\n\n@media only screen and (min-width: 900px) {\n    .foreground-container h2, p {\n        font-size: 2.4rem;\n    }\n}\n\n\n"})(),t=document.querySelector("ul.tabs"),t.addEventListener("click",o)}}))})();