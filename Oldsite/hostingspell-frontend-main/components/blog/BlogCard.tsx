import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogCardProps {
	post: {
		slug: string
		title: string
		excerpt: string
		coverImage: string
		category: string
		author: {
			name: string
			avatar: string
			slug: string
		}
		publishedAt: string
		readingTime: string
	}
	variant?: "default" | "featured" | "compact" | "list" | "minimal" | "grid" | "masonry" | "carousel"
	className?: string
}

export function BlogCard({ post, variant = "default", className }: BlogCardProps) {
	if (variant === "featured") {
		return (
			<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
				<div className="space-y-4 bg-card rounded-xl shadow-sm p-4">
					<div className="relative aspect-[2/1] overflow-hidden rounded-lg">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-2">
						<Badge variant="secondary">{post.category}</Badge>
						<h2 className="text-2xl font-bold tracking-tight group-hover:text-primary">
							{post.title}
						</h2>
						<p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<User className="h-4 w-4" />
								<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
									{post.author.name}
								</Link>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>{post.publishedAt}</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="h-4 w-4" />
								<span>{post.readingTime}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	if (variant === "list") {
		return (
			<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
				<div className="flex flex-col md:flex-row md:gap-8 bg-card rounded-xl shadow-sm p-4">
					<div className="relative w-full h-48 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-lg mb-4 md:mb-0">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div className="flex-1 space-y-2">
						<Badge variant="secondary">{post.category}</Badge>
						<h2 className="text-2xl font-bold tracking-tight group-hover:text-primary">
							{post.title}
						</h2>
						<p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<User className="h-4 w-4" />
								<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
									{post.author.name}
								</Link>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>{post.publishedAt}</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="h-4 w-4" />
								<span>{post.readingTime}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	if (variant === "compact") {
		return (
			<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
				<div className="flex gap-4 bg-card rounded-xl shadow-sm p-4">
					<div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-1">
						<h3 className="font-medium tracking-tight group-hover:text-primary">
							{post.title}
						</h3>
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<div className="hover:text-primary">
								<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
									{post.author.name}
								</Link>
							</div>
							<span>•</span>
							<span>{post.publishedAt}</span>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	if (variant === "minimal") {
		return (
			<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
				<div className="space-y-2">
					<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<h3 className="font-medium tracking-tight group-hover:text-primary line-clamp-2">
						{post.title}
					</h3>
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<div className="hover:text-primary">
							<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
								{post.author.name}
							</Link>
						</div>
						<span>•</span>
						<span>{post.publishedAt}</span>
					</div>
				</div>
			</Link>
		)
	}

	if (variant === "grid") {
		return (
			<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
				<div className="space-y-4 bg-card rounded-xl shadow-sm p-4">
					<div className="relative aspect-square overflow-hidden rounded-lg">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-2">
						<Badge variant="secondary">{post.category}</Badge>
						<h2 className="text-xl font-bold tracking-tight group-hover:text-primary">
							{post.title}
						</h2>
						<p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<User className="h-4 w-4" />
								<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
									{post.author.name}
								</Link>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>{post.publishedAt}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	if (variant === "masonry") {
		return (
			<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
				<div className="space-y-4 bg-card rounded-xl shadow-sm p-4">
					<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-2">
						<Badge variant="secondary">{post.category}</Badge>
						<h2 className="text-xl font-bold tracking-tight group-hover:text-primary">
							{post.title}
						</h2>
						<p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<User className="h-4 w-4" />
								<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
									{post.author.name}
								</Link>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>{post.publishedAt}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	if (variant === "carousel") {
		return (
			<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
				<div className="space-y-4 bg-card rounded-xl shadow-sm p-4">
					<div className="relative aspect-[2/1] overflow-hidden rounded-lg">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-2">
						<Badge variant="secondary">{post.category}</Badge>
						<h2 className="text-2xl font-bold tracking-tight group-hover:text-primary">
							{post.title}
						</h2>
						<p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<User className="h-4 w-4" />
								<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
									{post.author.name}
								</Link>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>{post.publishedAt}</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="h-4 w-4" />
								<span>{post.readingTime}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		)
	}

	// Default variant
	return (
		<Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
			<div className="space-y-4">
				<div className="relative aspect-[16/9] overflow-hidden rounded-lg">
					<Image
						src={post.coverImage}
						alt={post.title}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div className="space-y-2">
					<Badge variant="secondary">{post.category}</Badge>
					<h2 className="text-xl font-bold tracking-tight group-hover:text-primary">
						{post.title}
					</h2>
					<p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<User className="h-4 w-4" />
							<Link href={`/blog/author/${post.author.slug}`} className="hover:text-primary">
								{post.author.name}
							</Link>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4" />
							<span>{post.publishedAt}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
} 