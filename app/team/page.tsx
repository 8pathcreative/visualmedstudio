import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const teamMembers = [
	{
		id: 1,
		name: "Dr. Sarah Chen",
		title: "Lead Medical Visualization Specialist",
		image: "/professional-headshot-of-asian-woman-doctor-in-lab.jpg",
		bio: "Dr. Chen brings over 12 years of experience in medical imaging and 3D visualization. She specializes in creating accurate anatomical models for surgical planning and medical education.",
		credentials: [
			"PhD in Biomedical Engineering",
			"Certified Medical Illustrator",
			"Published 40+ Research Papers",
		],
		specializations: [
			"Surgical Planning",
			"Anatomical Modeling",
			"Medical Animation",
		],
		email: "sarah.chen@vismedstudio.com",
		linkedin: "https://linkedin.com/in/sarahchen",
	},
	{
		id: 2,
		name: "Marcus Rodriguez",
		title: "Senior 3D Artist & Technical Director",
		image: "/professional-headshot-of-hispanic-man-with-beard-i.jpg",
		bio: "Marcus is a master of both artistic vision and technical execution. With expertise in Cinema 4D, Blender, and custom shader development, he creates stunning photorealistic medical visualizations.",
		credentials: [
			"MFA in Digital Arts",
			"Autodesk Certified Professional",
			"10+ Years Industry Experience",
		],
		specializations: [
			"3D Modeling",
			"Shader Development",
			"Photorealistic Rendering",
		],
		email: "marcus.rodriguez@vismedstudio.com",
		linkedin: "https://linkedin.com/in/marcusrodriguez",
	},
	{
		id: 3,
		name: "Dr. Emily Watson",
		title: "Medical Consultant & Research Director",
		image: "/professional-headshot-of-caucasian-woman-doctor-wi.jpg",
		bio: "Dr. Watson ensures all our visualizations maintain medical accuracy and clinical relevance. She bridges the gap between complex medical concepts and accessible visual communication.",
		credentials: ["MD from Johns Hopkins", "Board Certified Radiologist", "Medical Education Specialist"],
		specializations: ["Medical Accuracy", "Clinical Review", "Educational Content"],
		email: "emily.watson@vismedstudio.com",
		linkedin: "https://linkedin.com/in/emilywatson",
	},
	{
		id: 4,
		name: "Alex Kim",
		title: "Full-Stack Developer & UX Designer",
		image: "/professional-headshot-of-asian-man-in-modern-offic.jpg",
		bio: "Alex develops the interactive platforms and user experiences that make our 3D visualizations accessible across devices. He specializes in WebGL, React, and responsive design.",
		credentials: ["BS Computer Science", "Google UX Design Certificate", "AWS Certified Developer"],
		specializations: ["Web Development", "Interactive Design", "User Experience"],
		email: "alex.kim@vismedstudio.com",
		linkedin: "https://linkedin.com/in/alexkim",
	},
	{
		id: 5,
		name: "Dr. James Mitchell",
		title: "Biomechanics Specialist",
		image: "/professional-headshot-of-african-american-man-in-l.jpg",
		bio: "Dr. Mitchell brings deep expertise in biomechanics and motion analysis to create accurate simulations of human movement and physiological processes.",
		credentials: ["PhD in Biomechanics", "Licensed Physical Therapist", "Motion Capture Specialist"],
		specializations: ["Motion Analysis", "Biomechanical Modeling", "Physiological Simulation"],
		email: "james.mitchell@vismedstudio.com",
		linkedin: "https://linkedin.com/in/jamesmitchell",
	},
	{
		id: 6,
		name: "Lisa Park",
		title: "Project Manager & Client Relations",
		image: "/professional-headshot-of-asian-woman-in-business-s.jpg",
		bio: "Lisa ensures seamless project delivery and maintains strong relationships with our medical and educational clients. She coordinates complex multi-disciplinary projects from concept to completion.",
		credentials: ["MBA in Healthcare Management", "PMP Certified", "6+ Years Medical Industry"],
		specializations: ["Project Management", "Client Relations", "Healthcare Operations"],
		email: "lisa.park@vismedstudio.com",
		linkedin: "https://linkedin.com/in/lisapark",
	},
]

export default function TeamPage() {
	return (
		<div className="bg-background text-foreground">
			<Header />
			{/* Hero Section */}
			<section className="bg-primary/10 py-20 text-center">
				<div className="max-w-7xl mx-auto px-4">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						Meet Our Experts
					</h1>
					<p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
						A passionate team of medical professionals, artists, and developers
						dedicated to revolutionizing medical visualization.
					</p>
				</div>
			</section>

			{/* Team Grid */}
			<main className="py-16 sm:py-24">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map((member) => (
							<Card
								key={member.id}
								className="overflow-hidden text-center transition-shadow duration-300 hover:shadow-xl"
							>
								<div className="relative h-56 w-full">
									<Image
										src={member.image}
										alt={member.name}
										layout="fill"
										objectFit="cover"
										className="grayscale transition-all duration-500 hover:grayscale-0"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold text-foreground">
										{member.name}
									</h3>
									<p className="text-sm font-medium text-primary">
										{member.title}
									</p>
									<p className="mt-4 text-sm text-muted-foreground">
										{member.bio}
									</p>
									<div className="mt-6 flex justify-center gap-4">
										<Button asChild variant="outline" size="icon">
											<Link href={`mailto:${member.email}`}>
												<Mail className="h-4 w-4" />
												<span className="sr-only">Email</span>
											</Link>
										</Button>
										<Button asChild variant="outline" size="icon">
											<Link
												href={member.linkedin}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Linkedin className="h-4 w-4" />
												<span className="sr-only">LinkedIn</span>
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</main>

			{/* Join Us Section */}
			<section className="py-24 bg-primary/5">
				<div className="cmax-w-7xl mx-auto text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Join Our Mission
					</h2>
					<p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
						We are always looking for talented individuals who are passionate
						about the intersection of medicine and technology.
					</p>
					<div className="mt-8">
						<Button asChild size="lg">
							<Link href="/careers">View Open Positions</Link>
						</Button>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}
