// lib/parse-blog-content.tsx

import parse, { domToReact, HTMLReactParserOptions, DOMNode } from "html-react-parser";
import { Element } from "domhandler";
import React from "react";
import type { ElementType } from 'react';
import { cn } from "../lib/utils";

// HTML tag list type
type ValidHtmlTags = 'div' | 'span' | 'p' | 'a' | 'img' | 'ul' | 'ol' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 
                     'article' | 'section' | 'nav' | 'aside' | 'header' | 'footer' | 'main' | 'blockquote' | 'figure' | 
                     'figcaption' | 'pre' | 'code' | 'em' | 'strong' | 'i' | 'b' | 'u' | 's' | 'table' | 'thead' | 'tbody' | 
                     'tr' | 'th' | 'td';

// Import individual block components
// Note: Using dynamic imports since not all components may exist yet
const { FallbackBlock } = await import("../components/wordpress/blocks/fallback-block");
const { Paragraph } = await import("../components/wordpress/blocks/paragraph");
const { Heading } = await import("../components/wordpress/blocks/heading");
const { Image } = await import("../components/wordpress/blocks/image");
const { List } = await import("../components/wordpress/blocks/list");
const { ListItem } = await import("../components/wordpress/blocks/list-item");
const { Quote } = await import("../components/wordpress/blocks/quote");
const { Embed } = await import("../components/wordpress/blocks/embed");
const { Columns } = await import("../components/wordpress/blocks/columns");
const { Gallery } = await import("../components/wordpress/blocks/gallery");
const { Cover } = await import("../components/wordpress/blocks/cover");
const { MediaText } = await import("../components/wordpress/blocks/media-text");
const { Table } = await import("../components/wordpress/blocks/table");
const { Code } = await import("../components/wordpress/blocks/code");
const { Preformatted } = await import("../components/wordpress/blocks/preformatted");
const { Separator } = await import("../components/wordpress/blocks/separator");
const { Spacer } = await import("../components/wordpress/blocks/spacer");
const { Button } = await import("../components/wordpress/blocks/button");
const { LatestPosts } = await import("../components/wordpress/blocks/latest-posts");
const { WooCommerceProductGrid } = await import("../components/wordpress/blocks/woocommerce-product-grid");

const sanitizeAttribs = (attribs: Record<string, string>) => {
  const sanitized = { ...attribs };
  Object.keys(sanitized).forEach(key => {
    if (key.toLowerCase().startsWith('on')) delete sanitized[key];
  });
  if (sanitized.href) {
    const href = sanitized.href.toLowerCase();
    if (href.startsWith('javascript:') || href.startsWith('data:')) delete sanitized.href;
  }
  if (sanitized.src) {
    const src = sanitized.src.toLowerCase();
    if (src.startsWith('javascript:') || src.startsWith('data:')) delete sanitized.src;
  }
  return sanitized;
};

// Initialize component mapping

/**
 * A mapping of WordPress Gutenberg block classes to their corresponding React components.
 */
const blockMapping: { [key: string]: ElementType } = {
    "wp-block-paragraph": Paragraph,
    "wp-block-heading": Heading,
    "wp-block-image": Image,
    "wp-block-gallery": Gallery,
    "wp-block-list": List,
    "wp-block-quote": Quote,
    "wp-block-embed": Embed,
    "wp-block-columns": Columns,
    "wp-block-cover": Cover,
    "wp-block-media-text": MediaText,
    "wp-block-table": Table,
    "wp-block-code": Code,
    "wp-block-preformatted": Preformatted,
    "wp-block-separator": Separator,
    "wp-block-spacer": Spacer,
    "wp-block-button": Button,
    "wp-block-latest-posts": LatestPosts,
    "wp-block-woocommerce-product-grid": WooCommerceProductGrid,
};

/**
 * A mapping of HTML tags to their corresponding React components.
 */
const tagMapping: { [key: string]: React.ElementType } = {
    p: Paragraph,
    h1: (props) => <Heading {...props} level={1} />,
    h2: (props) => <Heading {...props} level={2} />,
    h3: (props) => <Heading {...props} level={3} />,
    h4: (props) => <Heading {...props} level={4} />,
    h5: (props) => <Heading {...props} level={5} />,
    h6: (props) => <Heading {...props} level={6} />,
    ul: (props) => <List {...props} className={cn(props.className, 'nested:my-0 nested:pl-4')} />,
    ol: (props) => <List {...props} ordered className={cn(props.className, 'nested:my-0 nested:pl-4')} />,
    li: ListItem,
    blockquote: Quote,
    pre: Preformatted,
    hr: Separator,
    table: Table,
};

interface BlockProps {
    children?: React.ReactNode;
    className?: string;
    domChildren?: DOMNode[];
    options?: HTMLReactParserOptions;
    [key: string]: any;
}

interface FallbackBlockProps {
    children: React.ReactNode;
    className?: string;
    tagName: ValidHtmlTags;
    [key: string]: any;
}

const isValidHtmlTag = (tag: string): tag is ValidHtmlTags => {
    return tag.toLowerCase() in {
        div: true, span: true, p: true, a: true, img: true, ul: true, ol: true, li: true,
        h1: true, h2: true, h3: true, h4: true, h5: true, h6: true, article: true,
        section: true, nav: true, aside: true, header: true, footer: true, main: true,
        blockquote: true, figure: true, figcaption: true, pre: true, code: true,
        em: true, strong: true, i: true, b: true, u: true, s: true, table: true,
        thead: true, tbody: true, tr: true, th: true, td: true
    };
};

/**
 * Parses HTML content from WordPress, applying modern UI styling and handling a wide range of Gutenberg blocks.
 * @param content The HTML string from a WordPress post.
 * @returns React elements representing the parsed content.
 */
export async function parseBlogContent(content: string) {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (!(domNode instanceof Element)) return;

            const { name, attribs, children } = domNode;
            const domChildren = children as unknown as DOMNode[];
            const className = attribs?.class || "";

            // Find a matching block component based on the class name
            const BlockComponent = Object.keys(blockMapping).find(key => className.includes(key));

            if (BlockComponent) {
                const Component = blockMapping[BlockComponent] as React.ComponentType<BlockProps>;
                const props: BlockProps = {
                    ...sanitizeAttribs(attribs),
                    domChildren,
                    options,
                    children: domToReact(domChildren, options)
                };
                return <Component {...props} />;
            }

            // Find a matching tag component
            if (tagMapping[name]) {
                const Component = tagMapping[name] as React.ComponentType<BlockProps>;
                const props: BlockProps = {
                    ...sanitizeAttribs(attribs),
                    children: domToReact(domChildren, options)
                };
                return <Component {...props} />;
            }

            // Fallback for any unhandled blocks or tags
            // Only use valid HTML tags for the FallbackBlock
            const validTagName = isValidHtmlTag(name) ? name : 'div';
            const fallbackProps: FallbackBlockProps = {
                ...sanitizeAttribs(attribs),
                tagName: validTagName,
                children: domToReact(domChildren, options)
            };
            return <FallbackBlock {...fallbackProps} />;
        },
    };

    return parse(content, options);
}