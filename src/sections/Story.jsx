import { motion } from 'framer-motion';
import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';

const Story = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description: (
        <>
          We began our journey together in 2023,
          <br />
          creating beautiful memories and
          <br />
          discovering life side by side.
        </>
      )
    },
    {
      year: "2025",
      title: "The Engagement",
      description: (
        <>
          In June 2025, we got engaged and took another
          <br />
          beautiful step toward spending our lives together.
        </>
      )
    },
    {
      year: "2026",
      title: "Our Wedding",
      description: (
        <>
          In 2026, we celebrate our love and begin
          <br />
          a new chapter of our lives together,
          <br />
          surrounded by our family and friends.
        </>
      )
    }
  ];

  return (
    <section id="Story" className="py-24 px-4 bg-warm-white">
      <div className="max-w-4xl mx-auto">

        <SectionTitle
          eyebrow="Our Journey"
          title="Our Story"
          subtitle="Every love story is beautiful, but ours is our favorite"
        />

        <div className="relative">

          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-champagne origin-top"
          />

          <div className="space-y-16">

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative min-h-[100px]"
              >

                {/* Year */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0
                      ? 'right-1/2 mr-5 text-right'
                      : 'left-1/2 ml-5 text-left'
                  }`}
                >
                  <Reveal delay={0.1}>
                    <span className="font-display text-2xl text-gold whitespace-nowrap">
                      {milestone.year}
                    </span>
                  </Reveal>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-2 w-3 h-3 rounded-full bg-gold transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0
                      ? 'ml-1/2 pl-12'
                      : 'pr-12 text-right'
                  }`}
                >
                  <Reveal delay={0.2}>
                    <div
                      className={`border-champagne ${
                        index % 2 === 0
                          ? 'border-l pl-6'
                          : 'border-r pr-6'
                      }`}
                    >

                      <h3 className="font-display text-sub-heading text-dark-brown mb-2">
                        {milestone.title}
                      </h3>

                      <p className="text-taupe leading-relaxed">
                        {milestone.description}
                      </p>

                    </div>
                  </Reveal>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;