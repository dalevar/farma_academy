import PropTypes from "prop-types";

export default function CardModule({ moduleTitle, href }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center w-[301px] h-[354px] border border-farma-800 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-solid"
    >
      <div className="">
        <div className="flex flex-col w-full h-24">
          <img src="/images/category/medicine.svg" className="w-16 h-16" />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-xl font-semibold leading-normal text-center text-farma-950">
            <p className="leading-snug text-center">{moduleTitle}</p>
          </p>
        </div>
      </div>
    </a>
  );
}

CardModule.propTypes = {
  moduleTitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
