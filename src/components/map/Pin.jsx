import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { MdBedroomParent } from "react-icons/md";

const iconsStyle = { fontSize: "20px", color: "black" };
function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="bg-white ">
          <img src={item.images[0]} alt=""className="rounded-lg" />
          <div className="flex flex-col my-2">
            <Link className="text-black text-center" to={`/${item.id}`}>
              {item.title}
            </Link>
            <div className="flex justify-center items-center">
              <MdBedroomParent style={iconsStyle} />
              <p>{item.bedroom} bedroom</p>
            </div>

            <b className="text-sky-700 text-center">$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
