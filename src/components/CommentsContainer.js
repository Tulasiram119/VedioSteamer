import React from 'react'

const CommentsContainer = () => {
    const comments = [{
        name:"Tulasiram",
        text:"Lorem ipsum dolor sit amet consectetur.",
        replies:[
            {
                name:"Tulasiram",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            },
            {
                name:"Tulasiram",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            }
        ]
    },
    {
        name:"Tulasiram",
        text:"Lorem ipsum dolor sit amet consectetur.",
        replies:[
            {
                name:"Tulasiram",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            },
            {
                name:"Tulasiram",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            }
        ]
    },
    {
        name:"Tulasiram",
        text:"Lorem ipsum dolor sit amet consectetur.",
        replies:[
            {
                name:"Tulasiram",
                text:"Lorem ipsum dolor sit amet consectetur.",
                replies:[
        
                ]
            }
        ]
    }]
  return (
    <div className='md:m-5 m-1 p-2'>
        <h1 className='md:text-2xl text-xl font-bold'>Comments:</h1>
    </div>
  )
}

export default CommentsContainer