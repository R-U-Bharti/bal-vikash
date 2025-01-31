import { useState } from "react";
import { motion } from "framer-motion";
import { isMobile } from "@/lib/powerupfunctions";
import FadeInUp from "@/Components/FadeInUp";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

function GalleryImage({ data, onExpand }) {
    return (
        <motion.img
            src={data?.image}
            alt=""
            onClick={() => onExpand(data?.id)}
            className="rounded-xl cursor-pointer"
            whileHover={{ scale: isMobile() ? 1.0 : 1.05 }}
        />
    );
}

const GalleryShow = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(images);
    const [imageIndex, setImageIndex] = useState(0)

    function setAsPrimary(id) {
        const image = images?.find(item => item?.id == id)
        setCurrentImage([image]);
        setImageIndex(0)
    }

    const changeImageFun = (action) => {

        if (action === 'next') {
            setCurrentImage(images)
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        else if (action === 'prev') {
            setCurrentImage(images)
            setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
        }

    }

    return (
        <>
            <FadeInUp className="md:h-screen w-screen p-4 md:p-10 flex flex-col md:grid grid-cols-12 gap-2 *:select-none">
                <motion.div className="col-span-12 md:col-span-10 rounded-xl md:h-[90vh] h-[50vh] flex md:flex-row flex-col md:justify-center md:items-center gap-1">
                    <motion.div onClick={() => changeImageFun('prev')} className="md:block hidden w-max bg-muted border p-1 rounded-full cursor-pointer"><ArrowBigLeft size={'24px'} /></motion.div>
                    <div style={{ background: `url(${currentImage[imageIndex]?.image})`, backgroundSize: 'cover', overflow: 'clip' }} className="rounded-xl md:h-[90vh] h-[50vh] w-full">
                        <motion.img
                            loading="lazy"
                            key={currentImage[imageIndex]?.id}
                            className="dark:backdrop-brightness-50 backdrop-brightness-75 backdrop-blur-sm w-full md:h-[90vh] h-[50vh] object-contain rounded-xl"
                            src={currentImage[imageIndex]?.image}
                            alt=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                        />
                    </div>
                    <motion.div onClick={() => changeImageFun('next')} className="md:block hidden w-max bg-muted border p-1 rounded-full cursor-pointer"><ArrowBigRight size={'24px'} /></motion.div>
                </motion.div>
                <aside className="col-span-12 md:col-span-2 pr-2">
                    <div className="md:hidden flex items-center gap-2 mb-2 border2">
                        <motion.div onClick={() => changeImageFun('prev')} className="w-full flex items-center justify-center bg-muted border p-1 rounded-full cursor-pointer"><ArrowBigLeft size={'24px'} /></motion.div>
                        <motion.div onClick={() => changeImageFun('next')} className="w-full flex items-center justify-center bg-muted border p-1 rounded-full cursor-pointer"><ArrowBigRight size={'24px'} /></motion.div>
                    </div>
                    <motion.div layout className="flex flex-row md:flex-col gap-2 md:h-[90vh] h-20 overflow-y-clip overflow-auto md:overflow-x-clip">
                        {images?.map((elem) => (
                            <GalleryImage key={elem?.id} data={elem} onExpand={setAsPrimary} />
                        ))}
                    </motion.div>
                </aside>
            </FadeInUp>
        </>
    )
}

export default GalleryShow