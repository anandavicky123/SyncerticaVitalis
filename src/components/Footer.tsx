import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                <i className="fas fa-heartbeat text-white"></i>
              </div>
              <h3 className="text-xl font-bold">Syncertica Vitalis</h3>
            </div>
            <p className="text-blue-200 mb-4">Integrating AI and healthcare for better patient outcomes.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/footer/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/footer/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/footer/security" className="hover:text-white">Security</Link></li>
              <li><Link href="/footer/api" className="hover:text-white">API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/footer/about" className="hover:text-white">About Us</Link></li>
              <li><span className="hover:text-white cursor-help" title="Coming Soon!">Careers</span></li>
              <li><span className="hover:text-white cursor-help" title="Coming Soon!">Press</span></li>
              <li><span className="hover:text-white cursor-help" title="Coming Soon!">Blog</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/footer/help" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/footer/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/footer/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/footer/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-sm text-blue-300 text-center">
          <p>© 2025 Syncertica Vitalis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}