import RelatedVidsCard from "./RelatedVidsCard";

export default function RelatedVids({ videos }) {
  return (
    <div className="RV-grid">
      {videos.map((video) => (
        <span key={video.id.videoId}>
          <RelatedVidsCard video={video} />
        </span>
      ))}
    </div>
  );
}
