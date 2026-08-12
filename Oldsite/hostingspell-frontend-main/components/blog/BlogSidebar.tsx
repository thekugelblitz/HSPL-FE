import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface RelatedPost {
	slug: string
	title: string
	coverImage: string
	publishedAt: string
}

interface Category {
	slug: string
	name: string
	count: number
}

interface Tag {
	slug: string
	name: string
}

interface BlogSidebarProps {
	relatedPosts: RelatedPost[]
	categories: Category[]
	popularTags: Tag[]
}

export function BlogSidebar({ relatedPosts, categories, popularTags }: BlogSidebarProps) {
	return (
		<aside className="space-y-8">
			{/* Related Posts */}
			<section>
				<h3 className="font-semibold text-lg mb-4">Related Posts</h3>
				<div className="space-y-4">
					{relatedPosts.map((post) => (
						<Card key={post.slug} className="overflow-hidden">
							<Link href={`/blog/${post.slug}`} className="flex gap-4 p-2">
								<div className="relative w-20 aspect-[4/3]">
									<Image
										src={post.coverImage}
										alt={post.title}
										fill
										className="object-cover rounded"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<h4 className="font-medium line-clamp-2 mb-1 group-hover:text-primary">
										{post.title}
									</h4>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="w-4 h-4" />
										<span>{post.publishedAt}</span>
									</div>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</section>

			{/* Categories */}
			<section>
				<h3 className="font-semibold text-lg mb-4">Categories</h3>
				<div className="space-y-2">
					{categories.map((category) => (
						<Link
							key={category.slug}
							href={`/blog/category/${category.slug}`}
							className="flex items-center justify-between p-2 rounded-lg hover:bg-muted group"
						>
							<span className="group-hover:text-primary">{category.name}</span>
							<Badge variant="secondary">{category.count}</Badge>
						</Link>
					))}
				</div>
			</section>

			{/* Popular Tags */}
			<section>
				<h3 className="font-semibold text-lg mb-4">Popular Tags</h3>
				<div className="flex flex-wrap gap-2">
					{popularTags.map((tag) => (
						<Link key={tag.slug} href={`/blog/tag/${tag.slug}`}>
							<Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
								{tag.name}
							</Badge>
						</Link>
					))}
				</div>
			</section>
		</aside>
	)
} 