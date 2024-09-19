import React, { useState } from 'react';
import { IComments } from '../interface/comments';

interface IProps {
    comment: IComments;
    onSubmitComment: (commentId: undefined | number, comment: string) => void;
    handleEditComment: (commentId: undefined | number, comment: string) => void;
    handleDeleteComment: (commentId: undefined | number) => void;
}

const Comment = ({ comment , onSubmitComment, handleEditComment, handleDeleteComment}: IProps) => {

    const [toggleExpand, setToggleExpand] = useState(false);
    const [toggleExpandEdit, setToggleExpandEdit] = useState<boolean>(false);
    const [replyComment, setReplyComment] = useState("");
    const [editComment, setEditComment] = useState(comment.content);

    const handleClick = () => {
        if (replyComment) {
            onSubmitComment(comment.id, replyComment)
            setReplyComment("");
        }
    }

    const handleEditSubmit = () => {
        handleEditComment(comment.id, editComment);
        setToggleExpandEdit(false);
    }

    return (
        <div className='single-comment'>
            <>
                
                {!toggleExpandEdit ? <p className='comment-content'>{comment.content}</p> : <>
                    <textarea className="comment-textarea" id="" rows={3} placeholder='Comment your thoughts' value={editComment} onChange={(e) => setEditComment(e.target.value)} />
                    <button onClick={() => handleEditSubmit()}>Edit Comment</button>
                </>}
                <p className='comment-vote'>Vote : {comment.vote}</p>
                <p className='comment-timestamp'>{comment.timestamp}</p>
            </>

            <div className="comment-actions">
                <button className='comment-actions-buttons' onClick={() => setToggleExpand(!toggleExpand)}>
                    {!toggleExpand ? 'Reply' : 'Hide Reply'}
                </button>
                <button className='comment-actions-buttons' onClick={() => setToggleExpandEdit(!toggleExpandEdit)}> 
                    Edit
                </button>
                <button className='comment-actions-buttons' onClick={() => handleDeleteComment(comment.id)}>
                    Delete
                </button>
            </div>

            {
                toggleExpand && (
                    <>
                        <div className='add-comment'>
                            <textarea className="comment-textarea" id="" rows={3} placeholder='Comment your thoughts' value={replyComment} onChange={(e) => setReplyComment(e.target.value)} />
                            <button onClick={() => handleClick()} className='comment-button'>Add Comment</button>
                        </div>

                        {
                            comment.replies.map((reply) => {
                                return <Comment key={reply.id} comment={reply} onSubmitComment={onSubmitComment} handleEditComment={handleEditComment} handleDeleteComment={handleDeleteComment}/>
                            })
                        }
                    </>
                )
            }
        </div>
    )
}

export default Comment