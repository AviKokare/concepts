import React, { useState } from 'react';
import { IComments } from '../interface/comments';
import useCommentTree from '../hooks/use-comment-tree';
import Comment from './comment';

interface IProps {
  commentsList: IComments[];
  onSubmitComment: (commentId: undefined | number, comment: string) => void;
  upVote: () => void;
  downVote: () => void;
  onEditComment: () => void;
  onDelete: () => void;
}

const NestedComments = ({ commentsList, onDelete, onEditComment, onSubmitComment, upVote, downVote }: IProps) => {
  const [globalComment, setGlobalComment] = useState("");

  const { initialComments, inserNewComment, editComment, deleteComment } = useCommentTree(commentsList); // custome hooks
  
  const handleCommentReply = (commentId: number | undefined, commentContent: string) => {
    inserNewComment(commentId, commentContent);
  }

  const handleCommentSubmit = () => {
    if (globalComment) {
      handleCommentReply(undefined, globalComment);
      setGlobalComment("");   
    }
  }

  const handleEditComment = (commentId: number | undefined, editedComment: string) => {
    editComment(commentId, editedComment)
  }

  const handleDeleteComment = (commentId: number | undefined) => {
    deleteComment(commentId);
  }


  return (
    <>
      <div className='add-comment'>

        <textarea className="comment-textarea" id="" rows={3} placeholder='Comment your thoughts' value={globalComment} onChange={(e) => setGlobalComment(e.target.value)} />
        <button onClick={() => handleCommentSubmit()} className='add-comment-button'>Add Comment</button>
      </div>

      {
        initialComments && initialComments.map((comment) => <Comment key={comment.id} comment={comment} onSubmitComment={handleCommentReply}handleEditComment={handleEditComment} handleDeleteComment={handleDeleteComment}/>)
      }
    </>
  )
}

export default NestedComments