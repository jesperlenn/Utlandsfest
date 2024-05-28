import mapboxgl from 'mapbox-gl'
import { FC, useState } from 'react'
import { Event } from './components/Event'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { IEvent, events } from './data/events'

mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yc3JvYmluIiwiYSI6ImNrYmo5cDh0bjBscTMycXM3cWR1cG9mZHcifQ.dB_kh1TDjc9lGOCH6CkQ3Q'

const App: FC = () => {
  const [data, setData] = useState<IEvent[]>(events)
  const [search, setSearch] = useState<string>('Fia')

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
    const filtered_data = data.filter((event) => {
      return event.name.toLowerCase().includes(search.toLowerCase())
    })

    if (filtered_data.length === 0) {
      return []
    }

    return filtered_data
  }

  const getFormatedMonth = (month: Date) => {
    return new Intl.DateTimeFormat('sv-SE', { month: 'long' }).format(month) + ' ' + month.getFullYear()
  }

  return (
    <>
      <Navbar onChange={setSearch} search={search} />
      <div className='min-h-screen  flex'>
        {filterData(search).length === 0 ? (
            <p className='text-3xl w-full text-center font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Inget event hittades</p>
        ) : (
          <div className='min-h-screen'>
            {getNextTwelevemonths().map((month) => {
              return (
                filterData(search).filter((event) => event.date.getMonth() === month.getMonth()).length > 0 && (
                  <div key={JSON.stringify(month)} className='lg:p-4 p-2 '>
                    <h2 className='text-2xl lg:ml-4 text-center lg:text-left capitalize lg:mb-0 mb-4 font-bold lg:font-normal'>
                      {getFormatedMonth(month)}
                    </h2>
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
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
