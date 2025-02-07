import { motion } from 'framer-motion';
import { Shield, Factory, Brain } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const domains = [
  {
    icon: Shield,
    title: 'Cyber Security and Gender Diversity',
    description: 'Address digital security challenges and promote inclusive technology solutions for gender equality.',
  },
  {
    icon: Factory,
    title: 'Industry 4.0 and Sustainability',
    description: 'Develop sustainable smart manufacturing solutions that integrate IoT and green technologies.',
  },
  {
    icon: Brain,
    title: 'Open Innovation',
    description: 'Create innovative solutions across domains using emerging technologies and collaborative approaches.',
  },
];

export function EventDetails() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="diagonal-box p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-4 glowing-text">About VNR VJIET</h2>
            <p className="text-muted-foreground">
            Established in 1995 by the Vignana Jyothi Society, the Vallurupalli Nageswara Rao Vignana Jyothi Institute 
          of Engineering and Technology (VNRVJIET) is recognized by the UGC as a "College with Potential for Excellence"
           and has been accredited by NAAC with A++ with the highest CGPA in South India of 3.73 out of 4. Many awards have been bestowed 
           upon the college, including a "Best Innovation by Engineering Institute" at the Global Education Summit, "Best Managed College 
            with CSR" from the Telangana IT Association, and so on.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"
              alt="VNR VJIET Campus"
              className="rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold glowing-text mb-4">Event Overview</h3>
          <p className="text-muted-foreground max-w-6xl mx-auto">
          Step into the mystical realm of VNR DESIGN-A-THON, a 24-hour hackathon where creativity 
          meets innovation! This crucible of design thinking fuels collaboration, 
          problem-solving, and technical excellence. Guided by industry experts, participants craft groundbreaking
           solutions aligned with the given prompts. With incredible prizes and an electrifying atmosphere, 
           VNR DESIGN-A-THON is your gateway to transforming imagination into reality. Heed the call,<br/ > embrace the challenge, 
           and let the magic unfold!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-secondary border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <domain.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="glowing-text">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {domain.description}
                  </CardDescription>
                  <button
                    onClick={() => navigate('/prob-stats', { state: { selectedDomain: domain.title === "Cyber Security and Gender Diversity" ? 'cyberSecurityGenderDiversity' : domain.title === "Industry 4.0 and Sustainability" ? 'industrySustainability' : 'openInnovation' } })}
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Problem Statements 
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}