const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Westfield, MA",
      text: "GreenScape transformed our backyard into a paradise. The attention to detail and quality of work exceeded our expectations. Our neighbors constantly ask who did our landscaping!",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Springfield, MA",
      text: "Professional, reliable, and creative. They took our overgrown yard and turned it into a beautiful, low-maintenance landscape that we enjoy year-round.",
      rating: 5
    },
    {
      name: "Jennifer Martinez",
      location: "Northampton, MA",
      text: "From the initial design consultation to the final planting, the team was fantastic. They listened to our needs and delivered exactly what we envisioned.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their 
            landscape transformation experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-soft">
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-nature-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;