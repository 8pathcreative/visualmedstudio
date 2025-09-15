import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Palette, Code, Cloud, Monitor, Zap, Shield, Globe, Layers, Settings } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const technologyCategories = {
  "3d-modeling": {
    title: "3D Modeling & Animation",
    icon: Palette,
    description: "Industry-leading software for creating photorealistic medical visualizations",
    technologies: [
      {
        name: "Cinema 4D",
        description: "Professional 3D modeling, animation, and rendering",
        use_case: "Complex anatomical modeling and medical animations",
        logo: "/cinema4d-logo.jpg",
      },
      {
        name: "Blender",
        description: "Open-source 3D creation suite with advanced rendering",
        use_case: "Detailed organ modeling and surgical simulations",
        logo: "/blender-logo.png",
      },
      {
        name: "Maya",
        description: "Advanced 3D animation and modeling software",
        use_case: "Character rigging and biomechanical animations",
        logo: "/maya-logo.jpg",
      },
      {
        name: "ZBrush",
        description: "Digital sculpting and painting software",
        use_case: "High-detail anatomical sculpting and texturing",
        logo: "/zbrush-logo.jpg",
      },
    ],
  },
  "web-development": {
    title: "Web Development",
    icon: Code,
    description: "Modern frameworks and technologies for interactive medical applications",
    technologies: [
      {
        name: "Next.js",
        description: "React framework for production-ready applications",
        use_case: "Interactive medical education platforms",
        logo: "/nextjs-logo.jpg",
      },
      {
        name: "React Three Fiber",
        description: "React renderer for Three.js 3D graphics",
        use_case: "Interactive 3D medical models in browsers",
        logo: "/react-three-fiber-logo.jpg",
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for scalable applications",
        use_case: "Type-safe medical data handling and APIs",
        logo: "/typescript-logo.png",
      },
      {
        name: "WebGL",
        description: "Hardware-accelerated 3D graphics in browsers",
        use_case: "Real-time 3D medical visualizations",
        logo: "/webgl-logo.png",
      },
    ],
  },
  "cloud-infrastructure": {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Scalable cloud solutions for medical data and applications",
    technologies: [
      {
        name: "Vercel",
        description: "Edge-optimized deployment platform",
        use_case: "Fast global delivery of medical applications",
        logo: "/vercel-logo.png",
      },
      {
        name: "AWS",
        description: "Comprehensive cloud computing services",
        use_case: "HIPAA-compliant medical data storage and processing",
        logo: "/aws-logo.png",
      },
      {
        name: "Supabase",
        description: "Open-source Firebase alternative",
        use_case: "Real-time medical data synchronization",
        logo: "/supabase-logo.png",
      },
      {
        name: "Docker",
        description: "Containerization for consistent deployments",
        use_case: "Scalable medical application deployment",
        logo: "/docker-logo.png",
      },
    ],
  },
  "medical-tools": {
    title: "Medical & Scientific Tools",
    icon: Monitor,
    description: "Specialized software for medical accuracy and scientific visualization",
    technologies: [
      {
        name: "DICOM Viewers",
        description: "Medical imaging data visualization",
        use_case: "Converting medical scans to 3D models",
        logo: "/dicom-medical-logo.jpg",
      },
      {
        name: "ImageJ",
        description: "Scientific image analysis software",
        use_case: "Medical image processing and analysis",
        logo: "/imagej-logo.jpg",
      },
      {
        name: "ParaView",
        description: "Scientific data visualization application",
        use_case: "Complex medical data visualization",
        logo: "/paraview-logo.jpg",
      },
      {
        name: "Anatomage",
        description: "3D anatomy visualization platform",
        use_case: "Accurate anatomical reference and modeling",
        logo: "/anatomage-logo.jpg",
      },
    ],
  },
};

export default function TechnologyPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="cmax-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Technology Stack
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            We leverage cutting-edge technology to create stunning, accurate,
            and interactive medical visualizations that push the boundaries of
            digital health.
          </p>
        </div>
      </section>

      {/* Technology Tabs Section */}
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="3d-modeling" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(technologyCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key}>
                  <category.icon className="mr-2 h-5 w-5" />
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(technologyCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {category.title}
                  </h2>
                  <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {category.technologies.map((tech) => (
                    <Card
                      key={tech.name}
                      className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:bg-primary/5 hover:shadow-md"
                    >
                      <div className="relative h-20 w-20 mb-4">
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {tech.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Use Case: {tech.use_case}
                      </Badge>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      {/* Core Principles Section */}
      <section className="py-24 bg-primary/5">
        <div className="cmax-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Principles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our technology choices are guided by a commitment to quality,
              security, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mr-4">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Performance</h3>
                <p className="mt-1 text-muted-foreground">
                  Real-time interactivity and fast loading times are critical for
                  an engaging user experience.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mr-4">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Security & Compliance</h3>
                <p className="mt-1 text-muted-foreground">
                  We adhere to the highest standards, including HIPAA, to
                  protect sensitive medical data.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mr-4">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Scalability</h3>
                <p className="mt-1 text-muted-foreground">
                  Our solutions are built on robust infrastructure that can grow
                  with your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
