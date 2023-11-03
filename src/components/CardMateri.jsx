import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CardMateri = ({ materi }) => {
  return (
    <div className="card-materi">
      <Link to={`/materi/${materi.slug}`}>
        <div className="card-materi__img">
          <img
            src={`/images/${materi.image}`}
            alt={materi.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="card-materi__title">
          <h3 className="text-xl font-semibold">{materi.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CardMateri;