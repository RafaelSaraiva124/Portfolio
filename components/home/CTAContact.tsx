"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/contactForm/contactForm";

export function CTAContact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-muted/30"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="p-6 sm:p-8 bg-card border border-border rounded-2xl">
              <h2
                id="contact-heading"
                className="font-anton text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 tracking-tight"
              >
                Let&apos;s Build
                <br />
                <span className="text-primary">Something Great</span>
              </h2>
              <p className="font-zalando text-lg text-muted-foreground leading-relaxed mb-8">
                Have a project in mind? I&apos;m always open to discussing new opportunities,
                interesting problems, or just connecting with fellow developers.
              </p>

              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-zalando text-sm text-muted-foreground">Email</p>
                    <a href="mailto:rafaelsaraivawork@gmail.com" className="font-zalando text-base text-foreground hover:text-primary transition-colors">
                      rafaelsaraivawork@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-zalando text-sm text-muted-foreground">Location</p>
                    <p className="font-zalando text-base text-foreground">Portugal (Remote)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <MessageSquare size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-zalando text-sm text-muted-foreground">Availability</p>
                    <p className="font-zalando text-base text-foreground">Open to freelance & full-time</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <motion.a
                  href="https://github.com/RafaelSaraiva124"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 bg-muted rounded-xl text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} aria-hidden="true" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rafael-saraiva-517bb6418/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 bg-muted rounded-xl text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} aria-hidden="true" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-2xl p-6 sm:p-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
          >
            <h3 className="font-anton text-2xl text-foreground mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}