import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Info } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface InfoPopoverProps {
    content: string
}

export default function InfoPopover({ content }: InfoPopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button type="button" className="inline-flex items-center border-0 bg-transparent p-0">
                    <Info className="ms-1 w-3 h-3 text-gray-400 cursor-pointer flex-shrink-0" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="max-w-xs bg-blue-500 text-white dark:text-white text-xs leading-snug">
                <ReactMarkdown
                    components={{
                        a: ({ node, ...props }) => (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-white text-xs"
                            />
                        ),
                        strong: ({ node, ...props }) => (
                            <strong className="font-semibold text-xs" {...props} />
                        ),
                        em: ({ node, ...props }) => (
                            <em className="italic text-xs" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul className="list-disc pl-4 text-xs" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                            <ol className="list-decimal pl-4 text-xs" {...props} />
                        ),
                        p: ({ node, ...props }) => (
                            <p className="text-xs mb-1" {...props} />
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </PopoverContent>
        </Popover>
    )
}
