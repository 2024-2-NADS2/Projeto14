import {APIProvider, Map, useMap, Ad, AdvancedMarker, InfoWindow, useAdvancedMarkerRef, useMapsLibrary} from '@vis.gl/react-google-maps'
import { useCallback, useState } from 'react'
import {
    Circle
  } from "@googlemaps/extended-component-library/react";

const MapaEcoPontos = ({ ponto, lngMap, latMap, raioBusca }) => {

    
   

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
            }
        setActiveMarker(null)
        setActiveMarker(marker)    
    };

    const [markerRef, marker] = useAdvancedMarkerRef()
    console.log(activeMarker)

    return(

        <>
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <Map
                mapId={process.env.REACT_APP_GOOGLE_MAPS_MAP_ID}
                defaultCenter={{lat: -23.6526973, lng: -46.668079}}
                defaultZoom={18}
                gestureHandling={'greedy'}
                onClick={() => setActiveMarker(null)}
                disableDefaultUI={true}
            >

                {ponto?.map((ponto) => (
                        <AdvancedMarker 
                        key={ponto.eco_id}
                        ref={markerRef}
                        position={{lat: ponto.lat, lng: ponto.lng}} 
                        onClick={() => handleActiveMarker(ponto.eco_id)}
                        >
                            {activeMarker === ponto.eco_id ? (
                                <InfoWindow 
                                position={{lat: ponto.lat, lng: ponto.lng}}  
                                onClose={() => setActiveMarker(null)}
                                >
                                    <p>{ponto.name}</p>
                                    <br/>
                                    <p>Endereco : <br/><br/>{ponto.address}</p>
                                    <br/>
                                    <p>O que recebemos : <br/><br/>{ponto.materiais}</p>
                                </InfoWindow>
                            ) : null}
                            <span style={{fontSize: "5em"}}>♻️</span>
                        </AdvancedMarker>
                    ))}                  
            </Map>
        </APIProvider>
        </>
    )
}


export default MapaEcoPontos