import mapboxgl from 'mapbox-gl'
import { FC, useRef, useState } from 'react'
import { IEvent } from '../data/events'
interface Props {
  event: IEvent
}

export const Event: FC<Props> = ({ event }) => {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapClick, setMapClick] = useState(true)
  const [lng, setLng] = useState(event.coordinates.lng)
  const [lat, setLat] = useState(event.coordinates.lat)
  const [zoom, setZoom] = useState(10)

  const laodMap = () => {
    setMapClick(false)
    setTimeout(() => {
      if (map.current) return // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [lng, lat],
        zoom: zoom,
      })
    }, 250)
  }

  return (
    <div className=' event-container bg-white rounded-md overflow-hidden lg:m-4 flex lg:flex-row flex-col gap-4 justify-between'>
      <div className='p-2 lg:p-4'>
        <h2 className='text-2xl font-bold text-black/70'>{event.name}</h2>
        <hr className=' border-black/50 hidden lg:block' />
        <p>Anordnare: {event.who}</p>
        <p>Vart: {event.location}</p>
        {
          event.notes && <p>Notering: {event.notes}</p>
        }
      </div>
      <div
        onClick={laodMap}
        className={`${
          mapClick ? 'lg:w-52 h-40' : 'lg:w-96 h-72'
        } w-full relative bg-map-blure bg-cover cursor-pointer  shadow-md overflow-hidden transition-all`}
      >
        <div ref={mapContainer} className='map-container h-full z-10' />
        {mapClick && (
          <div className='absolute items-center text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent font-bold text-xl text-gray-700'>
            Show on map
          </div>
        )}
      </div>
    </div>
  )
}
