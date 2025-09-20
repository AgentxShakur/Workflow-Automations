import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Shield, TrendingUp, BookOpen, Zap } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1669052700037-db884b37b2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU4MTUwODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Technology background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Shakur</span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground">
                Multi-Disciplinary Professional & Entrepreneur
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
              Cybersecurity expert, digital marketing strategist, passionate history educator, 
              and Islamic entrepreneur. I bring diverse expertise to help organizations and 
              individuals achieve their goals through technology, education, and strategic thinking.
            </p>
            
            {/* Quick highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Cyber Analyst</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm">Marketing Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm">History Instructor</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm">Entrepreneur</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToServices}>
                View Services
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGFuYWx5c3QlMjBob29kaWUlMjBkb3VibGUlMjBtb25pdG9yJTIwc2V0dXB8ZW58MXx8fHwxNzU4MTUxMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cyber Analyst Shakur"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}