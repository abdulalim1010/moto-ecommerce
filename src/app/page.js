export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">🏍️ MotoGear</h1>
        <p className="mt-4 text-lg">Your one-stop shop for motorcycle parts & accessories</p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold">
          Shop Now
        </button>
      </section>

      {/* Featured Categories */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img src="https://i.ibb.co/6s2tgxH/helmet.jpg" alt="Helmet" className="rounded-md mb-4" />
            <h3 className="font-bold text-lg">Helmets</h3>
            <p className="text-gray-600">Protective and stylish helmets.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img src="https://i.ibb.co/Tv3T0nB/jacket.jpg" alt="Jacket" className="rounded-md mb-4" />
            <h3 className="font-bold text-lg">Jackets</h3>
            <p className="text-gray-600">Durable riding jackets for bikers.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img src="https://i.ibb.co/ZBrkP4y/tires.jpg" alt="Tires" className="rounded-md mb-4" />
            <h3 className="font-bold text-lg">Tires</h3>
            <p className="text-gray-600">High-performance motorcycle tires.</p>
          </div>
        </div>
      </section>
      {/* Features Section */}
<section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
  {/* Left Side - Image */}
  <div>
    <img 
      src="https://i.ibb.co/4PsNdsD/motorbike.jpg" 
      alt="Motorcycle Feature" 
      className="rounded-xl shadow-lg"
    />
  </div>

  {/* Right Side - Text */}
  <div>
    <h2 className="text-3xl font-bold mb-4">Why Choose MotoGear?</h2>
    <p className="text-gray-600 mb-6">
      At MotoGear, we provide top-quality motorcycle parts, accessories, 
      and safety gear. Whether you’re a daily rider or a passionate biker, 
      our products are designed to keep you safe and stylish on the road.
    </p>
    
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-center">
        ✅ Durable and premium quality products
      </li>
      <li className="flex items-center">
        ✅ Affordable prices for every biker
      </li>
      <li className="flex items-center">
        ✅ Fast delivery and secure payments
      </li>
      <li className="flex items-center">
        ✅ 24/7 customer support
      </li>
    </ul>
  </div>
      </section>
      {/* Motorcycle Parts Section */}



      {/* Footer */}
      <footer className="bg-blu text-white py-6 text-center">
        <p>© {new Date().getFullYear()} MotoGear. All rights reserved.</p>
      </footer>
    </main>
  );
}
