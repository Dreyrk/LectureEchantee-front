import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"

import CommentBox from '../components/CommentBox.jsx';
import Loader from './Loader.jsx';
import getAPIUrl from '../utils/getAPIUrl.js';
import useCurrentUserContext from '../hooks/useCurrentUserContext.js';


function Comments({ data, isLoading, isError, updateData }) {
    const { user } = useCurrentUserContext()
    const [comment, setComment] = useState({
        user: {
            id: user._id,
            pseudo: user.pseudo
        },
        text: ""
    });
    const postComment = async () => {
        const BASE_URL = getAPIUrl()
        if (comment === "") {
            return
        } else {
            try {
                const opts = {
                    method: "PUT",
                    body: JSON.stringify({ comment }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
                const res = await fetch(`${BASE_URL}/manhwa/${data._id}/infos`, opts);

                if (res.status === 200) {
                    setComment("");
                    updateData()
                } else {
                    console.error("Failed to post comment")
                }

            } catch (e) {
                console.error(e.message)
            }
        }
    }
    if (!data && isLoading) {
        return <Loader />
    } else if (!data && isError) {
        return <p>ERROR</p>
    } else {
        return (
            <div className='flex flex-col gap-6 my-10'>
                <div className='relative'>
                    <input value={comment.text} onChange={(e) => setComment({ ...comment, text: e.target.value })} type="text" placeholder='Write a comment...' className='w-full px-3 py-4 text' />
                    <button onClick={postComment} className='absolute z-50 p-2 rounded-full top-1 right-3 hover:scale-125 bg-secondary-plus' type='button'>
                        <AiOutlineSend size={30} />
                    </button>
                </div>
                {data?.comments.map((comment) => (
                    <CommentBox comment={comment} />
                ))}
            </div>
        )
    }
}

export default Comments
