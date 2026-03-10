export default async function handler(req,res){

const {name,price}=req.body

const stripeKey=process.env.STRIPE_SECRET_KEY

const r = await fetch("https://api.stripe.com/v1/checkout/sessions",{

method:"POST",

headers:{
Authorization:`Bearer ${stripeKey}`,
"Content-Type":"application/x-www-form-urlencoded"
},

body:new URLSearchParams({

mode:"payment",

success_url:"https://example.com",

cancel_url:"https://example.com",

"line_items[0][price_data][currency]":"eur",

"line_items[0][price_data][product_data][name]":name,

"line_items[0][price_data][unit_amount]":price*100,

"line_items[0][quantity]":"1"

})

})

const data=await r.json()

res.status(200).json({url:data.url})

}
