import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Shield, TrendingUp, BookOpen, Zap, Lock, BarChart3, Users, Globe } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Analysis",
      description: "Comprehensive security assessments, threat analysis, and risk management strategies to protect your digital assets.",
      features: ["Vulnerability Assessments", "Incident Response", "Security Audits", "Risk Analysis"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your brand, increase visibility, and drive meaningful engagement.",
      features: ["Campaign Strategy", "Social Media Marketing", "Content Creation", "Analytics & Optimization"]
    },
    {
      icon: BookOpen,
      title: "History Education",
      description: "Engaging historical instruction and curriculum development with a focus on critical thinking and cultural understanding.",
      features: ["Curriculum Design", "Educational Consulting", "Historical Research", "Cultural Analysis"]
    },
    {
      icon: Zap,
      title: "Islamic Entrepreneurship",
      description: "Business consulting and development guided by Islamic principles and ethical entrepreneurship practices.",
      features: ["Business Strategy", "Ethical Consulting", "Startup Guidance", "Community Development"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging diverse professional experience to deliver comprehensive solutions 
            across cybersecurity, marketing, education, and ethical business practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}