import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { parseBlogContent } from "@/lib/parseContent"

type BlogContentProps = {
	content: string
	className?: string
}

export function BlogContent({ content, className }: BlogContentProps) {
	return (
		<ScrollArea className="w-full">
			<div className={cn("mx-auto max-w-[728px] space-y-6", className)}>
				{parseBlogContent(content)}
			</div>
		</ScrollArea>
	)
}
