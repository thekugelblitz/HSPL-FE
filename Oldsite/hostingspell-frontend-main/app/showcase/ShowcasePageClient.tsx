"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	ExternalLink,
	Star,
	ArrowRight,
	Globe,
	Code2,
	GraduationCap,
	BookOpen,
	Users,
	Monitor,
	ShoppingCart,
	LayoutDashboard,
	Cpu,
	FileText,
	Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
	SHOWCASE_CLIENTS,
	SHOWCASE_PROJECTS,
	SHOWCASE_TESTIMONIALS,
	SHOWCASE_METRICS,
	PROJECT_CATEGORIES,
	type ProjectCategory,
} from "@/lib/constants-showcase";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1 } },
};

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
	return (
		<section className="py-24 md:py-36 relative overflow-hidden">
			{/* Background glow using primary color */}
			<div
				className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-15 blur-3xl"
				style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full opacity-10 blur-3xl"
				style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
				aria-hidden="true"
			/>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
							Client Success Stories
						</Badge>
					</motion.div>

					<motion.h1
						className="font-bold tracking-tight text-balance mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.1 }}
					>
						Real Projects.{" "}
						<span className="text-primary">Real Results.</span>
					</motion.h1>

					<motion.p
						className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.2 }}
					>
						From solo founders to enterprise teams — explore how 110,000+ businesses
						build, launch, and scale on HostingSpell infrastructure.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.3 }}
					>
						<Button size="lg" className="dark:text-white gap-2 h-12 px-8 text-base" asChild>
							<Link href="/getstarted">
								Start Your Project <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
							<Link href="#projects">Browse Projects</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Metrics Section ──────────────────────────────────────────────────────────

