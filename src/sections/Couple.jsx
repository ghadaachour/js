import borhene from '../assets/images/insert2.jpeg';
import ghada from '../assets/images/insert.jpg';
import SectionTitle from '../components/wedding/SectionTitle';
import ImageReveal from '../components/animation/ImageReveal';
import Reveal from '../components/animation/Reveal';

const Couple = () => {
  return (
    <section id="Couple" className="py-24 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          eyebrow="Our Story"
          title="The Couple"
          subtitle="A beautiful story of two people who found each other"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

          {/* Groom - Borhene */}
          <div className="text-center w-full max-w-xs">

            <ImageReveal
              src={borhene}
              alt="Borhene - The Groom"
              className="w-64 h-64 md:w-72 md:h-72 mx-auto mb-6 border border-champagne p-2 object-contain"
            />

            <Reveal delay={0.1}>
              <h3 className="font-display text-sub-heading text-dark-brown mb-2">
                Borhene
              </h3>

              <p className="text-taupe mb-1">
                The Groom
              </p>

              <p className="text-taupe mb-4">
                With all our love
              </p>
            </Reveal>

          </div>

          {/* Heart Divider */}
          <Reveal delay={0.2}>
            <div className="font-script text-4xl text-gold hidden md:block">
              ♡
            </div>
          </Reveal>

          {/* Bride - Ghada */}
          <div className="text-center w-full max-w-xs">

            <ImageReveal
              src={ghada}
              alt="Ghada - The Bride"
              className="w-64 h-64 md:w-72 md:h-72 mx-auto mb-6 border border-champagne p-2 object-contain"
            />

            <Reveal delay={0.1}>
              <h3 className="font-display text-sub-heading text-dark-brown mb-2">
                Ghada
              </h3>

              <p className="text-taupe mb-1">
                The Bride
              </p>

              <p className="text-taupe mb-4">
                With all our love
              </p>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Couple;