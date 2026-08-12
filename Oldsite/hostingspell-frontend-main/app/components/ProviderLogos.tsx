import React from 'react';

const providers = [
    {
        alt: 'cPanel',
        light: '/img/logo-cpanel.png',
        dark: '/img/logo-cpanel.png',
    },
    {
        alt: 'DigitalOcean',
        light: '/img/logo-digitalocean-black.png',
        dark: '/img/logo-digitalocean-white.png',
    },
    {
        alt: 'CloudLinux OS',
        light: '/img/logo-cloudlinuxos-black.png',
        dark: '/img/logo-cloudlinuxos-white.png',
    },
    {
        alt: `Let's Encrypt`,
        light: '/img/logo-letsencrypt-black.png',
        dark: '/img/logo-letsencrypt-white.png',
    },
    {
        alt: 'Softaculous',
        light: '/img/logo-softaculous-black.png',
        dark: '/img/logo-softaculous-white.png',
    },
    {
        alt: 'JetBackup',
        light: '/img/logo-jetbackup.png',
        dark: '/img/logo-jetbackup.png',
    },
    {
        alt: 'Imunify360',
        light: '/img/logo-imunify360-black.png',
        dark: '/img/logo-imunify360-white.png',
    },
    {
        alt: 'Intel',
        light: '/img/logo-intel-black.png',
        dark: '/img/logo-intel-white.png',
    },
];

export default function ProviderLogos() {
    return (
        <section className="w-full py-0 overflow-hidden relative">
            <div className="container mx-auto px-4 relative">
                <div className="text-center text-xs font-semibold text-muted-foreground mb-6 tracking-widest uppercase">
                    WITH THE SUPPORT OF GIANTS
                </div>

                {/* Desktop marquee */}
                <div className="hidden md:block overflow-hidden whitespace-nowrap relative">
                    {/* Fade overlays */}

                    <div className="logo-mask">


                        <div className="flex gap-24 animate-[scroll-logo_30s_linear_infinite] w-max">
                            <div className="flex gap-24">
                                {providers.map((provider, idx) => (
                                    <span
                                        key={provider.alt + idx}
                                        className="inline-flex items-center h-20 max-w-[150px]"
                                    >
                                        <img
                                            src={provider.light}
                                            alt={provider.alt}
                                            className="dark:hidden object-contain h-full w-auto"
                                        />
                                        <img
                                            src={provider.dark}
                                            alt={provider.alt}
                                            className="hidden dark:inline object-contain h-full w-auto"
                                        />
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-24" aria-hidden="true">
                                {providers.map((provider, idx) => (
                                    <span
                                        key={`dup-${provider.alt + idx}`}
                                        className="inline-flex items-center h-20 max-w-[150px]"
                                    >
                                        <img
                                            src={provider.light}
                                            alt={provider.alt}
                                            className="dark:hidden object-contain h-full w-auto"
                                        />
                                        <img
                                            src={provider.dark}
                                            alt={provider.alt}
                                            className="hidden dark:inline object-contain h-full w-auto"
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile marquee */}
                <div className="block md:hidden overflow-hidden whitespace-nowrap relative">
                    <div className="logo-mask">
                        <div className="flex gap-12 animate-[scroll-mobile_60s_linear_infinite] w-max">
                            <div className="flex gap-12">
                                {providers.map((provider, idx) => (
                                    <span
                                        key={provider.alt + idx}
                                        className="inline-flex items-center h-16 max-w-[150px]"
                                    >
                                        <img
                                            src={provider.light}
                                            alt={provider.alt}
                                            className="dark:hidden object-contain h-full w-auto"
                                        />
                                        <img
                                            src={provider.dark}
                                            alt={provider.alt}
                                            className="hidden dark:inline object-contain h-full w-auto"
                                        />
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-12" aria-hidden="true">
                                {providers.map((provider, idx) => (
                                    <span
                                        key={`dup-mobile-${provider.alt + idx}`}
                                        className="inline-flex items-center h-16 max-w-[150px]"
                                    >
                                        <img
                                            src={provider.light}
                                            alt={provider.alt}
                                            className="dark:hidden object-contain h-full w-auto"
                                        />
                                        <img
                                            src={provider.dark}
                                            alt={provider.alt}
                                            className="hidden dark:inline object-contain h-full w-auto"
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframes */}
            <style>{`
        @keyframes scroll-logo {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
          .logo-mask {
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

      `}</style>
        </section>
    );
}
