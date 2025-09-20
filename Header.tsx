import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">
            Shakur Atkinson
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block"
          >
            Get In Touch
          </Button>
        </div>
      </nav>
    </header>
  );
}