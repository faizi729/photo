import React from "react";
import img from "../assets/logo4.png"; // Your company logo

const products = [
  {
    title: "Photo Magnet",
    price: "₹39",
    image:
      "https://plus.unsplash.com/premium_photo-1670426501184-82ba207f1cb6?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Hardcover Photobook",
    price: "₹599",
    discountedPrice: "₹359",
    discount: "40% Off",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Wall Photo Frame",
    price: "₹299",
    discountedPrice: "₹179",
    discount: "40% Off",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Table Frame",
    price: "₹399",
    discountedPrice: "₹259",
    discount: "40% Off",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Retro prints",
    price: "₹15",
    discountedPrice: "₹11",
    discount: "30% Off",
    image:
      "https://plus.unsplash.com/premium_photo-1674068280156-138373e16bbd?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Canvas Frame",
    price: "₹499",
    discountedPrice: "₹299",
    discount: "40% Off",
    image:
      "https://images.unsplash.com/photo-1575384043001-f37f48835528?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Travel Mug",
    price: "₹399",
    discountedPrice: "₹299",
    discount: "25% Off",
    image:
      "https://images.unsplash.com/photo-1544639044-4f142ceb6a2b?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Wooden Frame",
    price: "₹499",
    discountedPrice: "₹349",
    discount: "30% Off",
    image:
      "https://plus.unsplash.com/premium_photo-1670426501184-82ba207f1cb6?w=500&auto=format&fit=crop&q=60",
  },
];

// Load Razorpay SDK script
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

// Handle Razorpay payment
const displayRazorpay = async (price) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load.");
    return;
  }

  const amount = parseInt(price.replace("₹", ""))  ; // Convert ₹ to paise

  try {
    const response = await fetch("https://photo-n1fe.onrender.com/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    if (!data.id) {
      alert("Order creation failed. Please try again.");
      return;
    }

    const options = {
      key: "rzp_test_WcGyN97AYAiHPE",
      amount,
      currency: data.currency,
      name: "Eye Imagination",
      description: "Best E-invitation provider",
      image: img,
      order_id: data.id,
      callback_url: "https://photo-n1fe.onrender.com/verify-payment",
      notes: {
        address: "Raipur",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong. Try again later.");
  }
};

const ProductCard = ({ title, price, discountedPrice, discount, image }) => (
  <div className="border rounded shadow-md p-2 mr-5 h-[410px] hover:scale-105 cursor-pointer transition duration-300 w-[300px] relative bg-white">
    {discount && (
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
        {discount}
      </div>
    )}
    <img
      src={image}
      alt={title}
      className="w-full h-[300px] object-cover mb-2"
    />
    <h3 className="text-sm font-medium">{title}</h3>
    <div className="text-sm">
      {discountedPrice ? (
        <>
          <span className="line-through text-gray-500">{price}</span>{" "}
          <span className="text-green-600 font-semibold">
            {discountedPrice}
          </span>
        </>
      ) : (
        <span className="text-black">{price}</span>
      )}
    </div>
    <div  onClick={() => displayRazorpay(discountedPrice || price)} className="px-7 cursor-pointer hover:bg-blue-700 transition duration-300 py-2 flex justify-center bg-blue-400 mt-2 rounded">
      <button
        onClick={() => displayRazorpay(discountedPrice || price)}
        className="text-white font-semibold"
      >
        Shop Now
      </button>
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
