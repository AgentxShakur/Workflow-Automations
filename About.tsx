import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function About() {
  const skills = [
    "Cybersecurity", "Digital Marketing", "History Education", "Islamic Business Ethics",
    "Risk Analysis", "Strategic Planning", "Content Creation", "Research & Analysis",
    "Community Engagement", "Cross-Cultural Communication"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Shakur</h2>
            <p className="text-lg text-muted-foreground">
              A unique blend of technical expertise, educational passion, and entrepreneurial vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With a diverse background spanning cybersecurity, marketing, education, and entrepreneurship, 
                  I bring a unique perspective to every project. My experience as a cyber analyst has taught me 
                  the importance of meticulous attention to detail and strategic thinking.
                </p>
                <p>
                  As a history instructor, I've developed strong communication skills and the ability to make 
                  complex concepts accessible. This educational background, combined with my marketing expertise, 
                  allows me to create compelling narratives that resonate with diverse audiences.
                </p>
                <p>
                  My commitment to Islamic entrepreneurship principles ensures that all my business endeavors 
                  are grounded in ethical practices and community benefit, creating sustainable value for all stakeholders.
                </p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-6 space-y-4">
                  <h5 className="font-medium">Professional Values</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Integrity in all professional dealings
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Continuous learning and adaptation
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Community-focused solutions
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Cultural sensitivity and inclusion
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  );
}