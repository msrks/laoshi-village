"use client";

import { Button } from "@/components/ui/button";
import { Music, PauseCircle } from "lucide-react";
import { useState, useEffect } from "react";
import useSound from "use-sound";

export function AudioPlayer() {
  const [play, { pause }] = useSound("/alan.mp3", {
    volume: 0.5,
    loop: true,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [canAutoPlay, setCanAutoPlay] = useState(false);

  useEffect(() => {
    const handleInteraction = () => setCanAutoPlay(true);
    window.addEventListener("click", handleInteraction, { once: true });
    return () => window.removeEventListener("click", handleInteraction);
  }, [canAutoPlay]);

  useEffect(() => {
    if (canAutoPlay) {
      play();
      setIsPlaying(true);
    }
  }, [canAutoPlay, play]);

  return (
    <div className="flex items-center ml-2">
      {isPlaying ? (
        <Button variant="ghost" size="icon">
          <PauseCircle
            className="size-4"
            onClick={() => {
              pause();
              setIsPlaying(false);
            }}
          />
        </Button>
      ) : (
        <Button variant="ghost" size="icon">
          <Music
            className="size-4"
            onClick={() => {
              play();
              setIsPlaying(true);
            }}
          />
        </Button>
      )}
    </div>
  );
}
