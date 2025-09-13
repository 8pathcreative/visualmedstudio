"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { Play, Pause, RotateCcw, Maximize, Info, Heart, Brain, Bone, Eye } from "lucide-react"
import Link from "next/link"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

// Simple 3D Heart Model Component
function HeartModel({ isAnimating }: { isAnimating: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current && isAnimating) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ff6b6b" roughness={0.3} metalness={0.1} />
      <Html position={[0, -2, 0]} center>
        <div className="bg-black/80 text-white px-3 py-1 rounded text-sm">Interactive Heart Model</div>
      </Html>
    </mesh>
  )
}

// Simple Brain Model Component
function BrainModel({ isAnimating }: { isAnimating: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current && isAnimating) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1, 1.2]} />
        <meshStandardMaterial color="#ffa8a8" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.3, 0.3]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#ff8787" roughness={0.4} metalness={0.2} />
      </mesh>
      <Html position={[0, -2, 0]} center>
        <div className="bg-black/80 text-white px-3 py-1 rounded text-sm">Brain Cross-Section</div>
      </Html>
    </group>
  )
}

// Simple Bone Model Component
function BoneModel({ isAnimating }: { isAnimating: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current && isAnimating) {
      meshRef.current.rotation.z += 0.01
    }
  })

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.2} metalness={0.1} />
      </mesh>
      <mesh position={[0.7, 0.7, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.2} metalness={0.1} />
      </mesh>
      <mesh position={[-0.7, -0.7, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.2} metalness={0.1} />
      </mesh>
      <Html position={[0, -2, 0]} center>
        <div className="bg-black/80 text-white px-3 py-1 rounded text-sm">Bone Structure</div>
      </Html>
    </group>
  )
}

// Demo Controls Component
function DemoControls({
  isAnimating,
  onToggleAnimation,
  onReset,
}: {
  isAnimating: boolean
  onToggleAnimation: () => void
  onReset: () => void
}) {
  return (
    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 z-10">
      <Button
        size="sm"
        variant="secondary"
        onClick={onToggleAnimation}
        className="bg-black/80 hover:bg-black/90 text-white border-0"
      >
        {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={onReset}
        className="bg-black/80 hover:bg-black/90 text-white border-0"
      >
        <RotateCcw className="w-4 h-4" />
      </Button>
    </div>
  )
}

// 3D Demo Viewer Component
function Demo3DViewer({
  modelType,
  title,
  description,
}: {
  modelType: "heart" | "brain" | "bone"
  title: string
  description: string
}) {
  const [isAnimating, setIsAnimating] = useState(true)

  const handleReset = () => {
    setIsAnimating(false)
    setTimeout(() => setIsAnimating(true), 100)
  }

  const renderModel = () => {
    switch (modelType) {
      case "heart":
        return <HeartModel isAnimating={isAnimating} />
      case "brain":
        return <BrainModel isAnimating={isAnimating} />
      case "bone":
        return <BoneModel isAnimating={isAnimating} />
      default:
        return <HeartModel isAnimating={isAnimating} />
    }
  }

  return (
    <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover-lift">
      <CardContent className="p-0">
        <div className="relative h-80 bg-gradient-to-br from-primary/5 to-secondary/5">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              {renderModel()}
              <Environment preset="studio" />
            </Suspense>
            <OrbitControls enableZoom={true} enablePan={false} />
          </Canvas>

          <DemoControls
            isAnimating={isAnimating}
            onToggleAnimation={() => setIsAnimating(!isAnimating)}
            onReset={handleReset}
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

const demoCategories = {
  anatomical: {
    title: "Anatomical Models",
    icon: Heart,
    description: "Interactive 3D anatomical structures for medical education",
    demos: [
      {
        id: "heart",
        title: "Cardiovascular System",
        description: "Interactive heart model showing chambers, valves, and blood flow patterns",
        modelType: "heart" as const,
        complexity: "Advanced",
        useCase: "Cardiology Education",
      },
      {
        id: "brain",
        title: "Neurological Structure",
        description: "Detailed brain cross-section with highlighted regions and neural pathways",
        modelType: "brain" as const,
        complexity: "Expert",
        useCase: "Neurology Training",
      },
    ],
  },
  surgical: {
    title: "Surgical Planning",
    icon: Bone,
    description: "Pre-operative visualization tools for surgical procedures",
    demos: [
      {
        id: "bone",
        title: "Orthopedic Planning",
        description: "3D bone structure visualization for surgical planning and patient education",
        modelType: "bone" as const,
        complexity: "Advanced",
        useCase: "Orthopedic Surgery",
      },
    ],
  },
  educational: {
    title: "Educational Tools",
    icon: Eye,
    description: "Interactive learning experiences for medical students",
    demos: [
      {
        id: "eye",
        title: "Ocular Anatomy",
        description: "Comprehensive eye structure model with interactive components",
        modelType: "heart" as const, // Using heart as placeholder
        complexity: "Intermediate",
        useCase: "Ophthalmology Education",
      },
    ],
  },
}

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Interactive 3D Demos</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty">
              Experience our cutting-edge medical visualizations firsthand. These interactive demos showcase the power
              of 3D technology in medical education and training.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-4 py-2">
                <Play className="w-4 h-4 mr-2" />
                Real-Time Interaction
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Maximize className="w-4 h-4 mr-2" />
                Full 3D Navigation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Info className="w-4 h-4 mr-2" />
                Educational Annotations
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Categories */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="anatomical" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {Object.entries(demoCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center gap-2 p-4">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(demoCategories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <TabsContent key={key} value={key} className="space-y-8">
                  <div className="text-center mb-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.demos.map((demo, index) => (
                      <div key={demo.id} className={`animate-slide-in-up stagger-${index + 1}`}>
                        <Demo3DViewer modelType={demo.modelType} title={demo.title} description={demo.description} />
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {demo.complexity}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {demo.useCase}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Why Interactive 3D?</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              3D visualization transforms complex medical concepts into intuitive, engaging learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Enhanced Learning</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  3D models improve comprehension and retention by 400% compared to traditional 2D materials
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Visual Clarity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complex anatomical relationships become clear through interactive 3D exploration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Patient Engagement</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interactive models help patients better understand their conditions and treatments
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">400%</div>
              <div className="text-sm text-muted-foreground">Learning Improvement</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">60fps</div>
              <div className="text-sm text-muted-foreground">Smooth Animation</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">WebGL</div>
              <div className="text-sm text-muted-foreground">Browser Compatible</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">Mobile</div>
              <div className="text-sm text-muted-foreground">Cross-Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready for Your Custom 3D Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              These demos represent just a fraction of what's possible. Let's create interactive 3D experiences tailored
              to your specific medical education or training needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  <Play className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent" asChild>
                <Link href="/projects">
                  <Maximize className="w-5 h-5 mr-2" />
                  View Full Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
