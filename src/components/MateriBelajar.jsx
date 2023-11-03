import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMateri from "./CardMateri";
import { getMateri } from "../services/materi";

const MateriBelajar = () => {
    const [materi, setMateri] = useState([]);
    const { slug: paramsSlug } = useParams();
  
    useEffect(() => {
      getMateri(paramsSlug)
        .then((res) => {
          setMateri(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {materi.map((materi) => (
            <CardMateri key={materi.id} materi={materi} />
          ))}
        </div>
      </div>
    );
  };
  
  export default MateriBelajar;