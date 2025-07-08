import { Button } from "@/components/ui/button";
import { Trees, Flower2, Sun } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Trees,
      title: "Landscape Design",
      description: "Custom designs tailored to your space, style, and budget. We create beautiful, functional outdoor environments.",
      features: ["Site Analysis", "3D Renderings", "Plant Selection", "Hardscape Planning"]
    },
    {
      icon: Flower2,
      title: "Garden Installation",
      description: "Professional installation of plants, trees, and garden features with attention to every detail.",
      features: ["Plant Installation", "Irrigation Systems", "Mulching", "Soil Preparation"]
    },
    {
      icon: Sun,
      title: "Maintenance Services",
      description: "Keep your landscape looking its best year-round with our comprehensive maintenance programs.",
      features: ["Lawn Care", "Pruning", "Seasonal Cleanup", "Pest Management"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive landscaping services 
            to transform your outdoor space into a beautiful, functional environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-soft hover:shadow-nature transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mb-6 bg-gradient-nature rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-nature-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="nature" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;