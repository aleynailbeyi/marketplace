# marketplace

Kullanılan Teknolojiler: 
- NodeJS
- ExpressJS
- PostgreSQL

## Tables: 

- Customer
- Orders
- Products
- Order_Products

![a picture of bill](./postgres.png)

##### GET

` "/customer" : customerları getirir`
` "/products" : ürünleri getirir`
` "/orders" : siparişleri getirir`
` "/orders/:id" : id ye göre siparişleri getirir`
` "order_products" : order tablosuyla product tablosunu joinleyip getirir`

##### POST

` "/products" : ürün ekler`

##### PUT

` "/products" : ürün günceller`

##### DELETE

` "/products" : ürün siler`