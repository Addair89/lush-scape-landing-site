import { Leaf, TreePalm, Flower } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Creating Beautiful
              <span className="block text-nature-primary">Landscapes Since 2010</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are passionate about transforming outdoor spaces into stunning, sustainable environments. 
              With over a decade of experience, our team combines artistic vision with horticultural expertise 
              to create landscapes that enhance your property's beauty and value.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From intimate garden designs to large commercial projects, we approach every job with the same 
              commitment to excellence, attention to detail, and respect for the natural environment.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nature-accent rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Sustainable</h3>
                <p className="text-sm text-muted-foreground">Eco-friendly practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nature-accent rounded-full flex items-center justify-center">
                  <TreePalm className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Expert Design</h3>
                <p className="text-sm text-muted-foreground">Professional planning</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-nature-accent rounded-full flex items-center justify-center">
                  <Flower className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Quality Care</h3>
                <p className="text-sm text-muted-foreground">Ongoing maintenance</p>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-soft text-center">
              <div className="text-3xl font-bold text-nature-primary">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft text-center">
              <div className="text-3xl font-bold text-nature-primary">13+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft text-center">
              <div className="text-3xl font-bold text-nature-primary">98%</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft text-center">
              <div className="text-3xl font-bold text-nature-primary">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;