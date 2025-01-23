import { motion } from 'framer-motion';
import {
  Card,
  CardContent
} from '@/components/ui/card';

const previousYears = [
  {
    year: '2024',
    title: 'Digital Revolution',
    description: 'Focused on sustainable technology solutions',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600',
    participants: '500+',
    projects: '120+',
    achievements: ['Best Innovation Award', 'Global Recognition', 'Industry Partnership'],
  },
  {
    year: '2023',
    title: 'Future Forward',
    description: 'Exploring the frontiers of AI and automation',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600',
    participants: '400+',
    projects: '100+',
    achievements: ['Record Participation', 'International Teams', 'Media Coverage'],
  },
  {
    year: '2022',
    title: 'Innovation Summit',
    description: 'Breaking barriers in tech innovation',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600',
    participants: '300+',
    projects: '80+',
    achievements: ['Community Impact', 'Tech Breakthroughs', 'Startup Launches'],
  },
];

export function PreviousYears() {
  return (
    <section id="previous-years" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 glowing-text">Previous Years</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our journey through the years and see how Designathon has evolved
            into one of the premier design events in the region.
          </p>
        </motion.div>

        <div className="timeline-container">
          {previousYears.map((year, index) => (
            <motion.div
              key={year.year}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-secondary border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={year.image}
                    alt={year.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/80" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold glowing-text">{year.year}</h3>
                    <p className="text-primary">{year.title}</p>
                  </div>
                </div>
                <CardContent className="mt-4">
                  <p className="text-muted-foreground mb-4">{year.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <div className="font-bold text-primary">{year.participants}</div>
                      <div className="text-sm text-muted-foreground">Participants</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <div className="font-bold text-primary">{year.projects}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {year.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}