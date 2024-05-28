import { FC, useState } from 'react'
import { IEvent, events } from './data/events'
import { Event } from './components/Event'
import mapboxgl from 'mapbox-gl'
import { Footer } from './components/Footer'
import Spiral from './DateDisplay'
import { Navbar } from './components/Navbar'

mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yc3JvYmluIiwiYSI6ImNrYmo5cDh0bjBscTMycXM3cWR1cG9mZHcifQ.dB_kh1TDjc9lGOCH6CkQ3Q'

const App: FC = () => {
  const [data, setData] = useState<IEvent[]>(events)
  const [search, setSearch] = useState<string>('')

  const getNextTwelevemonths = () => {
    let date = new Date()
    const months = []

    for (let i = 0; i < 12; i++) {
      months.push(date)
      date = new Date(date.setMonth(date.getMonth() + 1))
    }

    return months
  }

  const filterData = (search: string) => {
    return data.filter((event) => {
      return event.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  const getFormatedMonth = (month: Date) => {
    return new Intl.DateTimeFormat('sv-SE', { month: 'long' }).format(month) + ' ' + month.getFullYear()
  }

  return (
    <>
      <Navbar onChange={setSearch} search={search} />
      <div className='min-h-screen'>
        {getNextTwelevemonths().map((month, index) => {
          return (
            filterData(search).filter((event) => event.date.getMonth() === month.getMonth()).length > 0 && (
              <div key={JSON.stringify(month)} className='lg:p-4 p-2 '>
                <h2 className='text-2xl lg:ml-4 text-center lg:text-left capitalize lg:mb-0 mb-4'>{getFormatedMonth(month)}</h2>
                <div className='flex flex-row flex-wrap lg:gap-0 gap-4 lg:mb-2 mb-2'>
                  {filterData(search)
                    .filter((event) => event.date.getMonth() === month.getMonth())
                    .map((event) => {
                      return <Event key={JSON.stringify(event)} event={event} />
                    })}
                </div>
              </div>
            )
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default App
