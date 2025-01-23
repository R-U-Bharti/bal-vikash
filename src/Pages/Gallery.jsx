import { useState } from "react";
import { motion } from "framer-motion";

import school1 from '@/assets/school1.jpg'
import school2 from '@/assets/school2.jpg'
import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'
import image4 from '@/assets/image4.jpg'
import { isMobile } from "@/lib/powerupfunctions";
import FadeInUp from "@/Components/FadeInUp";
import PageHeader from "@/Components/PageHeader";

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

export default function Gallery() {

  const [imageList, setImageList] = useState([
    { id: 3, image: image1 },
    { id: 4, image: image2 },
    { id: 5, image: image3 },
    { id: 6, image: image4 },
    { id: 1, image: school1 },
    { id: 2, image: school2 },
  ])
  const [currentImage, setCurrentImage] = useState(imageList[0]);

  function setAsPrimary(id) {
    const image = imageList?.find(item => item?.id == id)
    setCurrentImage(image);
  }

  return (
    <>
      <PageHeader title={"Gallery"} />
      <FadeInUp className="md:h-screen w-screen p-4 md:p-10 flex flex-col md:grid grid-cols-12 gap-2">
        <motion.div className="col-span-12 md:col-span-10 rounded-xl md:h-[90vh] h-[50vh] flex justify-center items-center" style={{ background: `url(${currentImage?.image})`, backgroundSize: 'cover' }}>
          <motion.img
            loading="lazy"
            key={currentImage?.id}
            className="dark:backdrop-brightness-50 backdrop-brightness-75 backdrop-blur-sm w-full md:h-[90vh] h-[50vh] object-contain rounded-xl"
            src={currentImage?.image}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
        <aside className="col-span-12 md:col-span-2 pr-2">
          <motion.div layout className="flex flex-row md:flex-col gap-2 md:h-[90vh] h-20 overflow-y-clip overflow-auto md:overflow-x-clip">
            {imageList?.map((elem) => (
              <GalleryImage key={elem?.id} data={elem} onExpand={setAsPrimary} />
            ))}
          </motion.div>
        </aside>
      </FadeInUp>
    </>
  );
}
