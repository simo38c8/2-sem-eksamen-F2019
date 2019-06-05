window.addEventListener("load", sidenVises);
        function sidenVises() {
            console.log("siden vises");
            //klik på topmenu-knap
            document.querySelector("#menuknap").addEventListener("click", kryds);
            document.querySelector("#menuknap").addEventListener("click", toggletopmenu);
            
            

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