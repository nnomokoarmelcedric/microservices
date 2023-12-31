import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function VideoDetail() {
  const { videoId } = useParams();
  
  return (
    <div>
      <div>
        <video
          controls
          playsInline
          autoPlay
          style={{ width: "100%", height: "100vh" }}
          controlsList="nodownload"
        >
          <source src={ `http://192.168.100.4:8082/videos/${videoId}`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoDetail;
