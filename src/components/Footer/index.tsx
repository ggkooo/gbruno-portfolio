import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/content';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../ui';

const SOCIALS = [
    { href: profile.socials.github, label: 'GitHub', Icon: GitHubIcon },
    { href: profile.socials.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: profile.socials.instagram, label: 'Instagram', Icon: InstagramIcon },
];

const Footer = () => {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-page flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-8">
                <p className="text-center text-xs uppercase tracking-[0.2em] text-faint">
                    © {new Date().getFullYear()} {profile.fullName}
                </p>
                <div className="flex items-center gap-2">
                    {SOCIALS.map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted hover:border-primary/50 hover:text-white transition-colors"
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                    <a href="#home" aria-label="Back to top" className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white hover:bg-primary hover:text-black transition-colors">
                        <ArrowUp size={16} aria-hidden />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
