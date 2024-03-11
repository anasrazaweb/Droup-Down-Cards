"use client"
import React, { useRef } from 'react'
import Card from '../Card/Card'

const Forground = () => {
    const ref = useRef(null)

    const Data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto doloru!",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpan: true,
                tagTital: "Dowlonad Now.",
                Color: "black"
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet  adipisicing elit. Iure iusto doloru!",
            filesize: ".3mb",
            close: false,
            tag: {
                isOpan: true,
                tagTital: "Dowlonad Now.",
                Color: "red"
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet  adipisicing elit. Iure iusto doloru!",
            filesize: ".3mb",
            close: false,
            tag: {
                isOpan: true,
                tagTital: "Dowlonad Now.",
                Color: "black"
            }
        },
        {
            desc: "Lorem ipsum best amet  adipisicing elit. Iure iusto doloru!",
            filesize: ".4mb",
            close: true,
            tag: {
                isOpan: false,
                tagTital: "Dowlonad Now.",
                Color: "red"
            }
        },
        {
            desc: "Lorem ipsum best amet  adipisicing elit. Iure iusto doloru!",
            filesize: ".4mb",
            close: true,
            tag: {
                isOpan: true,
                tagTital: "Dowlonad Now.",
                Color: "red"
            }
        },
        {
            desc: "Lorem ipsum best amet  adipisicing elit. Iure iusto doloru!",
            filesize: ".4mb",
            close: true,
            tag: {
                isOpan: false,
                tagTital: "Dowlonad Now.",
                Color: "black"
            }
        },
    ]


    return (
        <div ref={ref} className='fixed top-0 left-0 w-full h-screen flex gap-6  p-2'>

            {
                Data.map((item, index) => (
                    <Card Data={item} referance={ref} />
                ))
            }

        </div>
    )
}

export default Forground