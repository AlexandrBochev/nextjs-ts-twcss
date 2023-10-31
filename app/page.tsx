import { PhotoType, getData } from "@/models/models"
import Image from "next/image"

export default async function Photos() {
  const photos: PhotoType[] = await getData('photos?_limit=30')

  return (
    <>
      <h1 className="mb-4 font-semibold text-lg">Photos</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {photos.map(photo => (
          <li key={photo.id} className="relative flex flex-col items-center">
            <Image src={ photo.url } width={300} height={300} priority alt={ photo.title } />
            <div title={ photo.title } className="absolute left-0 bottom-0 w-full h-9">
              <div className="w-full h-full bg-black opacity-50" />
              <p className="absolute left-0 bottom-0 text-white text-sm p-2">{ photo.title.slice(0, 20) + '...' }</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}