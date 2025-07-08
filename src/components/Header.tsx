import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-nature rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GreenScape</h1>
              <p className="text-sm text-muted-foreground">Landscaping</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-foreground hover:text-nature-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-nature-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-foreground hover:text-nature-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-nature-primary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;