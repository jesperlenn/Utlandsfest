export type IEvent = {
  name: string
  date: Date
  who: string
  notes: string
  location: string
  coordinates: {
    lat: number
    lng: number
  }
}
export const events: IEvent[] = [
  {
    name: 'Badekarpadlingen',
    date: new Date('2021-09'),
    who: 'Badekarpadlingen (vadkom)',
    notes: 'Norige',
    location: 'Trondheim',
    coordinates: { lat: 63.4305, lng: 10.3951 },
  },
  {
    name: 'Rabalder',
    date: new Date('2021-09'),
    who: 'sexet i borås (6-1)',
    notes: '',
    location: 'Borås',
    coordinates: { lat: 57.721, lng: 12.9401 },
  },
  {
    name: 'Bonnaphesten',
    date: new Date('2021-10'),
    who: 'Skövde sexmästeri (Skö Sex)',
    notes: '',
    location: 'Skövde',
    coordinates: { lat: 58.3898, lng: 13.853 },
  },
  {
    name: 'Sjöslaget',
    date: new Date('2021-10'),
    who: 'Sjöslags gruppen (Klubbmästarrådet (KMR))',
    notes: '',
    location: 'Stockholm -Tallin',
    coordinates: { lat: 59.3293, lng: 18.0686 }, // Stockholm coordinates
  },
  {
    name: 'Fejden',
    date: new Date('2021-11'),
    who: 'D6',
    notes: '',
    location: 'Luleå',
    coordinates: { lat: 65.5848, lng: 22.1547 },
  },
  {
    name: 'Fiaslaget',
    date: new Date('2021-11'),
    who: 'sexiztens/ sapparna',
    notes: '',
    location: 'Kna',
    coordinates: { lat: 56.1820711, lng: 15.5918314 }, 
  },
  {
    name: 'Eskilstuna winter games',
    date: new Date('2021-02'),
    who: 'Sexmästeriet mdu Eskilstuna',
    notes: '',
    location: 'Eskilstuna',
    coordinates: { lat: 59.3704, lng: 16.5077 },
  },
  {
    name: 'S.No.P.P.',
    date: new Date('2021-02'),
    who: 'D6',
    notes: 'Sveriges Nordliggaste Pulka Partaj',
    location: 'Luleå',
    coordinates: { lat: 65.5848, lng: 22.1547 },
  },
  {
    name: 'Sjärtslaget',
    date: new Date('2021-02'),
    who: 'Festvärket',
    notes: '',
    location: 'Trollhättan',
    coordinates: { lat: 58.2837, lng: 12.2886 },
  },
  {
    name: 'Hjärtslaget',
    date: new Date('2021-02'),
    who: 'Thorax',
    notes: '',
    location: 'Halmstad',
    coordinates: { lat: 56.6745, lng: 12.857 },
  },
  {
    name: 'Vårkryssen- Silliz/ sjölliz',
    date: new Date('2021-03'),
    who: 'Sjöslags gruppen (Klubbmästarrådet (KMR))',
    notes: '',
    location: 'Stockholm/ Finland',
    coordinates: { lat: 59.3293, lng: 18.0686 }, // Stockholm coordinates
  },
  {
    name: 'Otympliga Spelen',
    date: new Date('2021-03'),
    who: 'Piraja party previders',
    notes: '',
    location: 'Luleå',
    coordinates: { lat: 65.5848, lng: 22.1547 }, // Luleå coordinates
  },
  {
    name: 'Syndafloden',
    date: new Date('2021-03'),
    who: 'Qult',
    notes: '',
    location: 'Jönköping',
    coordinates: { lat: 57.7826, lng: 14.1618 },
  },
  {
    name: 'Ålrundan',
    date: new Date('2021-04'),
    who: 'ålrundan',
    notes: 'Finland',
    location: 'Åland',
    coordinates: { lat: 60.1785, lng: 19.9156 },
  },
  {
    name: 'Forsränningen',
    date: new Date('2021-04'),
    who: 'Tupplarna UTN',
    notes: '',
    location: 'Uppsala',
    coordinates: { lat: 59.8586, lng: 17.6389 },
  },
  {
    name: 'DöMD',
    date: new Date('2021-04'),
    who: 'D-group / LTH',
    notes: '',
    location: 'Linköping',
    coordinates: { lat: 58.4108, lng: 15.6214 },
  },
  {
    name: 'Capseisa',
    date: new Date('2021-04'),
    who: 'DVKV',
    notes: 'inte utlandsphest',
    location: 'Kronåsens',
    coordinates: { lat: 59.8439427, lng: 17.6214824 }, // Assuming Kronåsens is a place near Stockholm
  },
  {
    name: 'Flummen',
    date: new Date('2021-05'),
    who: 'Brutal academin',
    notes: '',
    location: 'Kna',
    coordinates: { lat: 56.1820711, lng: 15.5918314 }, // Assuming 'Kna' is Kalmar
  },
  {
    name: 'Quarnevalen',
    date: new Date('2021-05'),
    who: 'SQUVALP',
    notes: '',
    location: 'Stockholm',
    coordinates: { lat: 59.3293, lng: 18.0686 },
  },
  {
    name: 'AG',
    date: new Date('2021-05'),
    who: 'Absolut Gotland',
    notes: '',
    location: 'Gotland',
    coordinates: { lat: 57.5345, lng: 18.2926 },
  },
  {
    name: 'Spacestation',
    date: new Date('2021-05'),
    who: 'P6 Götteborg',
    notes: '',
    location: 'Gtb',
    coordinates: { lat: 57.7089, lng: 11.9746 }, // Göteborg coordinates
  },
  {
    name: 'BootCaps',
    date: new Date('2021-06'),
    who: 'Capslägercommittén',
    notes: '',
    location: 'Rävlanda',
    coordinates: { lat: 57.6544, lng: 12.5383 },
  },
  {
    name: 'Du vet vad',
    date: new Date('2021-07'),
    who: 'qult',
    notes: '',
    location: 'Jönköping',
    coordinates: { lat: 57.7826, lng: 14.1618 },
  },
]
