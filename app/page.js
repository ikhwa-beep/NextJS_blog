import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata('posts')
  console.log(postMetadata)
  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return (
            <PostCard key={postIndex} post={post}/>

          )
        })}
      
        </div>


    </main>
    
  );
}