function MetricsSection() {
	return (
		<section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{SHOWCASE_METRICS.map((metric) => (
						<motion.div
							key={metric.label}
							variants={fadeUp}
							className="text-center"
						>
							<div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
								{metric.value}
							</div>
							<div className="font-semibold text-sm md:text-base mb-1">{metric.label}</div>
							<div className="text-xs text-muted-foreground hidden md:block">
								{metric.description}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

// ─── Trusted Clients Section ──────────────────────────────────────────────────

function TrustedClientsSection() {
	return (
		<section className="py-16 md:py-24" id="clients">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Heading */}
					<motion.div
						className="text-center mb-14"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<p className="text-primary font-bold mb-2">Trusted By</p>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Businesses That Rely on HostingSpell
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							From startups to established enterprises, our clients span industries
							and geographies — all united by a need for reliable, fast hosting.
						</p>
					</motion.div>

					{/* Client Grid */}
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						{SHOWCASE_CLIENTS.map((client) => (
							<motion.div key={client.name} variants={fadeUp}>
								<Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
									<CardContent className="p-6 flex flex-col gap-4 h-full">
										{/* Icon */}
										<div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
											<Globe className="w-6 h-6 text-primary" />
										</div>

										<div className="flex-1">
											<div className="flex items-start justify-between gap-2 mb-2">
												<h3 className="text-lg font-semibold">{client.name}</h3>
												{client.url && (
													<a
														href={client.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-muted-foreground hover:text-primary transition-colors shrink-0"
														aria-label={`Visit ${client.name}`}
													>
													<ExternalLink className="w-4 h-4" />
													</a>
												)}
											</div>
											<Badge variant="outline" className="mb-3 text-xs">
												{client.industry}
											</Badge>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{client.summary}
											</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Education / College Section ─────────────────────────────────────────────

const EDUCATION_CLIENTS = [
	{
		name: "Sunrise University",
		type: "University",
		students: "15,000+",
		useCase: "Student portal, admissions system & faculty intranet hosted on HostingSpell VPS.",
		icon: GraduationCap,
	},
	{
		name: "CodeBridge Institute",
		type: "Coding Bootcamp",
		students: "3,200+",
		useCase: "LMS platform with live coding environments, assignment submission & certificate generation.",
		icon: BookOpen,
	},
	{
		name: "National Skills Academy",
		type: "Vocational College",
		students: "8,500+",
		useCase: "Multi-campus website with course catalog, online enrollment & payment gateway integration.",
		icon: Users,
	},
	{
		name: "EduSpark Academy",
		type: "Online Academy",
		students: "10,000+",
		useCase: "Moodle-based LMS with video streaming, quizzes & automated certificate delivery.",
		icon: Monitor,
	},
];

function EducationSection() {
	return (
		<section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background" id="education">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Heading */}
					<motion.div
						className="text-center mb-14"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<p className="text-primary font-bold mb-2">Education</p>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Colleges & Educational Institutions
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Universities, colleges, and academies trust HostingSpell to power
							their student portals, LMS platforms, and institutional websites.
						</p>
					</motion.div>

					{/* Stats strip */}
					<motion.div
						className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14 p-6 rounded-2xl bg-primary/5 border border-primary/10 mt-8"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						{[
							{ value: "500+", label: "Educational Institutions" },
							{ value: "1M+", label: "Students Served" },
							{ value: "99.9%", label: "Uptime for Exam Season" },
						].map((s) => (
							<div key={s.label} className="text-center">
								<div className="text-2xl md:text-3xl font-bold text-primary mb-1">{s.value}</div>
								<div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
							</div>
						))}
					</motion.div>

					{/* Education client cards */}
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						{EDUCATION_CLIENTS.map((edu) => (
							<motion.div key={edu.name} variants={fadeUp}>
								<Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
									<CardContent className="p-6 flex flex-col gap-4 h-full">
										{/* Icon */}
										<div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
											<edu.icon className="w-6 h-6 text-primary" />
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-base mb-0.5">{edu.name}</h3>
											<div className="flex items-center gap-2 mb-3 mt-3">
												<Badge variant="outline" className="text-xs">{edu.type}</Badge>
												<span className="text-xs text-muted-foreground">{edu.students}</span>
											</div>
											<p className="text-sm text-muted-foreground leading-relaxed">{edu.useCase}</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>

					{/* CTA strip */}
					<motion.div
						className="mt-10 text-center"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<p className="text-muted-foreground text-sm mb-4">
							Special pricing available for educational institutions and NGOs.
						</p>
						<Button variant="outline" className="gap-2 bg-white" asChild>
							<Link href="/contact">
								Apply for Education Discount <ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Projects Section ─────────────────────────────────────────────────────────

// Map category → icon component for the card header
const CATEGORY_ICONS: Record<ProjectCategory, React.ComponentType<{ className?: string }>> = {
	"SaaS": Cpu,
	"E-commerce": ShoppingCart,
	"Portfolio": FileText,
	"Enterprise": Monitor,
	"Dashboard": LayoutDashboard,
	"AI Tools": Cpu,
	"Website": Globe,
	"Landing Page": Megaphone,
};

// ─── Projects Section ─────────────────────────────────────────────────────

function ProjectsSection() {
	const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

	const filtered =
		activeCategory === "All"
			? SHOWCASE_PROJECTS
			: SHOWCASE_PROJECTS.filter((p) => p.category === activeCategory);

	return (
		<section
			className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20"
			id="projects"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Heading */}
					<motion.div
						className="text-center mb-10"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<p className="text-primary font-bold mb-2">Portfolio</p>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Featured Projects
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							A selection of websites, platforms, and applications built and hosted
							on HostingSpell infrastructure.
						</p>
					</motion.div>

					{/* Category Filter */}
					<motion.div
						className="flex flex-wrap justify-center gap-2 mb-10"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						{PROJECT_CATEGORIES.map((cat) => (
							<button
								key={cat.value}
								onClick={() => setActiveCategory(cat.value)}
								className={cn(
									"px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
									activeCategory === cat.value
										? "bg-primary text-white border-primary shadow-md"
										: "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
								)}
							>
								{cat.label}
							</button>
						))}
					</motion.div>

					{/* Project Grid */}
					<motion.div
						key={activeCategory}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={staggerContainer}
						initial="hidden"
						animate="show"
					>
						{filtered.map((project) => {
							const CategoryIcon = CATEGORY_ICONS[project.category];

							return (
								<motion.div key={project.name} variants={fadeUp}>
									<Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
										<CardContent className="p-6 flex flex-col h-full gap-4">
											{/* Header: Icon + Badges */}
											<div className="flex items-start justify-between gap-3">
												<div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
													<CategoryIcon className="w-6 h-6 text-primary" />
												</div>
												<div className="flex items-center gap-2">
													{project.featured && (
														<Badge className="bg-primary text-white text-xs">
															Featured
														</Badge>
													)}
													<Badge variant="secondary" className="text-xs">
														{project.category}
													</Badge>
												</div>
											</div>

											{/* Title */}
											<div>
												<h3 className="text-lg font-semibold mb-2">{project.name}</h3>
												<p className="text-sm text-muted-foreground leading-relaxed">
													{project.description}
												</p>
											</div>

											{/* Tech Stack */}
											<div className="flex flex-wrap gap-1.5">
												{project.technologies.map((tech) => (
													<span
														key={tech}
														className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
													>
														<Code2 className="w-3 h-3" />
														{tech}
													</span>
												))}
											</div>

											{/* Actions */}
											<div className="flex items-center gap-2 pt-2 border-t border-border mt-auto">
												<Button size="sm" className="gap-1.5 dark:text-white flex-1" asChild>
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Globe className="w-3.5 h-3.5" />
														Live Site
													</a>
												</Button>
												{project.caseStudyUrl && (
													<Button size="sm" variant="outline" className="flex-1" asChild>
														<a
															href={project.caseStudyUrl}
															target="_blank"
															rel="noopener noreferrer"
														>
															<FileText className="w-3.5 h-3.5" />
														</a>
													</Button>
												)}
											</div>
										</CardContent>
									</Card>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

function TestimonialsSection() {
	return (
		<section className="py-16 md:py-24" id="testimonials">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Heading */}
					<motion.div
						className="text-center mb-14"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<p className="text-primary font-bold mb-2">Reviews</p>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							What Our Clients Say
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Honest feedback from real customers who trust HostingSpell with their
							most important online assets.
						</p>
					</motion.div>

					{/* Testimonial Grid */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						{SHOWCASE_TESTIMONIALS.map((t) => (
							<motion.div key={t.name} variants={fadeUp}>
								<Card className="bg-card dark:bg-card h-full hover:shadow-lg transition-all duration-300">
									<CardContent className="pt-6 p-6 flex flex-col h-full">
										{/* Stars */}
										<div className="flex gap-1 mb-4">
											{Array.from({ length: t.rating }).map((_, i) => (
												<Star
													key={i}
													className="h-4 w-4 fill-yellow-400 text-yellow-400"
												/>
											))}
										</div>

										{/* Review text */}
										<blockquote className="text-muted-foreground mb-6 flex-1 leading-relaxed">
											&ldquo;{t.content}&rdquo;
										</blockquote>

										{/* Author */}
										<div className="flex items-center gap-3 pt-4 border-t border-border">
											{/* Avatar placeholder */}
											<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center shrink-0">
												<span className="text-sm font-bold text-blue-600 dark:text-white">
													{t.name.charAt(0)}
												</span>
											</div>
											<div>
												<div className="font-semibold text-sm">{t.name}</div>
												<div className="text-xs text-muted-foreground">
													{t.role} · {t.company}
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>

					{/* Trustpilot link */}
					<motion.div
						className="text-center mt-10"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<p className="text-sm text-muted-foreground">
							Read more reviews on{" "}
							<a
								href="https://www.trustpilot.com/review/hostingspell.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary font-medium hover:underline"
							>
								Trustpilot
							</a>{" "}
							and{" "}
							<a
								href="https://www.hostadvice.com/hosting-company/hostingspell-reviews/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary font-medium hover:underline"
							>
								HostAdvice
							</a>
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── Case Studies / Metrics Band ──────────────────────────────────────────────

function CaseStudiesBand() {
	const highlights = [
		{
			icon: "🚀",
			title: "40% Cost Reduction",
			description:
				"TechNova Solutions cut infrastructure costs by 40% after migrating to HostingSpell cloud hosting.",
		},
		{
			icon: "⚡",
			title: "Sub-second Load Times",
			description:
				"ShopEase India achieved <800ms page loads with LiteSpeed caching, boosting conversions by 22%.",
		},
		{
			icon: "🛡️",
			title: "Zero Downtime Migration",
			description:
				"EduSpark Academy migrated 10,000+ student accounts with zero service interruption.",
		},
		{
			icon: "📈",
			title: "120+ Sites Managed",
			description:
				"Apex Digital Agency manages 120+ client websites through a single HostingSpell reseller account.",
		},
	];

	return (
		<section className="py-8 md:py-16 bg-gradient-to-b from-muted/20 to-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-14"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<p className="text-primary font-bold mb-2">Impact</p>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Measurable Results
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Numbers that reflect the real-world impact of choosing the right
							hosting partner.
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						{highlights.map((h) => (
							<motion.div key={h.title} variants={fadeUp}>
								<Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
									<CardContent className="p-6 flex flex-col gap-3 h-full">
										<div className="text-3xl">{h.icon}</div>
										<h3 className="text-lg font-semibold">{h.title}</h3>
										<p className="text-sm text-muted-foreground leading-relaxed flex-1">
											{h.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection() {
	return (
		<section className="py-12 md:py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 md:py-16 px-6 md:px-8 rounded-3xl shadow-2xl overflow-hidden text-center max-w-5xl mx-auto"
					variants={fadeUp}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{/* Decorative overlay */}
					<div
						className="absolute inset-0 opacity-10"
						style={{
							backgroundImage:
								"radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
							backgroundSize: "40px 40px",
						}}
						aria-hidden="true"
					/>

					<div className="relative space-y-6">
						<Badge className="bg-white/20 text-white border-white/30 mb-2">
							Ready to Get Started?
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold leading-tight">
							Launch Your Project with HostingSpell
						</h2>
						<p className="text-sm md:text-base text-blue-100 max-w-xl mx-auto">
							Join 110,000+ websites already running on our infrastructure. Fast
							setup, free migration, and 24/7 expert support included.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
							<Button
								size="default"
								className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-white dark:text-blue-600 dark:hover:bg-blue-50 gap-2"
								asChild
							>
								<Link href="/getstarted">
									Get Started Now <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								size="default"
								variant="outline"
								className="bg-transparent text-white border-white hover:bg-white/10"
								asChild
							>
								<Link href="/pricing">View Pricing</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function ShowcasePageClient() {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<MetricsSection />
			<TrustedClientsSection />
			<EducationSection />
			<ProjectsSection />
			<TestimonialsSection />
			<CaseStudiesBand />
			<CTASection />
		</div>
	);
}
