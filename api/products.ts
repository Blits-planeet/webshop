export default function handler(req,res){

res.status(200).json([

{
name:"Product One",
price:29,
image:"https://picsum.photos/400"
},

{
name:"Product Two",
price:49,
image:"https://picsum.photos/401"
},

{
name:"Product Three",
price:79,
image:"https://picsum.photos/402"
}

])

}
