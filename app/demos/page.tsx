import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

const Demo3DViewer = dynamic(() => import("@/components/3d-demo-viewer"), { ssr: false })

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Interactive 3D Demos
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Experience the power of our 3D visualization technology firsthand.
            These demos showcase the clarity, detail, and interactivity of our
            medical models.
          </p>
        </div>
      </section>
      {/* Demo Viewer Section */}
      <main className="py-16 sm:py-24">
        <div className="container">
          <Demo3DViewer />
        </div>
      </main>
      <Footer />
    </div>
  );
}
