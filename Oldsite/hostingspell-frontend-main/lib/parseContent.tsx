import parse, { domToReact, HTMLReactParserOptions, DOMNode } from "html-react-parser";
import { Element } from "domhandler";
import React from "react";
import { cn } from "@/lib/utils";

const sanitizeAttribs = (attribs: Record<string, string>) => {
  const sanitized = { ...attribs };
  // Remove all on* event handlers
  Object.keys(sanitized).forEach(key => {
    if (key.toLowerCase().startsWith('on')) {
      delete sanitized[key];
    }
  });
  // Strip javascript: and data: schemes from href and src
  if (sanitized.href) {
    const href = sanitized.href.toLowerCase();
    if (href.startsWith('javascript:') || href.startsWith('data:')) {
      delete sanitized.href;
    }
  }
  if (sanitized.src) {
    const src = sanitized.src.toLowerCase();
    if (src.startsWith('javascript:') || src.startsWith('data:')) {
      delete sanitized.src;
    }
  }
  return sanitized;
};

/**
 * Parses HTML content from WordPress, applying Shadcn UI styling and proper spacing.
 * Handles common WordPress blocks and HTML tags for a consistent blog post display.
 * @param content The HTML string from a WordPress post.
 * @returns React elements representing the parsed content.
 */
export function parseBlogContent(content: string) {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            // Ensure we're dealing with an actual HTML element
            if (!(domNode instanceof Element)) return;

            const { name, attribs, children } = domNode;
            const domChildren = children as unknown as DOMNode[];
            const className = attribs?.class || "";

            switch (name) {
                case "p":
                    return (
                        <p className="mb-6 leading-relaxed text-base text-foreground">
                            {domToReact(domChildren, options)}
                        </p>
                    );

                case "h1":
                    return (
                        <h1 className="text-4xl sm:text-5xl font-extrabold mt-12 mb-8 leading-tight text-foreground">
                            {domToReact(domChildren, options)}
                        </h1>
                    );

                case "h2":
                    return (
                        <h2 className="text-3xl sm:text-4xl font-bold mt-10 mb-6 leading-snug text-foreground">
                            {domToReact(domChildren, options)}
                        </h2>
                    );

                case "h3":
                    return (
                        <h3 className="text-2xl sm:text-3xl font-semibold mt-8 mb-5 leading-normal text-foreground">
                            {domToReact(domChildren, options)}
                        </h3>
                    );

                case "h4":
                    return (
                        <h4 className="text-xl sm:text-2xl font-semibold mt-6 mb-4 text-foreground">
                            {domToReact(domChildren, options)}
                        </h4>
                    );

                case "h5":
                    return (
                        <h5 className="text-lg sm:text-xl font-semibold mt-5 mb-3 text-foreground">
                            {domToReact(domChildren, options)}
                        </h5>
                    );

                case "h6":
                    return (
                        <h6 className="text-base sm:text-lg font-semibold mt-4 mb-2 text-foreground">
                            {domToReact(domChildren, options)}
                        </h6>
                    );

                case "ul":
                    return (
                        // Increased pl-8 for more space, using list-disc and list-outside
                        <ul className="list-disc list-outside pl-8 space-y-2 mb-6 text-foreground/90">
                            {domToReact(domChildren, options)}
                        </ul>
                    );

                case "ol":
                    return (
                        // Increased pl-8 for more space, using list-decimal and list-outside
                        <ol className="list-decimal list-outside pl-8 space-y-2 mb-6 text-foreground/90">
                            {domToReact(domChildren, options)}
                        </ol>
                    );

                case "li":
                    // Removed ml-2 from li as list-outside pushes markers out
                    return (
                        <li>
                            {domToReact(domChildren, options)}
                        </li>
                    );

                case "a": {
                    const sanitizedAttribs = sanitizeAttribs(attribs);
                    return (
                        <a
                            {...sanitizedAttribs}
                            className={cn("text-primary hover:underline", className)}
                        >
                            {domToReact(domChildren, options)}
                        </a>
                    );
                }

                case "img": {
                    const sanitizedAttribs = sanitizeAttribs(attribs);
                    return (
                        <img
                            {...sanitizedAttribs}
                            className={cn(
                                "my-8 rounded-lg shadow-md object-cover w-full h-auto",
                                className
                            )}
                        />
                    );
                }

                case "blockquote":
                    return (
                        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-muted-foreground italic bg-accent/20 rounded-r-lg">
                            {domToReact(domChildren, options)}
                        </blockquote>
                    );

                case "pre":
                    return (
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground font-mono my-8 shadow-inner">
                            {domToReact(domChildren, options)}
                        </pre>
                    );

                case "code":
                    // Handle inline code
                    return (
                        <code className="bg-muted px-1 py-0.5 rounded text-sm text-primary font-mono whitespace-nowrap">
                            {domToReact(domChildren, options)}
                        </code>
                    );

                case "strong":
                case "b":
                    return (
                        <strong className="font-bold text-foreground">
                            {domToReact(domChildren, options)}
                        </strong>
                    );

                case "em":
                case "i":
                    return (
                        <em className="italic text-foreground/90">
                            {domToReact(domChildren, options)}
                        </em>
                    );

                case "hr":
                    return <hr className="my-12 border-t-2 border-muted-foreground/30" />;

                case "table":
                    return (
                        <div className="w-full overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse border border-muted-foreground/20 rounded-lg">
                                {domToReact(domChildren, options)}
                            </table>
                        </div>
                    );

                case "thead":
                    return (
                        <thead className="bg-muted-foreground/10">
                            {domToReact(domChildren, options)}
                        </thead>
                    );

                case "th":
                    return (
                        <th className="p-3 border border-muted-foreground/20 text-sm font-semibold text-foreground">
                            {domToReact(domChildren, options)}
                        </th>
                    );

                case "tbody":
                    return <tbody>{domToReact(domChildren, options)}</tbody>;

                case "tr":
                    return (
                        <tr className="even:bg-muted-foreground/5">
                            {domToReact(domChildren, options)}
                        </tr>
                    );

                case "td":
                    return (
                        <td className="p-3 border border-muted-foreground/20 text-sm text-foreground/90">
                            {domToReact(domChildren, options)}
                        </td>
                    );

                case "figure":
                    return (
                        <figure className="my-8 text-center">
                            {domToReact(domChildren, options)}
                        </figure>
                    );

                case "figcaption":
                    return (
                        <figcaption className="text-sm text-muted-foreground mt-2">
                            {domToReact(domChildren, options)}
                        </figcaption>
                    );

                case "div":
                    // Specific handling for WordPress-generated divs with classes
                    if (className.includes("wp-block-quote")) {
                        return (
                            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-muted-foreground italic bg-accent/20 rounded-r-lg">
                                {domToReact(domChildren, options)}
                            </blockquote>
                        );
                    }
                    if (className.includes("wp-block-image")) {
                        return (
                            <div className="my-8 rounded-lg overflow-hidden shadow-md">
                                {domToReact(domChildren, options)}
                            </div>
                        );
                    }
                    if (className.includes("wp-block-code")) {
                        return (
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground font-mono my-8 shadow-inner">
                                {domToReact(domChildren, options)}
                            </pre>
                        );
                    }
                    // Default div styling for general purpose
                    return (
                        <div className={cn("mb-6", className)}>
                            {domToReact(domChildren, options)}
                        </div>
                    );

                default:
                    // Fallback for unhandled tags, apply a default margin
                    return React.createElement(
                        name,
                        { className: cn("mb-6", className) },
                        domToReact(domChildren, options)
                    );
            }
        },
    };

    return parse(content, options);
}