'use client';

import { motion } from 'framer-motion';
import i18n from '@/i18n/config';
import { personalInfo } from '@/data/personalInfo';
import { Github, ExternalLink } from 'lucide-react';

export default function GitHubSection() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-dark mb-4 text-center">
          {i18n.t('github.title')}
        </h2>
        <p className="text-dark/70 text-center mb-12">
          {i18n.t('github.subtitle')}
        </p>

        <div className="flex justify-center mb-12">
          <a
            href={personalInfo.github.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-dark text-light rounded hover:bg-primary transition-colors"
          >
            <Github size={20} />
            {i18n.t('github.view_profile')}
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.github.repositories.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark p-6 rounded-xl border border-primary/20"
            >
              <h3 className="text-lg text-light font-bold mb-2">{repo.name}</h3>
              <p className="text-light/70 text-sm mb-3">{repo.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-primary">{repo.language}</span>
                <span className="text-light/70">⭐ {repo.stars}</span>
              </div>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary text-sm mt-3"
              >
                <ExternalLink size={16} />
                View Repository
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
