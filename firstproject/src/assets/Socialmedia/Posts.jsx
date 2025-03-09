import React from 'react'

function Posts({posts}) {
  return (
 <>
  {posts.map((post) => (
              <div className="m-2 rounded border-blue-950 border-2 p-2 shadow-2xl">
                <h1 className="text-xl font-bold">{post.id}.</h1>
                {/* <h1>{post.userId}</h1> */}
                <h1 className="text-xl font-bold">{post.title}</h1>
                <h1>{post.body}</h1>
              </div>
            ))}
 </>
  )
}

export default Posts