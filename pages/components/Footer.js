export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold">Anil Packer and Movers</h2>
          <p className="text-gray-300 mt-3 text-sm">
            Reliable and fast packing & moving services across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-orange-400 transition"><a href="/">Home</a></li>
            <li className="hover:text-orange-400 transition"><a href="/reviews">Reviews</a></li>
            <li className="hover:text-orange-400 transition"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 India, Hyderabad</li>
            <li>📞 +91 9573795650</li>
            <li>✉️ connectsupport@anilpackerandmovers.com</li>
          </ul>
        </div>
      </div>

      {/* bottom line */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2010 Anil Packer and Movers. All rights reserved.
      </div>
    </footer>
  );
}
