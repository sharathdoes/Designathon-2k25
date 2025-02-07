import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Registration() {
  return (
    <section id="register" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Register Now</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Join us for an exciting 24-hour journey of innovation, creativity, and
            problem-solving. Limited spots available!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="w-32 h-32 rounded-lg relative">
              <img
                src="https://static-asset.inc42.com/unstop.png"
                alt="Unstop.com Logo"
                className="w-full h-full rounded-xl"
              />
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] georama-text group"
              asChild
            >
              <a
                href="https://unstop.com/hackathons/vnr-design-a-thon-2025-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-and-technology-vnrv-1383710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Register on Unstop
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}