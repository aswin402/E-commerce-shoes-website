# To add data to the database

## DATAs

db.products.insertMany([
  // ===== BROKEN SERIES =====
  { name: "broken-brown-white", brand: "broken", price: 249, image: "/images/broken-brown-white.png" },
  { name: "broken-brown", brand: "broken", price: 199, image: "/images/broken-brown.png" },
  { name: "broken-dim-blue", brand: "broken", price: 229, image: "/images/broken-dim-blue.png" },
  { name: "broken-green", brand: "broken", price: 279, image: "/images/broken-green.png" },
  { name: "broken-mixed-white", brand: "broken", price: 259, image: "/images/broken-mixed-white.png" },
  { name: "broken-mixed", brand: "broken", price: 249, image: "/images/broken-mixed.png" },
  { name: "broken-white", brand: "broken", price: 199, image: "/images/broken-white.png" },

  // ===== DUTCH SERIES =====
  { name: "dutch-black", brand: "dutch", price: 299, image: "/images/dutch-black.png" },
  { name: "dutch-blue", brand: "dutch", price: 279, image: "/images/dutch-blue.png" },
  { name: "dutch-dim-blue", brand: "dutch", price: 249, image: "/images/dutch-dim-blue.png" },
  { name: "dutch-dim-blue1", brand: "dutch", price: 239, image: "/images/dutch-dim-blue1.png" },
  { name: "dutch-dim-brown", brand: "dutch", price: 259, image: "/images/dutch-dim-brown.png" },
  { name: "dutch-grey", brand: "dutch", price: 299, image: "/images/dutch-grey.png" },
  { name: "dutch-pitch-grey", brand: "dutch", price: 329, image: "/images/dutch-pitch-grey.png" },
  { name: "dutch-super-blue", brand: "dutch", price: 349, image: "/images/dutch-super-blue.png" },
  { name: "dutch-yellow", brand: "dutch", price: 279, image: "/images/dutch-yellow.png" },

  // ===== FASHON SERIES =====
  { name: "fashon-shoes-sneakers", brand: "fashon", price: 199, image: "/images/fashon-shoes-sneakers.jpg" },
  { name: "fashon-black", brand: "fashon", price: 149, image: "/images/fashon-black.png" },
  { name: "fashon-black1", brand: "fashon", price: 159, image: "/images/fashon-black1.png" },
  { name: "fashon-blue", brand: "fashon", price: 169, image: "/images/fashon-blue.png" },
  { name: "fashon-brown", brand: "fashon", price: 179, image: "/images/fashon-brown.png" },
  { name: "fashon-grey", brand: "fashon", price: 189, image: "/images/fashon-grey.png" },
  { name: "fashon-grey1", brand: "fashon", price: 199, image: "/images/fashon-grey1.png" },
  { name: "fashon-h", brand: "fashon", price: 149, image: "/images/fashon-h.png" },
  { name: "fashon-olive", brand: "fashon", price: 189, image: "/images/fashon-olive.png" },
  { name: "fashon-olive1", brand: "fashon", price: 199, image: "/images/fashon-olive1.png" },
  { name: "fashon-pitch-purple", brand: "fashon", price: 229, image: "/images/fashon-pitch-purple.png" },
  { name: "fashon-purple", brand: "fashon", price: 219, image: "/images/fashon-purple.png" },
  { name: "fashon-red", brand: "fashon", price: 249, image: "/images/fashon-red.jpg" },

  // ===== GRIZZLY SERIES =====
  { name: "grizzly-black", brand: "grizzly", price: 299, image: "/images/grizzly-black.png" },
  { name: "grizzly-brown", brand: "grizzly", price: 279, image: "/images/grizzly-brown.png" },
  { name: "grizzly-dim-greeb-ol", brand: "grizzly", price: 259, image: "/images/grizzly-dim-greeb-ol.png" },
  { name: "grizzly-dim-green", brand: "grizzly", price: 269, image: "/images/grizzly-dim-green.png" },
  { name: "grizzly-dim-pink", brand: "grizzly", price: 239, image: "/images/grizzly-dim-pink.png" },
  { name: "grizzly-dim-pink1", brand: "grizzly", price: 229, image: "/images/grizzly-dim-pink1.png" },
  { name: "grizzly-dim-rose", brand: "grizzly", price: 259, image: "/images/grizzly-dim-rose.png" },
  { name: "grizzly-purple", brand: "grizzly", price: 289, image: "/images/grizzly-purple.png" },

  // ===== OTHER IMAGES =====
  { name: "hamza-nousraja", brand: "hamza", price: 149, image: "/images/hamza-nousraja.jpg" },
  { name: "hamza", brand: "hamza", price: 159, image: "/images/hamza.jpg" },

  // ===== SECOND SCREENSHOT =====
  { name: "hipkicks", brand: "hipkicks", price: 299, image: "/images/hipkicks.jpg" },
  { name: "nike-black-white", brand: "nike", price: 399, image: "/images/nike-black-white.jpg" },
  { name: "omar-prestwich", brand: "omar", price: 199, image: "/images/omar-prestwich.jpg" },
  { name: "peri-stojnic", brand: "peri", price: 189, image: "/images/peri-stojnic.jpg" },
  { name: "splash", brand: "splash", price: 149, image: "/images/splash.jpg" },

  { name: "trendzz-blue", brand: "trendzz", price: 269, image: "/images/trendzz-blue.png" },
  { name: "trendzz-brown", brand: "trendzz", price: 259, image: "/images/trendzz-brown.png" },
  { name: "trendzz-dark-brown", brand: "trendzz", price: 279, image: "/images/trendzz-dark-brown.png" },
  { name: "trendzz-grey", brand: "trendzz", price: 239, image: "/images/trendzz-grey.png" },
  { name: "trendzz-olive", brand: "trendzz", price: 259, image: "/images/trendzz-olive.png" },
  { name: "trendzz-red", brand: "trendzz", price: 299, image: "/images/trendzz-red.png" },
  { name: "trendzz-wheat", brand: "trendzz", price: 279, image: "/images/trendzz-wheat.png" },

  { name: "trendzz", brand: "trendzz", price: 299, image: "/images/trendzz.jpg" },
  { name: "white-sneakers", brand: "hansum", price: 99,  image: "/images/white-sneakers.jpg" }
])

use mongosh shell || postman || compass

recomended use of postman or mongosh shell because it is easier and faster for this project

i have used mongosh shell to insert all these datas into my database

1. open your terminal in the backend folder
2. type `mongosh`
3. connect to your database by typing `use ecommershoes` (or whatever you named your database)
4. copy paste the code above into the terminal and press enter
5. if everything went well, you should see a message saying that all documents were inserted successfully