import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import * as S from "./style.js"
import { useState } from 'react';
import appContext from '../../Contexts/AppContext.js';
import { useContext } from 'react';
import React from 'react';


export default function Maps() {


  const { latitude, setLatitude, longitude, setLongitude, setLocalizationName, localizationName } = useContext(appContext)

  const [map, setMap] = useState<google.maps.Map>()
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>()


  const onPlacesChanged = () => {
    const places = searchBox!.getPlaces()

    const place = places![0]


    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0
    }

    setLatitude(location.lat)
    setLongitude(location.lng)

    setLocalizationName(place.name)

    map?.panTo(location)
  }

  const onMapLoad = (map: google.maps.Map) => {

    setMap(map)
  }

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref)
  }

  return (<>
    <S.ContainerMap>
      <LoadScript googleMapsApiKey='AIzaSyAssr79pCIRnUcpvKCRRqBoOqjUkWm1tVQ' libraries={['places']} >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: 41.386723, lng: 2.154950 }}
          zoom={15}

        >
          <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged} >
            <S.InputLocal placeholder="Di la localizacion " onChange={(e: any) => setLocalizationName(e.target.value)} value={localizationName} />
          </StandaloneSearchBox>

          <Marker position={{ lat: latitude, lng: longitude }} />


        </GoogleMap>
      </LoadScript>

    </S.ContainerMap>
  </>)
}
