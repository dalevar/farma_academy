import CardTrustedBy from "../../components/cards/CardTrustedBy";

export default function TrustedBySection() {
  return (
    <div className="bg-white flex flex-col px-20 max-md:px-5">
      <div className="self-center flex w-[725px] max-w-full flex-col mt-11 mb-20 max-md:my-10">
        <div className="text-sky-950 text-center text-3xl self-center max-w-[666px]">
          Telah dipercayai oleh
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93790b81-ad71-4f32-928c-edd31af2904e?apiKey=6f0257302a85476b9d26590be3d78938&"
          className="aspect-[4.59] object-contain object-center w-full overflow-hidden self-stretch grow mt-6 max-md:max-w-full"
        />
      </div>
    </div>
  );
}
