import { useState, useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/music/background.mp3');
    audio.loop = true;
    audioRef.current = audio;

    // Try to start music automatically
    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay was blocked by the browser.');
        setIsPlaying(false);
      }
    };

    startMusic();

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Unable to play music:', error);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-champagne bg-warm-white/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-warm-white transition-all duration-300 shadow-sm"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Music2 className="w-5 h-5 animate-spin-slow" />
      ) : (
        <Music className="w-5 h-5" />
      )}
    </button>
  );
};

export default MusicPlayer;