import FlightDetailsContent from './flight-details-content'

export async function generateStaticParams() {
  // Generate static pages for common flight IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

export default function FlightDetailsPage() {
  return <FlightDetailsContent />
}
