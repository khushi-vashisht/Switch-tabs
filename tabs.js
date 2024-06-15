const tabs=document.querySelector(".tabs");
const btns=document.querySelectorAll(".btn");
const articles=document.querySelectorAll(".content");
tabs.addEventListener("click",(event)=>{
    const id=event.target.dataset.id;

    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("live");
        });
        event.target.classList.add("live");

        articles.forEach((article)=>{
            article.classList.remove("live");
        });

        const element=document.getElementById(id);
        element.classList.add("live");
        if(element.id=="step1"){
            const im=document.querySelector("img");
            im.src="https://images.unsplash.com/photo-1609114215005-d2a87febd22b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhdGl0dWRlfGVufDB8fDB8fHww";
        }
        if(element.id=="step2"){
            const im=document.querySelector("img");
            im.src="https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hbHN8ZW58MHx8MHx8fDA%3D";
        }
        if(element.id=="step3"){
            const im=document.querySelector("img");
            im.src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D";
        }
    }
});