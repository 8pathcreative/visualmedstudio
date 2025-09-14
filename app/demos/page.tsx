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
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic";

// Simple 3D Heart Model Component
function HeartModel({
  isAnimating,
  modelRef,
}: {
  isAnimating: boolean
  modelRef: React.Ref<THREE.Group>
}) {
  const { scene } = useGLTF("/3d-heart-anatomy.glb")

  useFrame(() => {
    if (isAnimating && modelRef && "current" in modelRef && modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={modelRef} object={scene} scale={2.5} />
}

// Simple 3D Brain Model Component
function BrainModel({
  isAnimating,
  modelRef,
}: {
  isAnimating: boolean
  modelRef: React.Ref<THREE.Group>
}) {
  // Replace with your actual brain model
  const { scene } = useGLTF("/brain-scan.glb") // Placeholder path

  useFrame(() => {
    if (isAnimating && modelRef && "current" in modelRef && modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={modelRef} object={scene} scale={1.5} />
}

// Simple 3D Bone Model Component
function BoneModel({
  isAnimating,
  modelRef,
}: {
  isAnimating: boolean
  modelRef: React.Ref<THREE.Group>
}) {
  // Replace with your actual bone model
  const { scene } = useGLTF("/bone-structure.glb") // Placeholder path

  useFrame(() => {
    if (isAnimating && modelRef && "current" in modelRef && modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={modelRef} object={scene} scale={3} />
}

// Controls Component for the Demo Viewer
function DemoControls({
  isAnimating,
  onToggleAnimation,
  onReset,
  onFullscreen,
}: {
  isAnimating: boolean
  onToggleAnimation: () => void
  onReset: () => void
  onFullscreen: () => void
}) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gray-800/50 p-2 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleAnimation}
          className="text-white hover:text-primary"
        >
          {isAnimating ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
          <span className="sr-only">
            {isAnimating ? "Pause Animation" : "Play Animation"}
          </span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          className="text-white hover:text-primary"
        >
          <RotateCcw className="h-5 w-5" />
          <span className="sr-only">Reset View</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onFullscreen}
          className="text-white hover:text-primary"
        >
          <Maximize className="h-5 w-5" />
          <span className="sr-only">Fullscreen</span>
        </Button>
      </div>
    </div>
  )
}

// Move the entire 3D viewer (Canvas, models, controls, etc.) into a new component file: components/3d-demo-viewer.tsx
const Demo3DViewer = dynamic(() => import("@/components/3d-demo-viewer"), { ssr: false });

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
