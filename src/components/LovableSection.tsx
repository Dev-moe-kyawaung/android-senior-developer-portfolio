// File: src/components/LovableSection.tsx
'use client';

import { motion } from 'framer-motion';
import i18n from '@/i18n/config';
import { personalInfo } from '@/data/personalInfo';
import { ExternalLink } from 'lucide-react';

export default function LovableSection() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-light mb-4 text-center">
          {i18n.t('lovable.title')}
        </h2>
        <p className="text-light/70 text-center mb-12">
          {i18n.t('lovable.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.lovableWpa.map((wpa, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-light/5 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl text-light font-bold mb-3">{wpa.title}</h3>
              <p className="text-light/70 text-sm mb-4">{wpa.description}</p>
              
              <a
                href={wpa.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-light rounded hover:bg-secondary transition-colors"
              >
                <ExternalLink size={18} />
                Open WPA
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
