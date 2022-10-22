


document.getElementById("captar-nombre").addEventListener("submit", function (e){
        
         const name = document.getElementById("name-form").value
        const url = `http://localhost:5000/bienvenida?nombre=${name}`;
        fetch(url).then(res => res.json()).then((data)=>console.log(data));
        e.preventDefault()
       
       

})
function saludo(e){
    const name = document.getElementById("name-form").value
    const url = `http://localhost:5000/bienvenida?nombre=${name}`;
    fetch(url).then(res => res.json()).then((data)=>document.getElementById("saludo").innerHTML += `<h1>${data}</h1>`); 
    e.preventDefault()

}