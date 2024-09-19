import { useState } from 'react';
import { IComments } from '../interface/comments';

const useCommentTree = (commentsList) => {
  const [initialComments, setInitialComments] = useState<IComments[] | null>(commentsList);

  //Add and reply comment
  const insertNode = (tree: IComments[], commentId: number, newComment: IComments): IComments[] => {
    return tree.map((eachComment) => {
      if (eachComment.id === commentId) {
        return {
          ...eachComment,
          replies: [...eachComment.replies, newComment]
        };
      } else if (eachComment.replies && eachComment.replies.length > 0) {
        return {
          ...eachComment,
          replies: insertNode(eachComment.replies, commentId, newComment)
        };
      }
      return eachComment;  // Changed from newComment to eachComment
    });
  };
  

  const inserNewComment = (commentId: number | undefined, content: string) => {  
    const newComment: IComments = {
      id: Math.floor(Math.random() * 10000000),
      content,
      vote: 0,
      timestamp: `${new Date().toISOString()}`,
      replies: [],
    }

    if (commentId) {
      setInitialComments((prevComments) => insertNode(prevComments, commentId, newComment));
    } else {
      setInitialComments((prevComments) => [newComment, ...prevComments]);
    }
  }

  //Edit comment
  const editNode = (tree: IComments[], commentId: number | undefined, content: string): IComments[] => {
    return tree.map((eachComment) => {
      if (eachComment.id === commentId) {
        return {
          ...eachComment,
          content,
          timestamp: `${new Date().toISOString()}`,
        };
      } else if (eachComment.replies && eachComment.replies.length > 0) {
        return {
          ...eachComment,
          replies: editNode(eachComment.replies, commentId, content)
        };
      }
      return eachComment;  // Changed from newComment to eachComment
    });
  };
  

  const editComment = (commentId: number | undefined, content: string,) => {  
    setInitialComments((prevComments) => editNode(prevComments, commentId, content));
  }
  
  const deleteNode = (commentTree: IComments[], commentId: number | undefined): IComments[] => {
    return commentTree.reduce((acc, comment) => {
      if (comment.id === commentId) {
        return acc;
      } else if (comment.replies && comment.replies.length > 0) {
        return comment.replies = deleteNode(comment.replies, commentId)
      } else {
        return [...acc, comment];
      }
    }, [] as IComments[]);
  }


  const deleteComment = (commentId: number | undefined) => {
    console.log("Delte node : ", commentId)
    setInitialComments((prevComments) => deleteNode(prevComments, commentId));
  }
  return {
    initialComments,
    inserNewComment,
    editComment,
    deleteComment
  }
}

export default useCommentTree;