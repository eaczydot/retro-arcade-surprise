import React from 'react';
import { Calendar, MapPin, Clock, Shirt } from 'lucide-react';
import PixelDivider from './PixelDivider';

const MissionBriefing: React.FC = () => {
  return (
    <div className="arcade-screen scanline p-6 md:p-8 text-white max-w-3xl mx-auto">
      <h2 className="font-press-start text-center text-xl md:text-2xl mb-6 text-neon-green neon-text">
        <span className="inline-block animate-blink mr-2">»</span>
        MISSION BRIEFING
        <span className="inline-block animate-blink ml-2">«</span>
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-arcade-black p-4 border-2 border-sixers-blue">
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-neon-cyan mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-pixel text-sm text-neon-cyan mb-1">DATE & TIME:</h3>
                <p className="font-vt323 text-xl">April 1st, 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-arcade-black p-4 border-2 border-sixers-red">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-neon-pink mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-pixel text-sm text-neon-pink mb-1">LOCATION:</h3>
                <p className="font-vt323 text-xl">Barcade, Center City, Philadelphia</p>
              </div>
            </div>
          </div>

          <div className="bg-arcade-black p-4 border-2 border-neon-yellow">
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-neon-yellow mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-pixel text-sm text-neon-yellow mb-1">PRE-MISSION MEETUP:</h3>
                <p className="font-vt323 text-xl">Tradesman's at 6:30 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-arcade-black p-4 border-2 border-neon-green">
            <div className="flex items-start">
              <Shirt className="w-5 h-5 text-neon-green mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-pixel text-sm text-neon-green mb-1">DRESS CODE:</h3>
                <p className="font-vt323 text-xl">Philadelphia 76ers gear; retro or neon accents optional</p>
              </div>
            </div>
          </div>
        </div>

        <PixelDivider className="bg-sixers-blue" />

        <div className="bg-arcade-black p-4 border-2 border-neon-pink">
          <h3 className="font-pixel text-sm text-neon-pink mb-2">OBJECTIVE:</h3>
          <p className="font-vt323 text-xl leading-relaxed">
            Surprise Morgan and celebrate her achievements as the new Manager of Brand & Creative for the 
            Philadelphia 76ers and her successful launch of a retro 8-bit arcade game project in partnership 
            with Crypto.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionBriefing;
