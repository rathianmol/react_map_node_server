import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'; 


const Map = ({ eventData , center, zoom}) => {

    const markers = eventData.map(ev => {
        return  <LocationMarker lat={ev.latitude} lng={ev.longitude}></LocationMarker>
    }); 

    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key:
            'AIzaSyBB1jgr-svWrhvf-FtmZ8kfkbnpRWyDDV8' }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}; 

export default Map; 