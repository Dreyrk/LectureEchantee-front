import React from 'react'

import UserProfilePic from './UserProfilePic'

function CommentBox({ comment }) {
    return (
        <div className='flex my-4'>
            <div className='w-1/4'>
                <UserProfilePic pseudo={comment.user.pseudo} id={comment.user.id} />
            </div>
            <div className='flex flex-col w-3/4 gap-2'>
                <span className='text-xl font-semibold'>{comment.user.pseudo}</span>
                <p className='text'>{comment.text}</p>
            </div>
        </div>
    )
}

export default CommentBox
