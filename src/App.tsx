import { FC, useState } from 'react'
import { Fest, events } from './data/events'
import { Event } from './components/Event'
import mapboxgl from 'mapbox-gl'
import { Footer } from './components/Footer'

mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yc3JvYmluIiwiYSI6ImNrYmo5cDh0bjBscTMycXM3cWR1cG9mZHcifQ.dB_kh1TDjc9lGOCH6CkQ3Q'

const lightColors = [
  '#FFCCCC', // Light Red
  '#CCCCFF', // Light Blue
  '#E6FFCC', // Light Green
  '#FFE5CC', // Light Orange
  '#CCE5FF', // Light Sky Blue
  '#FFFFCC', // Light Yellow-Green
  '#CCFFCC', // Light Mint
  '#FFF5CC', // Light Yellow
  '#CCFFE5', // Light Cyan
  '#FFDDCC', // Light Orange-Red
  '#E5CCFF', // Light Lavender
  '#CCFFFF', // Light Aqua
]
const App: FC = () => {
  const [data, setData] = useState<Fest[]>(events)

  const getNextTwelevemonths = () => {
    let date = new Date()
    const months = []

    for (let i = 0; i < 12; i++) {
      months.push(date)
      date = new Date(date.setMonth(date.getMonth() + 1))
    }

    return months
  }

  const getFormatedMonth = (month: Date) => {
    return new Intl.DateTimeFormat('sv-SE', { month: 'long' }).format(month) + ' ' + month.getFullYear()
  }

  return (
    <>
      <div>
        {getNextTwelevemonths().map((month, index) => {
          return (
            data.filter((fest) => fest.date.getMonth() === month.getMonth()).length > 0 && (
              <div key={JSON.stringify(month)} className='lg:p-4 p-2 ' style={{ backgroundColor: lightColors[index] }}>
                <h2 className='text-4xl lg:ml-4 text-center lg:text-left font-bold capitalize lg:mb-0 mb-4'>{getFormatedMonth(month)}</h2>
                <div className='flex flex-col lg:gap-0 gap-4 lg:mb-2 mb-2'>
                  {data
                    .filter((fest) => fest.date.getMonth() === month.getMonth())
                    .map((fest) => {
                      return <Event key={JSON.stringify(fest)} fest={fest} />
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
