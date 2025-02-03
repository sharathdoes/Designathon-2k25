import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { EventDetails } from '@/components/EventDetails';
import { PreviousYears } from '@/components/PreviousYears';
import { Registration } from '@/components/Registration';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ThemeProvider } from '@/components/theme-provider';
import { TimelineDemo } from './components/PreviousYearsTimeline';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="designathon-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <EventDetails />
          <PreviousYears />
          <TimelineDemo></TimelineDemo>
          <Registration />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;