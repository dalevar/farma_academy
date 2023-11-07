/* eslint-disable react/prop-types */
import { IconChecked } from "../Icons";
import ButtonLangganan from "../buttons/ButtonLangganan";

const CardLangganan = ({ paket, harga, benefit }) => {
  return (
    <div className="bg-[#F2F4FF] w-72 rounded-lg p-5">
      <p className="text-farma-950 font-semibold text-3xl mt-5 text-center">
        Paket {paket}
      </p>
      <p className="text-farma-950 font-normal mt-3 text-lg text-center">Rp. {harga}</p>
      <ButtonLangganan>Pilih Paket</ButtonLangganan>
      <div className="mt-8 mb-5">
        {benefit.map((value, i) => {
          return (
            <div
              className="flex items-center gap-3 mt-3 text-[#072125]"
              key={i}
            >
              <IconChecked className="w-5" />
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardLangganan;
