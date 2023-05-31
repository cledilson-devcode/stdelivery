import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const position = {
    lat: -2.5298584,
    lng: -44.2990758
}

function OrderLocation() {

    return (
        <section className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                </div>
                    
                    <MapContainer center={position} zoom={5} scrollWheelZoom>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Meu marcador
                            </Popup>
                        </Marker>
                    </MapContainer>

                
            </div>
        </section>
    );

}

export default OrderLocation;