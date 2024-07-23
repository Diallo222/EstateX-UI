import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

const Map =({ data })=> {
  return (
    <MapContainer
      center={
        data.length === 1
          ? [data[0].latitude, data[0].longitude]
          : [52.4797, -1.90269]
      }
      zoom={7}
      scrollWheelZoom={false}
    className=" h-full w-full rounded-xl"
    > 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
