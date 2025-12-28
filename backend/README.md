# A Shoes E-commerce REST API with:

* Bun runtime

* Hono framework

* In-memory data (no DB for now)

* CRUD APIs for shoes

## Run the app locally

clone the repo and run `bun start` in your terminal.

# setup 

1. clone this repository 
2. cd into backend folder
3. install dependencies using npm i or yarn add
4. create a .env file and copy paste the content of sample.env to it.
5. run bun dev command 


```E-commerce-shoes-website\cd backend```

### intall dependencies 

```npm i``` or ```bun install```

1️⃣ Install Bun (if not installed)

```bash
curl -fsSL https://bun.sh/install | bash
```
check: 
```bun --version```

3️⃣ Install Hono

```bash
bun add hono mongoose 
```

4️⃣ Project Structure (Clean & Simple)
src/
├── server.ts
├── db/
│   └── db.ts
├── models/
│   └── products.ts
├── routes/
│   └── productRoute.ts
├── controllers/
│   └── productController.ts
├── services/
│   └── productService.ts
├── config/
│   └── env.ts




5️⃣ Main Server (src/server.ts)

### run server 

```bun run src/index.ts``` or ```bun start```

## Why Bun + Hono is Perfect for This
Feature	Why
Bun	Ultra-fast runtime
Hono	Minimal, clean API
TypeScript	Safe & scalable
Simple structure	Easy to extend

## Why use config file instead of using dotenv everywhere?

dotenv loads variables
config organizes variables

## Why process.env.MONGO_URI! — what does ! mean?

The ! is called the Non-Null Assertion Operator.

Meaning:

“I promise TypeScript this value is NOT undefined or null.”

## Where is server.listen() or Bun.serve()?
Short answer:

Hono does NOT call listen()
Bun automatically does it

# Clean Architecture for Hono + MongoDB

We split into:

routes  → only URL mapping
controllers → request logic
services → database logic
models → schema

## working 

Routes → Controllers → Services → Models

## Request Flow Diagram
Client
  ↓
Route (/api/shoes)
  ↓
Controller (shoe.controller.ts)
  ↓
Service (shoe.service.ts)
  ↓
Model (Shoe.ts)
  ↓
MongoDB


in browser if u go to http://localhost:3000/api/productss you can see all the shoes available in our store