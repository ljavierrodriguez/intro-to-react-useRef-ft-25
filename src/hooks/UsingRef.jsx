import React, { useEffect, useRef, useState } from 'react'
import '../styles/usingRef.css'

const UsingRef = () => {

    const formRef = useRef(null)
    const loaderRef = useRef(null)

    const inputRef = useRef(null)

    const [images] = useState([
        "https://picsum.photos/id/120/900/500",
        "https://picsum.photos/id/345/900/500",
        "https://picsum.photos/id/258/900/500",
        "https://picsum.photos/id/657/900/500",
        "https://picsum.photos/id/743/900/500",
    ])

    const loadImage = url => {
        console.log(url)
        loaderRef.current.src = url
    }

    useEffect(() => {
        inputRef.current.value = "Luis Rodriguez"
    }, [])


    const handleSubmit = e => {
        e.preventDefault()

        if(formRef.current.email.value === ""){
            formRef.current.email.classList.add('is-invalid')
        } else {
            formRef.current.email.classList.remove('is-invalid')
        }

    }

    return (
        <div>
            <h3>UsingRef</h3>
            <div className="gallery">
                <img className='gallery__loader' ref={loaderRef} />
                <div className="gallery__list">
                    {
                        images.map((source, index) => {
                            {/* <img key={index} src={source} onClick={() => loadImage(source)} /> */ }
                            return (
                                <img key={index} src={source} onClick={(e) => loadImage(e.target.src)} />
                            )
                        })
                    }
                </div>
            </div>

            <input type="text" ref={inputRef} />

            <form onSubmit={handleSubmit} ref={formRef} className='w-50 my-5 mx-auto'>
                <input type="text" id='name' placeholder='Insert name' className='form-control mb-3' />
                <input type="text" id='lastname' placeholder='Insert lastname' className='form-control mb-3' />
                <input type="email" id='email' placeholder='Insert email' className='form-control mb-3' />
                <button className='btn btn-primary w-100'>Enviar</button>
            </form>

        </div>
    )
}

export default UsingRef