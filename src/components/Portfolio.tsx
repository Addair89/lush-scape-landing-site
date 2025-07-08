import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolio1,
      title: "Modern Backyard Oasis",
      description: "Complete backyard transformation with outdoor living space and water features"
    },
    {
      image: portfolio2,
      title: "Front Yard Curb Appeal",
      description: "Elegant front landscape design that enhances home's architectural beauty"
    },
    {
      image: portfolio3,
      title: "Commercial Landscape",
      description: "Professional corporate landscaping with sophisticated plant arrangements"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of our recent landscape transformations that showcase our expertise 
            in creating beautiful, sustainable outdoor environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-nature transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-primary-foreground p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work? Browse our complete portfolio.
          </p>
          <button className="text-nature-primary hover:text-nature-accent font-semibold hover:underline transition-colors">
            View Full Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;