import React from 'react';
import { products } from '../data/productData';
import { ShoppingBasket, Download } from 'lucide-react';

const Demo = () => {
  const demoProducts = products.slice(0, 4);

  return (
    <div className="px-4 py-8">
      <div className="mt-20 flex justify-center">
        <div className="grid gap-20 mb-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {demoProducts.map((product) => (
            <div
              key={product.id}
              className="w-[300px] h-[520px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <video
                src={product.video}
                autoPlay
                loop
                muted
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>

                <div className="mt-4 justify-center flex gap-2">
                  {/* Download Button */}
                  <a
                    href={product.video}
                    download
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
