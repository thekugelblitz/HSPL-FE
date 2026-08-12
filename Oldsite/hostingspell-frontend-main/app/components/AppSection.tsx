import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AppSection() {
    return (
        <section className="py-16">
            <div className="w-full text-center">
                <h2 className="text-3xl font-bold mb-4">We've got an app for that</h2>
                <p className="text-muted-foreground mb-8">
                    Manage your hosting, domains and websites from your mobile device
                </p>
            </div>
            <div className="relative w-full">
                <Image
                    src="/img/app-supports.png"
                    width={1920}
                    height={500}
                    alt="App Grid"
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    );
}
