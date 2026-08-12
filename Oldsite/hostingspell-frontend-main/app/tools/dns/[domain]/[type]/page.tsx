import PageClient from "../../PageClient";

interface PageProps {
    params: Promise<{
        domain: string;
        type: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    // Use `await` to get the actual params object from the Promise.
    const resolvedParams = await params;

    return (
        <PageClient
            initialDomain={resolvedParams.domain}
            initialType={resolvedParams.type}
        />
    );
}