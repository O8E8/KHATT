let id=new URLSearchParams(window.location.search).get("id");

let p=products.find(x=>x.id==id);

document.getElementById("product").innerHTML=`
<div class="card">

<img src="${p.img}">
<h1>${p.name}</h1>
<p>${p.desc}</p>
<h2>$${p.price}</h2>

<label>Size:</label>
<select id="size">
${p.sizes.map(s=>`<option>${s}</option>`).join("")}
</select>

<button onclick="addCart()">Add to Cart</button>
<button onclick="buyNow()">BUY NOW</button>

</div>
`;

function addCart(){
let size=document.getElementById("size").value;

cart.push({id:p.id,qty:1,size});
localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");
}

function buyNow(){
let size=document.getElementById("size").value;

let msg=`🔥 BUY NOW KHATT\n\n${p.name}\nSize: ${size}\nPrice: ${p.price}`;

let url="https://wa.me/201276136180?text="+encodeURIComponent(msg);

window.open(url,"_blank");
}
