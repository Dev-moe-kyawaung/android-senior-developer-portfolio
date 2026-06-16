import { motion } from 'framer-motion';
import { useI18n } from 'next-i18next';
import { personalInfo } from '@/data/personalInfo';
import { ExternalLink, Github, Download } from 'lucide-react';

export default function AppsCollection() {
  const { intl } = useI18n();

  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-dark mb-4 text-center">
          {intl.t('apps.title')}
        </h2>
        <p className="text-dark/70 text-center mb-12">
          {intl.t('apps.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.apps.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              
              <h3 className="text-xl text-light font-bold mb-2">{app.title}</h3>
              <p className="text-light/70 text-sm mb-3">{app.description}</p>
              
              <div className="flex gap-2 mb-4">
                {app.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {app.githubUrl && (
                  <a
                    href={app.githubUrl}
                    target="_blank"
                    className="flex items-center gap-1 text-light/70 hover:text-primary text-sm"
                  >
                    <Github size={16} />
                    {intl.t('apps.view_code')}
                  </a>
                )}
                {app.liveUrl && (
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    className="flex items-center gap-1 text-light/70 hover:text-primary text-sm"
                  >
                    <ExternalLink size={16} />
                    {intl.t('apps.live_demo')}
                  </a>
                )}
                {app.downloadUrl && (
                  <a
                    href={app.downloadUrl}
                    target="_blank"
                    className="flex items-center gap-1 text-light/70 hover:text-primary text-sm"
                  >
                    <Download size={16} />
                    {intl.t('apps.download')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
