import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: "tanimul.haque@brainstation-23.com",
    href: "mailto:tanimul.haque@brainstation-23.com",
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    hoverBorder: "hover:border-primary/40",
    hoverBg: "hover:bg-primary/5",
    testId: "contact-email",
  },
  {
    Icon: SiWhatsapp,
    label: "WhatsApp",
    value: "+880 191 299 5783",
    href: "https://wa.me/8801912995783",
    iconBg: "bg-[#25D366]/10 border-[#25D366]/20",
    iconColor: "text-[#25D366]",
    hoverBorder: "hover:border-[#25D366]/40",
    hoverBg: "hover:bg-[#25D366]/5",
    testId: "contact-whatsapp",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tanimulhaquekhan",
    href: "https://www.linkedin.com/in/tanimulhaquekhan/",
    iconBg: "bg-[#0A66C2]/10 border-[#0A66C2]/20",
    iconColor: "text-[#0A66C2]",
    hoverBorder: "hover:border-[#0A66C2]/40",
    hoverBg: "hover:bg-[#0A66C2]/5",
    testId: "contact-linkedin",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="contact-heading"
          >
            Let's build something.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
            Looking for an AI engineer who ships real products? Reach out — I'm always happy to talk.
          </p>

          <div className="flex flex-col gap-3 text-left">
            {contacts.map(({ Icon, label, value, href, iconBg, iconColor, hoverBorder, hoverBg, testId }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-testid={testId}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-secondary/20 transition-all duration-200 cursor-pointer no-underline ${hoverBorder} ${hoverBg}`}
              >
                <div className={`shrink-0 p-2.5 rounded-lg border ${iconBg} ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground truncate">
                    {value}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
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
