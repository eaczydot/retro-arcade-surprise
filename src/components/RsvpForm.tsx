
import React, { useState } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import ArcadeButton from './ArcadeButton';
import { toast } from '@/components/ui/use-toast';

const RsvpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Display success message
      toast({
        title: "RSVP CONFIRMED",
        description: `Agent ${formData.name}, your participation in Operation 8-Bit Surprise has been logged.`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        attending: 'yes',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="arcade-screen scanline p-6 md:p-8 max-w-2xl mx-auto">
      <h2 className="font-press-start text-center text-xl md:text-2xl mb-6 text-neon-cyan neon-text">
        <span className="inline-block animate-blink mr-2">»</span>
        RSVP
        <span className="inline-block animate-blink ml-2">«</span>
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-arcade-black p-4 border-2 border-neon-green">
          <label className="font-pixel text-sm text-neon-green block mb-2">AGENT NAME:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-arcade-darker border-2 border-neon-green p-2 font-vt323 text-xl text-white focus:outline-none focus:border-neon-yellow"
          />
        </div>
        
        <div className="bg-arcade-black p-4 border-2 border-neon-pink">
          <label className="font-pixel text-sm text-neon-pink block mb-2">COMMUNICATION CHANNEL:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-arcade-darker border-2 border-neon-pink p-2 font-vt323 text-xl text-white focus:outline-none focus:border-neon-yellow"
          />
        </div>
        
        <div className="bg-arcade-black p-4 border-2 border-sixers-blue">
          <label className="font-pixel text-sm text-sixers-blue block mb-2">MISSION PARTICIPATION:</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={formData.attending === 'yes'}
                onChange={handleChange}
                className="sr-only"
              />
              <span className={`inline-flex items-center justify-center w-10 h-10 ${formData.attending === 'yes' ? 'bg-neon-green text-arcade-black' : 'bg-arcade-darker text-white'} border-2 border-white mr-2`}>
                <CheckIcon className="w-6 h-6" />
              </span>
              <span className="font-vt323 text-xl">Attending</span>
            </label>
            
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={formData.attending === 'no'}
                onChange={handleChange}
                className="sr-only"
              />
              <span className={`inline-flex items-center justify-center w-10 h-10 ${formData.attending === 'no' ? 'bg-sixers-red text-white' : 'bg-arcade-darker text-white'} border-2 border-white mr-2`}>
                <XIcon className="w-6 h-6" />
              </span>
              <span className="font-vt323 text-xl">Cannot Attend</span>
            </label>
          </div>
        </div>
        
        <div className="bg-arcade-black p-4 border-2 border-neon-yellow">
          <label className="font-pixel text-sm text-neon-yellow block mb-2">SECRET MESSAGE:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full bg-arcade-darker border-2 border-neon-yellow p-2 font-vt323 text-xl text-white focus:outline-none focus:border-neon-cyan"
          />
        </div>
        
        <div className="flex justify-center">
          <ArcadeButton
            type="submit"
            variant="green"
            size="lg"
            disabled={isSubmitting}
            className={`font-press-start text-sm uppercase tracking-wider ${isSubmitting ? 'opacity-70' : ''}`}
          >
            {isSubmitting ? 'Processing...' : 'Confirm Participation'}
          </ArcadeButton>
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;
