"use client"

import { Suspense, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html } from "@react-three/drei"
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Bone,
  Eye,
  Heart,
  Maximize,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react"

// Simple 3D Heart Model Component
function HeartModel({ isAnimating, modelRef }: { isAnimating: boolean; modelRef: React.Ref<THREE.Group> }) {
  return (
    <Html center>
      <div className="text-white text-center">
        <div className="text-6xl mb-4 animate-pulse">❤️</div>
        <div className="text-xl font-semibold mb-2">Interactive Heart Anatomy</div>
        <div className="text-sm opacity-75">3D model coming soon</div>
        <div className="text-xs opacity-50 mt-2">Rotate, zoom, and explore</div>
      </div>
    </Html>
  )
}

function BrainModel({ isAnimating, modelRef }: { isAnimating: boolean; modelRef: React.Ref<THREE.Group> }) {
  return (
    <Html center>
      <div className="text-white text-center">
        <div className="text-6xl mb-4 animate-pulse">🧠</div>
        <div className="text-xl font-semibold mb-2">Brain Cross-Section Explorer</div>
        <div className="text-sm opacity-75">3D model coming soon</div>
        <div className="text-xs opacity-50 mt-2">Explore internal structures</div>
      </div>
    </Html>
  )
}

function BoneModel({ isAnimating, modelRef }: { isAnimating: boolean; modelRef: React.Ref<THREE.Group> }) {
  return (
    <Html center>
      <div className="text-white text-center">
        <div className="text-6xl mb-4 animate-pulse">🦴</div>
        <div className="text-xl font-semibold mb-2">Bone Structure Analysis</div>
        <div className="text-sm opacity-75">3D model coming soon</div>
        <div className="text-xs opacity-50 mt-2">Interactive bone composition</div>
      </div>
    </Html>
  )
}

function DemoControls({ isAnimating, onToggleAnimation, onReset, onFullscreen }: { isAnimating: boolean; onToggleAnimation: () => void; onReset: () => void; onFullscreen: () => void }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gray-800/50 p-2 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onToggleAnimation} className="text-white hover:text-primary">
          {isAnimating ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          <span className="sr-only">{isAnimating ? "Pause Animation" : "Play Animation"}</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={onReset} className="text-white hover:text-primary">
          <RotateCcw className="h-5 w-5" />
          <span className="sr-only">Reset View</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={onFullscreen} className="text-white hover:text-primary">
          <Maximize className="h-5 w-5" />
          <span className="sr-only">Fullscreen</span>
        </Button>
      </div>
    </div>
  )
}

export default function Demo3DViewer() {
  const [activeDemo, setActiveDemo] = useState<"heart" | "brain" | "bone" | "eye">("heart")
  const [isAnimating, setIsAnimating] = useState(true)
  const controlsRef = useRef<OrbitControlsImpl>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modelRef = useRef<THREE.Group>(null)

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
    if (modelRef.current) {
      modelRef.current.rotation.x = 0
      modelRef.current.rotation.y = 0
      modelRef.current.rotation.z = 0
      modelRef.current.position.set(0, 0, 0)
      controlsRef.current?.target.set(0, 0, 0)
    }
  }

  const handleFullscreen = () => {
    if (canvasRef.current) {
      const parent = canvasRef.current.parentElement
      if (parent) {
        parent.requestFullscreen()
      }
    }
  }

  const demos = {
    heart: {
      title: "Interactive Heart Anatomy",
      description:
        "Explore a detailed 3D model of the human heart. Rotate, zoom, and pan to view anatomical structures. Toggle animation to see a simulated heartbeat.",
      component: <HeartModel isAnimating={isAnimating} modelRef={modelRef} />,
      icon: Heart,
    },
    brain: {
      title: "Brain Cross-Section Explorer",
      description:
        "Visualize the internal structures of the human brain. This demo showcases a simplified cross-section, highlighting major regions.",
      component: <BrainModel isAnimating={isAnimating} modelRef={modelRef} />,
      icon: Brain,
    },
    bone: {
      title: "Bone Structure Analysis",
      description:
        "An interactive look at bone composition and structure. This demo provides a basic representation of a long bone for educational purposes.",
      component: <BoneModel isAnimating={isAnimating} modelRef={modelRef} />,
      icon: Bone,
    },
    eye: {
      title: "Human Eye Anatomy",
      description:
        "A detailed model of the human eye. Explore the various components from the cornea to the optic nerve. (Model not yet implemented)",
      component: (
        <Html center>
          <div className="text-white">Coming Soon</div>
        </Html>
      ),
      icon: Eye,
    },
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
      {/* Demo Selector */}
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Select a Demo</h2>
        <div className="mt-6 space-y-2">
          {Object.entries(demos).map(([key, demo]) => (
            <Button
              key={key}
              variant={activeDemo === key ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveDemo(key as "heart" | "brain" | "bone" | "eye")}
            >
              <demo.icon className="mr-3 h-5 w-5" />
              {demo.title}
            </Button>
          ))}
        </div>
      </div>
      {/* Demo Display */}
      <div className="lg:col-span-3">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tight text-foreground">{demos[activeDemo].title}</h3>
          <p className="text-muted-foreground">{demos[activeDemo].description}</p>
        </div>
        <div className="mt-8 relative aspect-video rounded-lg bg-gray-900">
          <Canvas ref={canvasRef} camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Suspense
              fallback={
                <Html center>
                  <div className="text-white">Loading...</div>
                </Html>
              }
            >
              {demos[activeDemo].component}
            </Suspense>
            <OrbitControls ref={controlsRef} />
          </Canvas>
          <DemoControls
            isAnimating={isAnimating}
            onToggleAnimation={() => setIsAnimating(!isAnimating)}
            onReset={handleReset}
            onFullscreen={handleFullscreen}
          />
        </div>
      </div>
    </div>
  )
}
