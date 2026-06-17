let products = JSON.parse(localStorage.getItem("products")) || [
{
id:1,
name:"KHATT BLACK TEE",
price:15,
img:"https://picsum.photos/600?1",
desc:"Premium streetwear oversized tee",
sizes:["S","M","L","XL","XXL"]
},
{
id:2,
name:"KHATT HOODIE",
price:35,
img:"https://picsum.photos/600?2",
desc:"Heavy oversized hoodie streetwear",
sizes:["S","M","L","XL","XXL"]
}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
