function render(){
let box=document.getElementById("list");
box.innerHTML="";

products.forEach(p=>{
box.innerHTML+=`
<p>${p.name} - $${p.price}</p>
`;
});
}

function add(){

products.push({
id:Date.now(),
name:document.getElementById("name").value,
price:document.getElementById("price").value,
img:document.getElementById("img").value,
sizes:["S","M","L","XL","XXL"]
});

localStorage.setItem("products",JSON.stringify(products));

render();
}

render();
