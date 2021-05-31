const maindiv=document.createElement("div");
maindiv.classList.add("maindiv");
document.querySelector("body").appendChild(maindiv);
 const body=document.createElement("div");
    body.classList.add("bdystyle");
    maindiv.appendChild(body);
    const para=document.createElement("p");
    para.classList.add("para");
    
    const today=new Date();
    para.innerText=today.toLocaleString('default', { weekday: 'short' })+'-'+ today.toLocaleString('default', { month: 'short' })+'-'+today.getDate()+'-'+today.getFullYear();
    body.appendChild(para);
    const head=document.createElement("h1");
    head.classList.add("head");
    head.innerText="The New York Times";
    body.appendChild(head);

const nav=document.createElement("div");
nav.classList.add("container-fluid");

maindiv.appendChild(nav);
const div01=document.createElement("div");
div01.classList.add("navbar","navbar-expand-lg","navbar-light","bg-light");
nav.appendChild(div01);
const nava=document.createElement("a");
nava.classList.add("navbar-brand");
nava.setAttribute('id',"nav");
nava.setAttribute('href',"#");

div01.appendChild(nava);
const navbtn=document.createElement("button");
navbtn.classList.add("navbar-toggler");
navbtn.setAttribute("type","button");
navbtn.setAttribute("data-bs-toggle","collapse");
navbtn.setAttribute("data-bs-target","#navbarNav");
navbtn.setAttribute("aria-controls","navbarNav");
navbtn.setAttribute("aria-expanded","false");
navbtn.setAttribute("aria-label","Toggle navigation");
div01.appendChild(navbtn);
const btnspan=document.createElement("span");
btnspan.classList.add("navbar-toggler-icon");
navbtn.appendChild(btnspan);

const anchordiv=document.createElement("div");
anchordiv.classList.add("collapse","navbar-collapse")
anchordiv.setAttribute('id',"navbarNav");
div01.appendChild(anchordiv);
const navul=document.createElement("ul");
navul.classList.add("navbar-nav","ms-auto");
anchordiv.appendChild(navul);

const li1=document.createElement("li");
li1.classList.add("nav-item");
navul.appendChild(li1);
const nav1=document.createElement("a");
nav1.classList.add("nav-link");
nav1.setAttribute("id","home");
nav1.innerText="HOME";
nav1.setAttribute("href","#");
li1.appendChild(nav1);
const li2=document.createElement("li");
li2.classList.add("nav-item");;
navul.appendChild(li2);
 const nav2=document.createElement("a");
nav2.classList.add("nav-link");
nav2.setAttribute("id","world");
nav2.innerText="WORLD";
nav2.setAttribute("href","#");
li2.appendChild(nav2);
const li3=document.createElement("li");
li3.classList.add("nav-item");
navul.appendChild(li3);
const nav3=document.createElement("a");
nav3.classList.add("nav-link");
nav3.setAttribute("id","politics");
nav3.innerText="POLITICS";
nav3.setAttribute("href","#");
li3.appendChild(nav3);
const li4=document.createElement("li");
li4.classList.add("nav-item");
navul.appendChild(li4);
const nav4=document.createElement("a");
nav4.classList.add("nav-link");
nav4.setAttribute("id","magazine");
nav4.innerText="MAGAZINE";
nav4.setAttribute("href","#");
li4.appendChild(nav4);
const li5=document.createElement("li");
li5.classList.add("nav-item");
navul.appendChild(li5);
const nav5=document.createElement("a");
nav5.classList.add("nav-link");
nav5.setAttribute("id","technology");
nav5.innerText="TECHNOLOGY";
nav5.setAttribute("href","#");
li5.appendChild(nav5);
const li6=document.createElement("li");
li6.classList.add("nav-item");

navul.appendChild(li6);
const nav6=document.createElement("a");
nav6.classList.add("nav-link");
nav6.setAttribute("id","science");
nav6.innerText="SCIENCE";
nav6.setAttribute("href","#");
li6.appendChild(nav6);
const li7=document.createElement("li");
li7.classList.add("nav-item");

navul.appendChild(li7);
const nav7=document.createElement("a");
nav7.classList.add("nav-link");
nav7.setAttribute("id","health");
nav7.innerText="HEALTH";
nav7.setAttribute("href","#");
li7.appendChild(nav7);
const li8=document.createElement("li");
li8.classList.add("nav-item");

