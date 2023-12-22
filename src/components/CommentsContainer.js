import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
    const comments = [{
        name:"Tulasiram outer",
        text:"Lorem ipsum dolor sit amet consectetur.",
        replies:[
            {
                name:"Tulasiram first inner",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            },
            {
                name:"Tulasiram first inner",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            }
        ]
    },
    {
        name:"Tulasiram outer",
        text:"Lorem ipsum dolor sit amet consectetur.",
        replies:[
            {
                name:"Tulasiram second inner",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            },
            {
                name:"Tulasiram second inner",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            }
        ]
    },
    {
        name:"Tulasiram outer",
        text:"Lorem ipsum dolor sit amet consectetur.",
        replies:[
            {
                name:"Tulasiram third inner",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            }
        ]
    }]
  return (
    <div className='md:m-5 m-1 p-2'>
        <h1 className='md:text-2xl text-xl font-bold'>Comments:</h1>
        {comments.map((comment,index)=> <div className='px-2 bg-gray-200 m-2' key={index}><Comment data={comment} /></div>)}
        
    </div>
  )
}

export default CommentsContainer