export default function Comments({comments}){
return (
    <div className="comments-div">
        <ul className="comm-ul">
            {comments.map(comment=>(
            <li className="comments-li">
                <div className="comm-sty">
                <p>@{comment.name}</p>
                <p>{comment.comment}</p>
                </div>
            </li>
            )
            )}
        </ul>
    </div>
)
}