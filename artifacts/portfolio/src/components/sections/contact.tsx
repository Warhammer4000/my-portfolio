import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: "tanimul.haque@brainstation-23.com",
    href: "mailto:tanimul.haque@brainstation-23.com",
    cta: "Send an email",
    accent: "group-hover:text-primary group-hover:border-primary/40 group-hover:bg-primary/5",
    iconColor: "text-primary",
    glow: "group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.15)]",
    testId: "contact-email",
  },
  {
    Icon: SiWhatsapp,
    label: "WhatsApp",
    value: "+880 191 299 5783",
    href: "https://wa.me/8801912995783",
    cta: "Open WhatsApp",
    accent: "group-hover:text-[#25D366] group-hover:border-[#25D366]/40 group-hover:bg-[#25D366]/5",
    iconColor: "text-[#25D366]",
    glow: "group-hover:shadow-[0_0_24px_rgba(37,211,102,0.15)]",
    testId: "contact-whatsapp",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "tanimulhaquekhan",
    href: "https://www.linkedin.com/in/tanimulhaquekhan/",
    cta: "Connect on LinkedIn",
    accent: "group-hover:text-[#0A66C2] group-hover:border-[#0A66C2]/40 group-hover:bg-[#0A66C2]/5",
    iconColor: "text-[#0A66C2]",
    glow: "group-hover:shadow-[0_0_24px_rgba(10,102,194,0.15)]",
    testId: "contact-linkedin",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            data-testid="contact-heading"
          >
            Let's build something.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Looking for an AI engineer who ships real products? Reach out directly — I'm always happy to talk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contacts.map(({ Icon, label, value, href, cta, accent, iconColor, glow, testId }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-testid={testId}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group flex flex-col items-center gap-3 p-6 rounded-xl border border-white/10 bg-secondary/30 transition-all duration-300 cursor-pointer no-underline ${accent} ${glow}`}
              >
                <div className={`p-3 rounded-xl bg-white/5 border border-white/8 transition-colors duration-300 ${iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground break-all leading-snug">
                    {value}
                  </p>
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors mt-auto">
                  {cta} →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full p-6 text-center text-sm text-muted-foreground border-t border-white/5 mt-32">
        <p>© {new Date().getFullYear()} Tanimul Haque Khan. All rights reserved.</p>
      </footer>
    </section>
  );
}
