"use client";

import Image from 'next/image';

export default function ProductPage() {
  const products = [
    {
      name: "Fresh Shrimp",
      description: "Premium, sustainably sourced shrimp, perfect for grilling or sautéing.",
      price: "$29.99",
      originalPrice: "$34.99",
      image: "/assets/Meet/meet1.jpg",
      alt: "Fresh shrimp on ice"
    },
    {
      name: "Blue Crab",
      description: "Freshly caught blue crab, ideal for steaming or crab boils.",
      price: "$39.99",
      originalPrice: "$44.99",
      image: "/assets/Meet/meet2.jpg",
      alt: "Fresh blue crab"
    },
    {
      name: "Pure Honey",
      description: "Organic, raw honey harvested from local beehives, rich in flavor.",
      price: "$19.99",
      originalPrice: "$24.99",
      image: "/assets/Meet/meet3.jpg",
      alt: "Jar of pure honey"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-600">
          Our Premium Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl group"
            >
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-gray-400 line-through ml-3 text-sm">{product.originalPrice}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                  Add to Cart
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Premium
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}