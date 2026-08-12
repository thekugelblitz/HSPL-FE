"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Shield, Zap, HeadphonesIcon, Globe2 } from "lucide-react";

export default function AboutPageClient() {
    const teamMembers = [
        {
            name: "Dhruval Joshi",
            role: "Founder & Director",
            image: "/img/team/dhruval.webp",
            linkedin: "https://2hs.in/indhruval"
        },
        {
            name: "Nimit Kansagra",
            role: "CEO & Co-Founder",
            image: "/img/team/nimit.webp",
            linkedin: "https://2hs.in/innimit"
        },
        {
            name: "Keyur Patel",
            role: "CMO",
            image: "/img/team/keyur.webp",
            linkedin: "https://2hs.in/inkeyur"
        },
        {
            name: "Shakti Saurav",
            role: "CTO",
            image: "/img/team/shakti.webp",
            linkedin: "https://2hs.in/inshakti"
        }
    ];

    const jobOpenings = [
        {
            title: "System Administrator",
            type: "Full Time",
            location: "Remote",
            applyUrl: "https://hostingspell.com/contact"
        },
        {
            title: "Content Creator",
            type: "Part Time",
            location: "Rajkot/Ahmedabad",
            applyUrl: "https://hostingspell.com/contact"
        },
        {
            title: "WordPress Tech Support Specialist",
            type: "Full Time",
            location: "Remote",
            applyUrl: "https://hostingspell.com/contact"
        },
        {
            title: "MySQL Tech Support Specialist",
            type: "Part Time",
            location: "Remote",
            applyUrl: "https://hostingspell.com/contact"
        }
    ];

    const features = [
        {
            icon: Shield,
            title: "Host All Your Files",
            description: "Store and manage all your website files securely with unlimited storage and reliable infrastructure."
        },
        {
            icon: Globe2,
            title: "1 Million PHP",
            description: "Execute up to 1 million PHP requests with optimized servers for maximum performance and speed."
        },
        {
            icon: HeadphonesIcon,
            title: "Advanced Priority Support",
            description: "Get expert help 24/7 from our in-house support team ready to solve any hosting challenge."
        },
        {
            icon: Zap,
            title: "Easy CMS Integration",
            description: "One-click installation for WordPress, Joomla, Drupal and 380+ apps with Softaculous."
        },
        {
            icon: Shield,
            title: "Easy Staging Tool",
            description: "Test changes safely with our built-in staging environment before pushing to production."
        },
        {
            icon: Globe2,
            title: "Add All-in-one Latest Clients",
            description: "Manage multiple client websites with our advanced reseller and multi-site management tools."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                Transforming The Way<br />
                                You Do <span className="text-blue-600">Business Online</span>
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8">
                                From humble beginnings in 2015 to hosting over 110,000+ websites across 57+ countries, 
                                we're committed to providing reliable, fast, and secure hosting solutions that empower your online presence.
                            </p>
                            <Button size="lg" className="dark:text-white">
                                GET STARTED →
                            </Button>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/img/about-1.webp"
                                    alt="Team collaboration"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Done Right Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            Privacy Done Right
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image */}
                            <div className="relative order-2 lg:order-1">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/img/about-2.webp"
                                        alt="Privacy and Security"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="order-1 lg:order-2">
                                <div className="space-y-6 text-lg leading-relaxed">
                                    <p>
                                        At HostingSpell, your privacy and data security are our top priorities. We believe that 
                                        every website owner deserves hosting that respects their privacy while delivering 
                                        exceptional performance.
                                    </p>
                                    <p>
                                        Our infrastructure is built with security-first principles, featuring advanced DDoS 
                                        protection, SSL certificates, automated backups, and strict data privacy policies. 
                                        We never compromise on your data integrity or sell your information to third parties.
                                    </p>
                                    <p>
                                        With data centers across 6 continents and compliance with international privacy 
                                        standards, you can trust that your website and customer data are in safe hands.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                                            <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                            Meet the passionate individuals who make HostingSpell a reality
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6 text-center">
                                        <div className="relative mb-6">
                                            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                        <p className="text-muted-foreground mb-4">{member.role}</p>
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                LinkedIn
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-8 rounded-3xl shadow-2xl overflow-hidden text-center">
                            {/* Decorative background element */}
                            <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')] opacity-10"></div>

                            <div className="relative space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Start your business with<br />HostingSpell
                                </h2>
                                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                                    Join over 110,000+ websites hosted on our reliable infrastructure. Get started today with our powerful hosting solutions.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                    <Button 
                                        size="lg" 
                                        className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-white dark:text-blue-600 dark:hover:bg-blue-50"
                                    >
                                        Get Started Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">4 Jobs. 2 Locations. 1 Team</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of Our Team</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Join our passionate team and help us shape the future of web hosting
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid gap-4">
                            {jobOpenings.map((job, index) => (
                                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge variant="outline">{job.type}</Badge>
                                                    <Badge variant="outline">{job.location}</Badge>
                                                </div>
                                            </div>
                                            <Button asChild className="sm:w-auto dark:text-white">
                                                <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                                                    Apply Now
                                                    <ExternalLink className="w-4 h-4 ml-2" />
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}