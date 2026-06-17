function render(){
let box=document.getElementById("products");
box.innerHTML="";

products.forEach(p=>{
box.innerHTML+=`
<div class="card">
<a href="product.html?id=${p.id}">
<img src="${p.img}">
</a>

<h3>${p.name}</h3>
<p>$${p.price}</p>

<button onclick="add(${p.id})">Add to Cart</button>
</div>
`;
});
}

function add(id){
let item=cart.find(i=>i.id===id);
if(item) item.qty++;
else cart.push({id,qty:1,size:"M"});

update();
}

function update(){
localStorage.setItem("cart",JSON.stringify(cart));

document.getElementById("count").innerText=
cart.reduce((a,b)=>a+b.qty,0);

let box=document.getElementById("cartItems");
box.innerHTML="";

cart.forEach(i=>{
let p=products.find(x=>x.id===i.id);
box.innerHTML+=`
<p>${p.name} (${i.size}) x${i.qty}</p>
`;
});
}

function toggleCart(){
document.getElementById("cart").classList.toggle("open");
}

function openCheckout(){
document.getElementById("checkout").style.display="flex";
}

function placeOrder(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let city=document.getElementById("city").value;
let street=document.getElementById("street").value;
let building=document.getElementById("building").value;

if(!name||!phone||!street){
alert("Fill all fields");
return;
}

let msg="🔥 KHATT NEW ORDER\n\n";

cart.forEach(i=>{
let p=products.find(x=>x.id===i.id);
msg+=`${p.name} (${i.size}) x${i.qty}\n`;
});

msg+=`\nName: ${name}\nPhone: ${phone}\nCity: ${city}\nStreet: ${street} ${building}`;

let url="https://wa.me/201276136180?text="+encodeURIComponent(msg);

window.open(url,"_blank");

cart=[];
update();
document.getElementById("checkout").style.display="none";
}

render();
update();
