import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">✈</span>
              </div>
              <span className="font-bold text-lg text-foreground">BookAir</span>
            </div>
            <p className="text-foreground/60 text-sm">Find the best flights at the best prices</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; {currentYear} BookAir. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
