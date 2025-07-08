const Footer = () => {
  return (
    <footer className="bg-nature-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">GreenScape</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming outdoor spaces with professional landscaping services 
              throughout Western Massachusetts.
            </p>
            <div className="text-sm text-primary-foreground/60">
              Licensed & Insured<br />
              License #MA-12345
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-nature-accent transition-colors">Landscape Design</a></li>
              <li><a href="#" className="hover:text-nature-accent transition-colors">Garden Installation</a></li>
              <li><a href="#" className="hover:text-nature-accent transition-colors">Lawn Maintenance</a></li>
              <li><a href="#" className="hover:text-nature-accent transition-colors">Hardscaping</a></li>
              <li><a href="#" className="hover:text-nature-accent transition-colors">Irrigation Systems</a></li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Springfield</li>
              <li>Westfield</li>
              <li>Northampton</li>
              <li>Holyoke</li>
              <li>Amherst</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>(413) 555-0123</div>
              <div>info@greenscapelandscaping.com</div>
              <div className="text-sm">
                123 Garden Way<br />
                Springfield, MA 01103
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-nature-accent transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-nature-accent transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.81 3.708 13.659 3.708 12.362s.49-2.448 1.297-3.33C5.886 8.152 7.037 7.662 8.334 7.662s2.448.49 3.33 1.297c.881.881 1.371 2.032 1.371 3.329s-.49 2.448-1.297 3.33c-.881.881-2.032 1.371-3.329 1.371zm0-1.371c.784 0 1.469-.294 2.055-.881.587-.587.881-1.271.881-2.055s-.294-1.469-.881-2.055c-.587-.587-1.271-.881-2.055-.881s-1.469.294-2.055.881c-.587.587-.881 1.271-.881 2.055s.294 1.469.881 2.055c.587.587 1.271.881 2.055.881zm7.569 1.371c-1.297 0-2.448-.49-3.33-1.297-.881-.881-1.371-2.032-1.371-3.329s.49-2.448 1.297-3.33c.881-.881 2.032-1.371 3.329-1.371s2.448.49 3.33 1.297c.881.881 1.371 2.032 1.371 3.329s-.49 2.448-1.297 3.33c-.881.881-2.032 1.371-3.329 1.371zm0-1.371c.784 0 1.469-.294 2.055-.881.587-.587.881-1.271.881-2.055s-.294-1.469-.881-2.055c-.587-.587-1.271-.881-2.055-.881s-1.469.294-2.055.881c-.587.587-.881 1.271-.881 2.055s.294 1.469.881 2.055c.587.587 1.271.881 2.055.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 GreenScape Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;