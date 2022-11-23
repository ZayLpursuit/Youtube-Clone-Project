import RelatedVidsCard from "./RelatedVidsCard"

export default function RelatedVids({videos}){

    return (<div className="RV-grid">
        {videos.map(video=>(<RelatedVidsCard video={video}/>))}
        </div>
    )

}