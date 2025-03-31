
import React from 'react';
import { ShieldAlert, Users, MapPin } from 'lucide-react';

const OperationalDirectives: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-press-start text-center text-xl md:text-2xl mb-6 text-sixers-red neon-text">
        <span className="inline-block animate-blink mr-2">»</span>
        OPERATIONAL DIRECTIVES
        <span className="inline-block animate-blink ml-2">«</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="arcade-screen scanline p-4 border-4 border-black relative flex flex-col items-center text-center">
          {/* Red corners */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-sixers-red"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-sixers-red"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-sixers-red"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-sixers-red"></div>
          
          <div className="bg-sixers-red rounded-full p-3 mb-4">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-pixel text-sm text-neon-pink mb-3">SECRECY</h3>
          <p className="font-vt323 text-lg">
            Maintain the element of surprise; ensure Morgan remains unaware.
          </p>
        </div>

        <div className="arcade-screen scanline p-4 border-4 border-black relative flex flex-col items-center text-center">
          {/* Blue corners */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-sixers-blue"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-sixers-blue"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-sixers-blue"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-sixers-blue"></div>
          
          <div className="bg-sixers-blue rounded-full p-3 mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-pixel text-sm text-neon-cyan mb-3">COORDINATION</h3>
          <p className="font-vt323 text-lg">
            Arrive at Tradesman's between 6:30 PM and 6:45 PM; proceed to Barcade as a group at 7:00 PM.
          </p>
        </div>

        <div className="arcade-screen scanline p-4 border-4 border-black relative flex flex-col items-center text-center">
          {/* Yellow corners */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-[#FFA031]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#FFA031]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#FFA031]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#FFA031]"></div>
          
          <div className="bg-[#FFA031] rounded-full p-3 mb-4">
            <MapPin className="w-6 h-6 text-arcade-black" />
          </div>
          <h3 className="font-pixel text-sm text-neon-yellow mb-3">LOCATION SHARING</h3>
          <p className="font-vt323 text-lg">
            If you share your location with Morgan, disable it or use a decoy device to avoid detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OperationalDirectives;
