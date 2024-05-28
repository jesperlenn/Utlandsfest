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
    <div className=' event-container w-full bg-white lg:w-fit rounded-md overflow-hidden flex-col lg:m-4 flex lg:flex-row gap-4 items-start justify-between'>
      <div className='p-2 lg:p-4 flex flex-col '>
        <div className='flex flex-row gap-4'>
          {event.logo && <img src={event.logo} alt={event.name} className='w-24 h-24 object-cover rounded-md' />}
          <div className='flex flex-col'>
            <h2 className='text-2xl font-bold text-[#333]'>{event.name}</h2>
            <p className='text-sm text-gray-600'>Anordnare: {event.who}</p>
          </div>
        </div>
        <div className='max-w-fit flex flex-col'>
          {event.description && <p className='my-2 max-w-96 text-sm '>{event.description}</p>}
          {event.notes && <p>Notering: {event.notes}</p>}
          {event.url && (
            <a className='text-blue-500 text-xs' href={event.url}>
              {event.url}
            </a>
          )}
          <p className='text-sm text-gray-600 mt-2'>Vart: {event.location}</p>
        </div>
      </div>
      <div
        onClick={laodMap}
        className={`${
          mapClick ? 'lg:w-52 lg:h-40 h-20' : 'lg:w-96 lg:h-72 h-40'
        } w-full  lg:m-4 rounded-md relative bg-map-blure bg-cover cursor-pointer  shadow-md overflow-hidden transition-all`}
      >
        <div ref={mapContainer} className='map-container h-full z-10' />
        {mapClick && (
          <div className='absolute items-center text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent font-bold text-xl text-gray-600'>
            Show on map
          </div>
        )}
      </div>
    </div>
  )
}
