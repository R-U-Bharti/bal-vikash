import PageHeader from "@/Components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import school1 from '@/assets/school1.jpg'
import school2 from '@/assets/school2.jpg'
import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'
import image4 from '@/assets/image4.jpg'
import GalleryShow from "./GalleryShow";

export default function Gallery() {

  // [
  // { id: 3, image: image1 },
  // { id: 4, image: image2 },
  // { id: 5, image: image3 },
  // { id: 6, image: image4 },
  // { id: 1, image: school1 },
  // { id: 2, image: school2 },
  // ]

  const images = {
    "School": [
      { id: 1, image: school1 },
      { id: 2, image: school2 },
      { id: 3, image: image1 },
      { id: 4, image: image2 },
      { id: 5, image: image3 },
      { id: 6, image: image4 },
    ],
    // "Republic Day": [
    //   { id: 3, image: image1 },
    //   { id: 4, image: image2 },
    //   { id: 5, image: image3 },
    //   { id: 6, image: image4 },
    // ]
  }

  const tabsTriggerStyle = ''

  return (
    <>
      <PageHeader title={"Gallery"} />

      <Tabs defaultValue="All" className="w-full flex flex-col justify-center items-center md:mt-10 mt-4">
        <TabsList>
          <TabsTrigger className={tabsTriggerStyle} value={'All'}>All Images</TabsTrigger>
          {
            Object.keys(images).map((key, index) =>
              <TabsTrigger className={tabsTriggerStyle} key={index} value={key}>
                {key} Images
              </TabsTrigger>
            )}
        </TabsList>
        <TabsContent value={'All'}>
          <GalleryShow images={Object.entries(images).map(([, value]) => value).flat()} />
        </TabsContent>
        {
          Object.keys(images).map((key, index) =>
            <TabsContent key={index} value={key}>
              <GalleryShow key={key} images={images[key]} />
            </TabsContent>
          )}
      </Tabs>
    </>
  );
}
