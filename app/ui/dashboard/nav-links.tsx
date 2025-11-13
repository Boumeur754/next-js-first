'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Accueil', href: '/dashboard', icon: HomeIcon },
  { name: 'Factures', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Clients', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium transition-all duration-200 hover:scale-105 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-primary-100 text-primary-700 border-r-4 border-primary-500': pathname === link.href,
                'bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-600': pathname !== link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}