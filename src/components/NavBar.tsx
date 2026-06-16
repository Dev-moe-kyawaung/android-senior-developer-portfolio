import Link from 'next/link';
import { useI18n } from 'next-i18next';

export default function NavBar() {
  const { intl, locale, setLocale } = useI18n();

  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.certificates', path: '/certificates' },
    { key: 'nav.mails', path: '/mails' },
    { key: 'nav.lovable', path: '/lovable' },
    { key: 'nav.github', path: '/github' },
    { key: 'nav.organizations', path: '/organizations' },
    { key: 'nav.apps', path: '/apps' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-primary font-bold text-xl">
          Your Name
        </Link>
        
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.path}
              className="text-light hover:text-primary transition-colors text-sm"
            >
              {intl.t(item.key)}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <button
            onClick={() => setLocale(locale === 'en' ? 'my' : 'en')}
            className="px-3 py-1 bg-primary/20 text-primary rounded text-sm"
          >
            {locale === 'en' ? 'မြ' : 'En'}
          </button>
        </div>
      </div>
    </nav>
  );
}
