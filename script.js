const f =document.getElementById("form");
const liste=document.getElementById("liste");
const resultat=document.getElementById("resultat");




const btnAjouter = document.getElementById("btnajout");
const btnListe = document.getElementById("btnlist");
const btnDashboard = document.getElementById("dashboard");





btnAjouter.addEventListener("click", function () {
  f.style.display="block";
  liste.style.display="none";
  resultat.style.display="none";
  
});



btnDashboard.addEventListener("click", function () {
  f.style.display="none";
  liste.style.display="none";
  resultat.style.display="block";
  
 

  const nombre = liste.getElementsByTagName("li").length;

  resultat.textContent = "Le nombre d'inscription est : " + nombre;

});




btnListe.addEventListener("click", function () {
  f.style.display="none";
  liste.style.display="block";
  resultat.style.display="none";
  
   
});





f.addEventListener("submit",function(e){
    e.preventDefault();
    const nom=document.getElementById("user").value;
    const age=document.getElementById("age").value;
    const email=document.getElementById("email").value;
    const identifiant=document.getElementById("password").value;
   const li = document.createElement("li");

li.innerHTML = `
  Nom: ${nom} | 
  Age: ${age} | 
  Email: ${email} | 
  Identifiant: ${identifiant}
  <button type="button" class="supprimer">Supprimer</button>
  <button type="button" class="modifier">Modifier</button>
`;

liste.appendChild(li);


   li.querySelector(".supprimer").addEventListener("click", function() {
    li.remove();
  });
    li.querySelector(".modifier").addEventListener("click", function () {
     f.style.display="block";
        
    document.getElementById("user").value = nom;
    document.getElementById("age").value = age;
    document.getElementById("email").value = email;
    document.getElementById("password").value = identifiant;
    li.remove();
    liste.style.display="none";
  });
  liste.style.display="none";
 
  f.reset();
});
