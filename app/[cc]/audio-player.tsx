"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  Music,
  Pause,
  PauseCircle,
  Play,
  PlayCircle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import { useState } from "react";
import useSound from "use-sound";

export function AudioPlayer() {
  const [play, { pause }] = useSound("/we-are-the-world.mp3", {
    volume: 0.5,
    loop: true,
  });

  const [isPlaying, setIsPlaying] = useState(false);

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

{
  /* <audio
id="song"
className="bg-blue-200"
src="/we-are-the-world.mp3"
autoPlay
loop
></audio>
<Button variant="ghost" size="icon">
<PlayCircle
  className="size-6"
  onClick={() => document.getElementById("song").play()}
/>
</Button> */
}
