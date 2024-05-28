import { CSSProperties, FC, useRef } from 'react'
import useWindowDimensions from './hooks/useWindowDimension'

const Spiral: FC = () => {
  // Create a ref for the div

  const { width } = useWindowDimensions()

  const divRef = useRef<HTMLDivElement>(null)

  const getPathPosition = (index: number) => {
    // Get the x position
    const y = index * 10

    // Get the y position
    const x = Math.sin(index / 3) * (width / 3) + width / 3

    // Return the position

    const style: CSSProperties = {
      position: 'relative',
      top: `${y}px`,
      marginLeft: `${x}px`,
      // If the date is today change the color
      backgroundColor: new Date().toLocaleDateString() === getDateFromIndex(index).toLocaleDateString() ? 'red' : '#eee',
    }
    return style
  }

  const getDateFromIndex = (index: number) => {
    const date = new Date()
    date.setDate(date.getDate() + index)
    return date
  }

  return (
    <div>
      <h2 className='text-4xl font-bold font-sans text-center pt-10'>Utlandsfester</h2>
      <div className='w-fit mx-auto mt-20'>
        <div>
          {Array.from({ length: 31 * 2 }).map((_, index) => (
            <div key={index} style={getPathPosition(index)} className='p-4 rounded-full w-fit flex items-center bg-[#eee] shadow-md'>
              <p>{getDateFromIndex(index).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Spiral
