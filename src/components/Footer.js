export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">🏍️ MotoGear</h1>
          <p className="text-gray-400">Your one-stop motorcycle store</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-red-500 transition">Home</a>
          <a href="/products" className="hover:text-red-500 transition">Products</a>
          <a href="/cart" className="hover:text-red-500 transition">Cart</a>
          <a href="/auth/login" className="hover:text-red-500 transition">Login</a>
        </div>

        {/* Socials */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-red-500 transition">🐦 Twitter</a>
          <a href="#" className="hover:text-red-500 transition">📘 Facebook</a>
          <a href="#" className="hover:text-red-500 transition">📸 Instagram</a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MotoGear. All rights reserved.
      </div>
    </footer>
  );
}
