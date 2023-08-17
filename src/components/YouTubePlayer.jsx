const YouTubePlayer = ({ isOpen, videoId, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  const extractVideoIdFromUrl = (videoId) => {
    const regex = /[?]v=([a-zA-Z0-9_-]{11})/;  //  Extract 11 characters after "?v="
    const match = videoId.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-90" onClick={closeModal}>
      <div className="relative p-10 bg-white rounded-lg">
        <span onClick={closeModal} className="absolute top-0 right-0 text-2xl text-black cursor-pointer hover:text-black">
          Close &times;
        </span>
        <iframe
          width="1120"
          height="630"
          src={`https://www.youtube.com/embed/${extractVideoIdFromUrl(videoId)}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubePlayer;