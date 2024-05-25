import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row p-2 lg:p-4 gap-4 event-container'>
      <div className='lg:w-1/2'>
        <h1>Hitta Nästa Stora Utlandsfest med Utlandsfest.nu inom det kommande året</h1>
        <p className='text-sm text-gray-500'>
          Välkommen till Utlandsfest.nu, din bästa källa för att hitta information om de hetaste student utlandsfesterna. Kolla in våra kommande event
          och planera din nästa festresa!
        </p>

        <h2>Varför Välja Utlandsfest.nu?</h2>
        <p className='text-sm text-gray-500'>Vi håller dig uppdaterad med de senaste eventen och festplatserna.</p>
        <p className='text-gray-500 text-sm'>Missar inte några kommande event! Planera din nästa utlandsfest med oss och skapa minnen för livet!</p>
      </div>
      <div className='flex h-[2px] w-full lg:w-[2px] bg-gray-200' />
      <div className='flex flex-col justify-between'>
        <div>
          <h2>Vill ni synas här eller tas bort?</h2>
          <p className='text-sm text-gray-500'>
            Om vi har råkat skriva fel address, datum eller info så kan ni kontakta{' '}
            <a href='mailto:robin@aviliax.com' className='text-blue-600'>
              robin@aviliax.com
            </a>{' '}
            för att göra ändringar.
          </p>
          <p className='text-sm text-gray-500'>
            Om ni vill att erat event ska synas här, kontakta då{' '}
            <a href='mailto:robin@aviliax.com' className='text-blue-600'>
              robin@aviliax.com
            </a>{' '}
            för att läggas till i listan.
          </p>
        </div>
        <div>
          <p>Copyright © Utlandsfest.nu {new Date().getFullYear()}</p>
          <p className='text-sm text-gray-500'>
            Open source tillgängligt här:{' '}
            <a className='text-blue-600' href='https://github.com/Forsrobin/Utlandsfest'>
              https://github.com/Forsrobin/Utlandsfest
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
