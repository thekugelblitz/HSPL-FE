// components/wordpress/blocks/image.tsx
import { cn } from "@/lib/utils";

export function Image(props: any) {
    return (
        <figure className="my-12">
            <img
                {...props}
                className={cn("rounded-lg shadow-lg object-cover w-full h-auto", props.className)}
                loading="lazy"
            />
            {props.children && (
                <figcaption className="text-center text-sm text-muted-foreground mt-2">
                    {props.children}
                </figcaption>
            )}
        </figure>
    );
}