import React from "react";
import { VideoData } from "./VideoData.js";
import "./Video.css";
import YouTubeEmbed from "./YoutubeVideo.js";

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      {" "}
      {/* Use the `video-gallery` class here */}
      {VideoData.map((video) => (
        <div key={video.id} className="video-card">
          {" "}
          {/* Use `video-card` for individual items */}
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <YouTubeEmbed videoID={video.id} />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
