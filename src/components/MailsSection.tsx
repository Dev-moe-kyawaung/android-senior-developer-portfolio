// File: src/components/MailsSection.tsx
'use client';

import { motion } from 'framer-motion';
import i18n from '@/i18n/config';
import { personalInfo } from '@/data/personalInfo';
import { Mail } from 'lucide-react';

export default function MailsSection() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-dark mb-4 text-center">
          {i18n.t('mails.title')}
        </h2>
        <p className="text-dark/70 text-center mb-12">
          {i18n.t('mails.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {personalInfo.mails.map((mail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark p-6 rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-primary" size={24} />
                <h3 className="text-xl text-light font-bold">{mail.title}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-light/80">
                  <span className="text-primary font-bold">From:</span> {mail.from}
                </p>
                <p className="text-light/60 text-sm">
                  <span className="text-primary font-bold">Date:</span> {mail.date}
                </p>
              </div>
              
              <p className="text-light/70 text-sm mb-4 italic">
                "{mail.content}"
              </p>
              
              {mail.image && (
                <img
                  src={mail.image}
                  alt={mail.title}
                  className="w-full h-32 object-cover rounded"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
