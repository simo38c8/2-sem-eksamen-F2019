window.addEventListener("load", sidenVises);
        function sidenVises() {
            console.log("siden vises");
            //klik på topmenu-knap
            document.querySelector("#menuknap").addEventListener("click", kryds);
            document.querySelector("#menuknap").addEventListener("click", toggletopmenu);
            document.querySelector("#dropdownmobil").addEventListener("click", toggledropdown);
            document.querySelector("#dropdownmobil2").addEventListener("click", toggledropdown2);
            document.querySelector("#dropdownmobil3").addEventListener("click", toggledropdown3);
            

} /*Denne funktion sætte eventlistener på navigastionsbaren og bekræfter vinduet bliver loadet korrekt.*/

        function toggletopmenu() {
            console.log("toggle topmenu");
          document.querySelector("#topmenu").classList.toggle("hidden");

        } /*Her bliver burgermenuen tooglet fra og til*/

    
function kryds(){
    console.log("funktion kryds virker");
    let element = document.getElementById("menuknap");
    element.classList.toggle("change");
}


         function toggledropdown() {
             
console.log("funktion toggledropdown1 virker");
              
  let work = document.getElementById("dropdown-contentmobil");
        
             
  if (work.style.display === "block") {
    work.style.display = "none";
  } else {
    work.style.display = "block";
      document.getElementById("dropdown-contentmobil2").style.display = "none";
      document.getElementById("dropdown-contentmobil3").style.display = "none";
          
}
   
  }


    function toggledropdown2() {
             
console.log("funktion toggledropdown2 virker");
              
  let about = document.getElementById("dropdown-contentmobil2");
        
             
  if (about.style.display === "block") {
    about.style.display = "none";
  } else {
    about.style.display = "block";
      document.getElementById("dropdown-contentmobil").style.display = "none";
      document.getElementById("dropdown-contentmobil3").style.display = "none";
    
          
}
   
  }

    function toggledropdown3() {
             
console.log("funktion toggledropdown3 virker");
              
  let news = document.getElementById("dropdown-contentmobil3");
        
             
  if (news.style.display === "block") {
    news.style.display = "none";
  } else {
    news.style.display = "block";
      document.getElementById("dropdown-contentmobil").style.display = "none";
      document.getElementById("dropdown-contentmobil2").style.display = "none";
          
}
   
  }







