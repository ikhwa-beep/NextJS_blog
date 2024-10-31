import Link from "next/link";

export default function PostCard(props){
    const {post} = props
    return(
        <Link className="unstyled" href={`/post/${post.slug}`}>
            <div className="postCard">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="statsContainer">
                    <div>
                        <h5>When</h5>
                        <p>{post.when}</p>
                    </div>
                
                
                    <div>
                        <h5>Where</h5>
                        <p>{post.where}</p>
                        </div>
                </div>
            </div>

        </Link>
    )
}