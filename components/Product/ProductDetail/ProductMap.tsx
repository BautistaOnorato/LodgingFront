"use client"

import { Map, Marker } from "pigeon-maps"
import { osm } from "pigeon-maps/providers"

export interface Coordinates {
  latitude: number
  longitude: number
}

const ProductMap: React.FC<Coordinates> = ({ latitude, longitude }) => {
  return (
    <section className="mx-auto w-[90%] sm:px-8 sm:w-full">
      <div className="hidden sm:block">
        <Map height={500} defaultCenter={[latitude, longitude]} defaultZoom={11} provider={osm}>
          <Marker width={50} anchor={[latitude, longitude]} color="#f9a127"/>
        </Map>
      </div>
      <div className="block sm:hidden">
        <Map height={300} defaultCenter={[latitude, longitude]} defaultZoom={11} provider={osm}>
          <Marker width={25} anchor={[latitude, longitude]} color="#f9a127"/>
        </Map>
      </div>
    </section>
  )
}

export default ProductMap