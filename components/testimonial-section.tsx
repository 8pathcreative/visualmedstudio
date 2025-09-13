export function TestimonialSection() {
  return (
    <section className="w-full px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/medical-background-pattern.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <blockquote className="text-2xl lg:text-4xl font-sans font-black mb-8 leading-relaxed text-primary-foreground">
          "Vismed Studio is like a rocket boost for our medical education programs! Their sleek 3D visualizations and
          interactive applications make teaching complex anatomy concepts a breeze."
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-accent rounded-full mb-4 flex items-center justify-center">
            <span className="text-accent-foreground font-black text-xl">DR</span>
          </div>
          <div>
            <p className="font-sans font-bold text-lg text-primary-foreground">Dr. Sarah Mitchell</p>
            <p className="text-primary-foreground/80">Chief Medical Educator</p>
          </div>
        </div>
      </div>
    </section>
  )
}
