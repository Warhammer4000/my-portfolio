import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="contact-heading">
            Let's build something.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Looking for an AI engineer who can take complex models and turn them into scalable, production-ready software? I'm currently open to new opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-14 px-8 text-base shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
              onClick={() => window.open('https://www.linkedin.com/in/tanimulhaquekhan/', '_blank')}
              data-testid="contact-linkedin"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              Connect on LinkedIn
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto h-14 px-8 text-base bg-secondary/30 border-white/10 hover:bg-white/5"
              onClick={() => window.location.href = 'mailto:hello@placeholder.com'}
              data-testid="contact-email"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send an Email
            </Button>
          </div>
        </motion.div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full p-6 text-center text-sm text-muted-foreground border-t border-white/5 mt-32">
        <p>© {new Date().getFullYear()} Tanimul Haque Khan. All rights reserved.</p>
      </footer>
    </section>
  );
}
