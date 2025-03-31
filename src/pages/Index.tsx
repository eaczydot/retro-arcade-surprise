
import React, { useEffect, useState } from 'react';
import { Gamepad2, Star, ExternalLink } from 'lucide-react';
import ArcadeButton from '@/components/ArcadeButton';
import PixelDivider from '@/components/PixelDivider';
import MissionBriefing from '@/components/MissionBriefing';
import OperationalDirectives from '@/components/OperationalDirectives';
import RsvpForm from '@/components/RsvpForm';
import MarqueeText from '@/components/MarqueeText';
import PixelatedCharacter from '@/components/PixelatedCharacter';
import GameCard from '@/components/GameCard';
import PixelLogo from '@/components/PixelLogo';

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#001F5B] text-white p-4">
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
    <div className="min-h-screen bg-[#001F5B] text-white">
      {/* Header Border */}
      <PixelDivider variant="header" />

      {/* Marquee Banner */}
      <div className="py-2">
        <MarqueeText 
          text="TOP SECRET · OPERATION 8-BIT SURPRISE · APRIL 1ST · MAINTAIN RADIO SILENCE" 
          className="font-pixel text-white"
          speed="normal"
        />
      </div>

      {/* Hero Section */}
      <header className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001F5B] via-arcade-darker to-[#001F5B] opacity-70"></div>
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
            <div className="flex justify-center mb-4">
              {/* 76ers Logo */}
              <div className="mb-4 relative w-20 h-20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sixers-red font-bold text-5xl" style={{ fontFamily: 'Arial, sans-serif' }}>7</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-5xl ml-4 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>6</span>
                </div>
              </div>
            </div>
            
            {/* Pixelated Title from game */}
            <PixelLogo size="lg" />
            
            {/* Subtitle */}
            <div className="bg-black inline-block px-4 py-2 mb-6">
              <h2 className="font-press-start text-xl tracking-wide">
                <span className="text-sixers-red">A</span>
                <span className="text-[#FFA031]">F</span>
                <span className="text-[#0AA757]">T</span>
                <span className="text-sixers-blue">E</span>
                <span className="text-sixers-red">R</span>
                <span className="text-white mx-1">·</span>
                <span className="text-[#FFA031]">D</span>
                <span className="text-[#0AA757]">A</span>
                <span className="text-sixers-blue">R</span>
                <span className="text-sixers-red">K</span>
              </h2>
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

      {/* Game Cards Section */}
      <section className="py-12 bg-[#001F5B]">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-center text-xl md:text-2xl mb-10 text-white">
            <span className="inline-block animate-blink mr-2">»</span>
            THE GAMES
            <span className="inline-block animate-blink ml-2">«</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <GameCard 
              title="Spectrum Sprint" 
              imageSrc="/lovable-uploads/49c747ce-9379-4282-a6f6-8484e3b4ea19.png"
            />
            <GameCard 
              title="Buckets on Broad" 
              imageSrc="/lovable-uploads/2184bd8a-2017-4044-958d-3e041db37f33.png"
            />
            <GameCard 
              title="Spectrum Showdown" 
              imageSrc="/lovable-uploads/ec61cbef-24fa-4994-8df2-108f3a3be449.png"
            />
          </div>
          
          <div className="text-center mt-8">
            <a href="https://sixersgame.com" target="_blank" rel="noopener noreferrer" className="font-vt323 text-xl inline-flex items-center text-neon-cyan hover:text-neon-green transition-colors">
              Visit SIXERSGAME.COM
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <PixelDivider className="bg-neon-pink" />

      {/* Mission Briefing Section */}
      <section id="mission" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <MissionBriefing />
        </div>
      </section>

      <PixelDivider className="bg-neon-yellow" />

      {/* Operational Directives Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#001F5B] to-arcade-darker">
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
          
          <div className="mt-6">
            <p className="font-vt323 text-sm text-gray-500">
              Presented by
              <span className="text-white ml-2">CRYPTO.COM</span>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Footer Border */}
      <PixelDivider variant="footer" />
    </div>
  );
};

export default Index;
