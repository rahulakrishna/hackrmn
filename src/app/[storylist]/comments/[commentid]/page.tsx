import CommentBlock from "./comment-block";

const Comments = async ({ params }: { params: { commentid: string } }) => {
  const response = await fetch(
    `https://api.hackerwebapp.com/item/${params.commentid}`
  );
  const data = await response.json();
  const allComments = data.comments;
  console.log(allComments);
  const topLevelComments = allComments.filter((comment) => comment.level === 0);
  return (
    <div>
      {topLevelComments.map((comment) => {
        return <CommentBlock comment={comment} key={comment.id} />;
      })}
    </div>
  );
};

export default Comments;
