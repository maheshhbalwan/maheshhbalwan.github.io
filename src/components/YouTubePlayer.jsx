const YouTubePlayer = ({ isOpen, videoId, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-90" onClick={closeModal}>
      <div className="relative p-10 rounded-lg bg-white-500">
        <span onClick={closeModal} className="absolute top-0 right-0 text-2xl cursor-pointer text-black-500 hover:text-black">
          Close &times;
        </span>
        <iframe
          width="1120"
          height="630"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
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