import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

interface BlogHeaderProps {
	title: string
	excerpt: string
	coverImage: string
	category: string
	publishedAt: string
	readingTime: string
	isAIGenerated?: boolean
}

export function BlogHeader({
	title,
	excerpt,
	coverImage,
	category,
	publishedAt,
	readingTime,
	isAIGenerated,
}: BlogHeaderProps) {
	const shareUrl = typeof window !== "undefined" ? window.location.href : ""

	const handleShare = async (platform: string) => {
		const shareText = `Check out "${title}" on PlanckStudio Blog`

		switch (platform) {
			case "twitter":
				window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`)
				break
			case "linkedin":
				window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`)
				break
			case "facebook":
				window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
				break
			case "copy":
				await navigator.clipboard.writeText(shareUrl)
				// You might want to show a toast notification here
				break
		}
	}

	return (
		<div className="w-full bg-background">
			<header className="container mx-auto px-4 py-12">
				<div className="lg:max-w-[728px] mx-auto text-center">
					{/* Category and AI Label */}
					<div className="flex items-center gap-2 mb-6 justify-center">
						<Badge variant="secondary">
							{category}
						</Badge>
						{isAIGenerated && (
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Badge variant="outline" className="border-dashed cursor-help">
											AI Generated
										</Badge>
									</TooltipTrigger>
									<TooltipContent className="max-w-[300px] p-4">
										<p className="text-sm">
											This article or parts of it may have been generated with the assistance of AI. While we strive for accuracy,
											some content might require verification. Please use your discretion when interpreting the information.
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						)}
					</div>

					{/* Title and Excerpt */}
					<div className="space-y-6 mb-10">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
							{title}
						</h1>
						<p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
							{excerpt}
						</p>
					</div>

					{/* Metadata (date and reading time only) */}
					<div className="flex items-center gap-4 mb-8 justify-center">
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4 flex-shrink-0" />
							<span>{publishedAt}</span>
						</div>
						<div className="w-1 h-1 rounded-full bg-border" />
						<div className="flex items-center gap-2">
							<Clock className="h-4 w-4 flex-shrink-0" />
							<span>{readingTime}</span>
						</div>
					</div>

					{/* Cover Image */}
					<div className="relative aspect-[2/1] overflow-hidden rounded-lg mt-8">
						<Image
							src={coverImage}
							alt={title}
							fill
							priority
							className="object-cover"
							sizes="(min-width: 728px) 728px, 100vw"
						/>
					</div>
				</div>
			</header>
		</div>
	)
} 