navul.appendChild(li8);
const nav8=document.createElement("a");
nav8.classList.add("nav-link");
nav8.setAttribute("id","sports");
nav8.innerHTML="SPORTS";
nav8.setAttribute("href","#");
li8.appendChild(nav8);
const li9=document.createElement("li");
li9.classList.add("nav-item");
navul.appendChild(li9);
const nav9=document.createElement("a");
nav9.classList.add("nav-link");
nav9.setAttribute("id","arts")
nav9.innerHTML="ARTS";
nav9.setAttribute("href","#");
li9.appendChild(nav9);
const li10=document.createElement("li");
li10.classList.add("nav-item");
navul.appendChild(li10);
const nav10=document.createElement("a");
nav10.classList.add("nav-link");
nav10.setAttribute("id","fashion");
nav10.innerText="FASHION";
nav10.setAttribute("href","#");
li10.appendChild(nav10);
const li11=document.createElement("li");
li11.classList.add("nav-item");
navul.appendChild(li11);
const nav11=document.createElement("a");
nav11.classList.add("nav-link");
nav11.setAttribute("id","food");
nav11.innerText="FOOD";
nav11.setAttribute("href","#");
li11.appendChild(nav11);
const li12=document.createElement("li");
li12.classList.add("nav-item");
navul.appendChild(li12);
const nav12=document.createElement("a");
nav12.classList.add("nav-link");
nav12.setAttribute("id","travel")
nav12.innerText="TRAVEL";
nav12.setAttribute("href","");
li12.appendChild(nav12);


 const navlink=document.querySelectorAll(".nav-link");

navlink.forEach((value,i)=>{

   value.addEventListener('click',function(){


          
      const url = `https://api.nytimes.com/svc/topstories/v2/${value.id}.json?api-key=mcAs4PvBbvZKjtkCYSJVDtO2vAV7HOr2`;
      (async ()=>{
       try{
               const data = await fetch(url);
         const datafinal= await data.json();
      
       const fetchdata = datafinal.results;
        fetchdata.forEach((item)=>{
     
           cal(url,item,value);
        
            
         })
      }
         catch(err){
          console.log("error");
       }
    })();
  
  
   })
  })
  


  const mainFunction = async ()=>{
    try{
      const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=mcAs4PvBbvZKjtkCYSJVDtO2vAV7HOr2`;
    
     
      const data = await fetch(url);
      const datafinal = await data.json();
      const fetchdata = datafinal.results;
      fetchdata.forEach((item)=>{
      
        cal(url,item,"Home");
       
      })
    }
      catch(err){
        console.log("error");
      }
  }
  mainFunction();

async function cal(url,item,value){


     fetch(url).then(response => response.json())
    


            const d = new Date();

                
            const card = document.createElement("div");
            card.setAttribute('class',"card inner");
            
            maindiv.appendChild(card);
          
           
        
            const cardBody = document.createElement("div");
            cardBody.setAttribute('class','card-body');
            card.appendChild(cardBody);
            const sec = document.createElement("h2");
            sec.classList.add("section-card");
            sec.innerHTML = value;
            cardBody.appendChild(sec);
            const h1 = document.createElement("h6");
            h1.classList.add("title", "card");
            h1.setAttribute("style","width:70%")
            h1.innerHTML = item.title;
            cardBody.appendChild(h1);
            const day = document.createElement("p");
            day.classList.add("date", "card");
            day.innerHTML = d.toLocaleString('default', { month: 'short' }) + " " + (d.getDate());
            cardBody.appendChild(day);
            const p = document.createElement("p");
            p.classList.add("abstract-card");
            p.setAttribute("style","width:70%")
            p.innerHTML = item.abstract;
            cardBody.appendChild(p);
            const a = document.createElement("a");
            const e = item.url;
            a.setAttribute("href", e);
            a.classList.add("nav-link", "a-link");
            a.innerText = "Continue reading";
            cardBody.appendChild(a);
     
            const img = document.createElement("img");
            img.classList.add("img-thumbnail", "img");
            img.setAttribute("src", item.multimedia[1].url);
           img.setAttribute("style", " width:20%;position:absolute;margin-left:75%");
            cardBody.appendChild(img);
           
          }


      