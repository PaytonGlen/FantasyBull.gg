import React from "react";

const YouTubeEmbed = ({ videoID }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&start=60`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default YouTubeEmbed;
