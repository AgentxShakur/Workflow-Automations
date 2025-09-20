import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:Shakur.Atkinson@pursuit.org";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    // For now, we'll just redirect to email
    handleEmailClick();
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              Ready to collaborate? I'd love to hear about your project and discuss how I can help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you need cybersecurity consulting, marketing strategy, educational services, 
                  or business guidance, I'm here to help. Let's discuss your needs and explore how 
                  we can work together.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href="mailto:Shakur.Atkinson@pursuit.org"
                      className="text-primary hover:underline"
                    >
                      Shakur.Atkinson@pursuit.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">Available upon request</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Available for remote and on-site work</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium mb-3">Areas of Expertise</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Cybersecurity Analysis & Risk Assessment</div>
                  <div>• Digital Marketing & Brand Strategy</div>
                  <div>• Educational Program Development</div>
                  <div>• Islamic Business Ethics & Entrepreneurship</div>
                  <div>• Strategic Planning & Consulting</div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can I help you?" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  );
}