import axios from 'axios'
import React from 'react'

const CreatePost = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()

        const formData = new FormData(e.target)
        axios.post("http://localhost:3000/create-post", formData)
            .then((res)=>{
                console.log(res);
                
            })
        

    }
  return (
    <section className='create-post-section'>
      <h1>Create Post </h1>

      <form onSubmit={handleSubmit} >
        <input type="file" name='image'  accept='image/*' />
        <input type="text" name='caption' placeholder='Enter caption ' required />

        <button type='submit'>Post</button>
      </form>
    </section>
  )
}

export default CreatePost
