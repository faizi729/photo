import React from "react";

const products = [
  {
    title: "Photo Magnet",
    price: "₹39",
    image: "https://plus.unsplash.com/premium_photo-1670426501184-82ba207f1cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Hardcover Photobook",
    price: "₹599",
    discountedPrice: "₹359",
    discount: "40% Off",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpZnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Wall Photo Frame",
    price: "₹299",
    discountedPrice: "₹179",
    discount: "40% Off",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Table Frame",
    price: "₹399",
    discountedPrice: "₹259",
    discount: "40% Off",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Retro prints",
    price: "₹15",
    discountedPrice: "₹11",
    discount: "30% Off",
    image: "https://plus.unsplash.com/premium_photo-1674068280156-138373e16bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Canvas Frame",
    price: "₹499",
    discountedPrice: "₹299",
    discount: "40% Off",
    image: "https://images.unsplash.com/photo-1575384043001-f37f48835528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Travel Mug",
    price: "₹399",
    discountedPrice: "₹299",
    discount: "25% Off",
    image: "https://images.unsplash.com/photo-1544639044-4f142ceb6a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpZnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Wooden Frame",
    price: "₹499",
    discountedPrice: "₹349",
    discount: "30% Off",
    image: "https://plus.unsplash.com/premium_photo-1670426501184-82ba207f1cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpZnR8ZW58MHx8MHx8fDA%3D",
  },
];

const ProductCard = ({ title, price, discountedPrice, discount, image }) => (
  <div className="border rounded shadow-md p-2 mr-5 h-[400px] hover:scale-105 cursor-pointer transition duration-300 w-[300px] relative bg-white">
    {discount && (
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
        {discount}
      </div>
    )}
    <img src={image} alt={title} className="w-full h-[300px] object-cover mb-2" />
    <h3 className="text-sm font-medium">{title}</h3>
    <div className="text-sm">
      {discountedPrice ? (
        <>
          <span className="line-through text-gray-500">{price}</span>{" "}
          <span className="text-green-600 font-semibold">{discountedPrice}</span>
        </>
      ) : (
        <span className="text-black">{price}</span>
      )}
    </div>
  </div>
);

const ProductGrid = () => (
  <div className="p-4 mt-20 flex justify-center flex-col mb-10">
    <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 ml-5 sm:gap-10">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  </div>
);

export default ProductGrid;
