import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full mt-20 border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-16 md:py-20 max-w-container-max mx-auto">
        <div className="col-span-1">
          <Link href="/" className="font-display-lg text-headline-lg text-primary mb-4 block">
            GreenBasket
          </Link>
          <p className="font-body-md text-on-surface-variant max-w-xs leading-relaxed">
            The premium organic marketplace for the modern family. Quality, intent, and community in every box.
          </p>
        </div>

        <div>
          <h4 className="font-label-md text-on-surface uppercase tracking-wider mb-6">Marketplace</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/shop" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Subscription Boxes
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Wholesale
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Gift Cards
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-on-surface uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/#story" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/#sustainability" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Sustainability Report
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-md">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-md text-on-surface uppercase tracking-wider mb-6">Newsletter</h4>
          <p className="font-body-md text-on-surface-variant mb-4">
            Join our community for seasonal recipes and farm updates.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="email@address.com"
              className="bg-surface border border-outline-variant rounded-xl p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md"
            />
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-xl font-label-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-label-sm text-on-surface-variant">
          © 2026 GreenBasket Organic Marketplace. Sustainably Sourced.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="font-label-sm text-on-surface-variant hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="font-label-sm text-on-surface-variant hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="font-label-sm text-on-surface-variant hover:text-primary">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
