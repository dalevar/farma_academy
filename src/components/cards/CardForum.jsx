/* eslint-disable react/prop-types */
import ButtonForumCard from "../buttons/ButtonForumCard";
import { IconComment } from "../Icons";
// eslint-disable-next-line react/prop-types, no-unused-vars
const CardForum = ({
  nama,
  title,
  imgsrc,
  tanggalUpload,
  deskripsi,
  commentCount,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg px-1 py-3 mt-6 hover:bg-gray-200 transition cursor-pointer">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-around items-center w-5/12 h-auto mt-2">
          <div>
            <img
              src={imgsrc}
              alt="..."
              className="w-12 shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
          <div>
            <span>{nama} | </span>
            <span className="text-farma-400">{tanggalUpload}</span>
          </div>
        </div>
        <ButtonForumCard />
      </div>
      <div className="p-4 mt-4">
        <span className="font-semibold text-2xl">{title}</span>
        <p className="mt-3 text-gray-600 font-thin">{deskripsi}</p>
      </div>
      <div className="p-4 mt-2 flex items-center">
        <IconComment /> <span className="me-2"> </span> {commentCount}{" "}
        Pembahasan
      </div>
    </div>
  );
};

export default CardForum;
