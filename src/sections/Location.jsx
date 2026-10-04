import { MapPin } from 'lucide-react';
import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';
import GoldButton from '../components/wedding/GoldButton';

const Location = () => {
  return (
    <section id="Location" className="py-24 px-4 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Where We Celebrate"
          title="Location"
          subtitle="We would be honored to have you join us"
        />

    <Reveal>
  <div className="border border-champagne p-2 mb-8">
    <div className="h-80 w-full bg-champagne/20 overflow-hidden">
      <iframe
        title="Location"
        src="https://www.google.com/maps?q=Municipalité%20de%20Sousse%2C%20Sousse%2C%20Tunisia&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</Reveal>

        <Reveal delay={0.1}>
          <div className="text-center">
            <h3 className="font-display text-sub-heading text-dark-brown mb-2">
              mettre la localisation 
            </h3>
            <p className="text-taupe mb-8">
              Sousse , Tunisia 
            </p>
            <GoldButton href="https://maps.google.com" target="_blank" variant="outline">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Open Google Maps
              </span>
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Location;