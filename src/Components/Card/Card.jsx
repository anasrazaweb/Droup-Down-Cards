"use client"
import { Download } from 'lucide-react';
import { X } from 'lucide-react'
import { FileBarChart } from 'lucide-react';
import { motion } from "framer-motion" 

const Card = ({Data,referance}) => {
    return (
        <div>
            <motion.div drag  dragConstraints={referance} whileDrag={{scale:1.1}} dragElastic={.8} className=' relative cursor-pointer h-[230px] w-[180px] rounded-3xl overflow-hidden bg-black text-white p-3'>
                <div className='file'><FileBarChart /></div>
                <div className='text-[12px] mt-7'><p>{Data.desc}</p></div>
                <div className=' footer absolute bottom-0 left-0   w-full'>
                    <div className='flex justify-between px-2 py-5 items-center h-full'>
                        <h5 className='text-sm'>{Data.filesize}</h5>
                        <div className='bg-zinc-500 h-7  w-7 flex justify-center items-center rounded-full'>
                            { Data.close ? <X size='1.1rem' color='black'/>:  <Download size='1.1rem' color='black'/>}
                           
                            
                            </div>
                    </div>

                        {Data.tag.isOpan &&(
                    <div className={`tag ${Data.tag.Color==="black"? "bg-blue-600": "bg-green-600"}  w-full`}>
                            <h5 className='text-center text-sm py-2'>Dowlond Now.</h5>
                    </div>)}



                </div>
            </motion.div>
        </div>
    )
}

export default Card