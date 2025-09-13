import { Card, CardContent } from "@/components/ui/card"

export function VisibilitySection() {
  return (
    <section className="w-full px-4 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-sans font-black text-foreground mb-6">
              Complete Medical <span className="text-accent">Visualization</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get complete visibility into your medical education projects and track progress. Easily track anatomy
              models, educational modules, and team performance in a single, unified dashboard that brings real-time
              project tracking.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <img
                  src="/medical-dashboard.png"
                  alt="Medical Visualization Dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-lg">
              Real-time Analytics
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
