import React, { useEffect, useState } from 'react';
import { Gamepad2, Star } from 'lucide-react';
import ArcadeButton from '@/components/ArcadeButton';
import PixelDivider from '@/components/PixelDivider';
import MissionBriefing from '@/components/MissionBriefing';
import OperationalDirectives from '@/components/OperationalDirectives';
import RsvpForm from '@/components/RsvpForm';
import MarqueeText from '@/components/MarqueeText';
import PixelatedCharacter from '@/components/PixelatedCharacter';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulated loading sequence
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 15);
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setIsLoading(false), 500); // Show 100% for a moment
          return 100;
        }
        return newProgress;
      });
    }, 250);

    return () => clearInterval(loadingInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-arcade-black text-white p-4">
        <h1 className="font-press-start text-2xl text-neon-green mb-8 neon-text">Loading Game...</h1>
        <div className="w-full max-w-md h-8 bg-arcade-darker border-2 border-neon-green mb-4">
          <div 
            className="h-full bg-neon-green"
            style={{ width: `${loadingProgress}%`, transition: 'width 0.2s ease-in-out' }}
          ></div>
        </div>
        <p className="font-vt323 text-xl text-neon-cyan">{loadingProgress}%</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-arcade-black text-white">
      {/* Marquee Banner */}
      <div className="bg-sixers-red py-2">
        <MarqueeText 
          text="TOP SECRET · OPERATION 8-BIT SURPRISE · APRIL 1ST · MAINTAIN RADIO SILENCE" 
          className="font-pixel text-white"
          speed="normal"
        />
      </div>

      {/* Hero Section */}
      <header className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-arcade-black via-arcade-darker to-arcade-black opacity-70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sixers-blue/20 via-transparent to-transparent"></div>
          
          {/* Floating pixels and characters */}
          <PixelatedCharacter 
            type="star" 
            className="absolute top-10 left-[10%] animate-float" 
            size={6}
          />
          <PixelatedCharacter 
            type="ghost" 
            className="absolute top-20 right-[15%] animate-float" 
            size={6}
          />
          <PixelatedCharacter 
            type="trophy" 
            className="absolute bottom-10 left-[20%] animate-float" 
            size={6}
          />
          <PixelatedCharacter 
            type="player" 
            className="absolute bottom-20 right-[25%] animate-float" 
            size={6}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Gamepad2 className="text-neon-green w-16 h-16 animate-pulse" />
            </div>
            
            <h1 className="font-press-start text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight">
              <span className="text-sixers-red neon-text">OPERATION</span>
              <br />
              <span className="text-neon-cyan neon-text">8-BIT</span>
              <span className="text-neon-pink neon-text ml-2 md:ml-4">SURPRISE</span>
            </h1>
            
            <div className="flex justify-center my-4">
              <div className="font-pixel text-neon-yellow text-lg animate-blink">
                PHENOM GALLERY
              </div>
            </div>
            
            <p className="font-vt323 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Join us for a covert celebration honoring Morgan's promotion to Manager of Brand & Creative 
              and her successful launch of the 76ers retro arcade game project!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ArcadeButton 
                variant="green" 
                size="lg"
                onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              >
                RSVP NOW
              </ArcadeButton>
              
              <ArcadeButton 
                variant="blue"
                size="lg"
                onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              >
                MISSION DETAILS
              </ArcadeButton>
            </div>
          </div>
        </div>
      </header>

      <PixelDivider className="bg-neon-pink" />

      {/* Mission Briefing Section */}
      <section id="mission" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <MissionBriefing />
        </div>
      </section>

      <PixelDivider className="bg-neon-yellow" />

      {/* Operational Directives Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-arcade-black to-arcade-darker">
        <div className="container mx-auto px-4">
          <OperationalDirectives />
        </div>
      </section>

      <PixelDivider className="bg-neon-cyan" />

      {/* RSVP Section */}
      <section id="rsvp" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <RsvpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t-2 border-sixers-blue bg-arcade-darker">
        <div className="container mx-auto px-4">
          <p className="font-vt323 text-lg mb-2">
            <span className="text-neon-green">OPERATION 8-BIT SURPRISE</span> &copy; 2023
          </p>
          <div className="flex justify-center space-x-2">
            <Star className="h-4 w-4 text-sixers-red" />
            <Star className="h-4 w-4 text-white" />
            <Star className="h-4 w-4 text-sixers-blue" />
          </div>
          <p className="font-pixel text-xs mt-4 text-gray-400">
            PRESS START TO CONTINUE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
