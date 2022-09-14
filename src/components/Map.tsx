import { googleMapAPI } from "../helpers/Api";

interface Citytype {
  city: string;
}

export const Map = ({ city }: Citytype) => {
  return (
    <div>
      <iframe
        title="unique map"
        width="100%"
        height="300"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${city}`}
      ></iframe>
    </div>
  );
};
