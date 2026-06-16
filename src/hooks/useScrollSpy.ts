'use client';

import { useEffect, useState } from 'react';

type SectionId =
  | 'home'
  | 'about'
  | 'projects'
  | 'certificates'
  | 'mails'
  | 'lovable'
  | 'github'
  | 'organizations'
  | 'apps';

export function useScrollSpy(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        threshold: 0.45,
        rootMargin: '-20% 0px -55% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
