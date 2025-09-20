import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shakur Atkinson</h3>
            <p className="text-sm text-muted-foreground">
              Multi-disciplinary professional offering expertise in cybersecurity, 
              marketing, education, and ethical entrepreneurship.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Cybersecurity Analysis</div>
              <div>Digital Marketing</div>
              <div>History Education</div>
              <div>Islamic Entrepreneurship</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Shakur.Atkinson@pursuit.org</div>
              <div>Available for remote work</div>
              <div>Professional consultations</div>
            </div>
          </div>
          
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © 2024 Shakur Atkinson. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Built with integrity and purpose.
          </div>
        </div>
      </div>
    </footer>
  );
}