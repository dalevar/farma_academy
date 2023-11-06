import CardTrustedBy from "../../components/cards/CardTrustedBy";

export default function TrustedBySection() {
  return (
    <section className="mt-[5rem]">
      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-center break-words text-farma-950 md:text-4xl">
        Telah dipercayai Oleh
      </h2>

      <div className="flex justify-center gap-4 mt-10">
        <CardTrustedBy />
        <CardTrustedBy />
        <CardTrustedBy />
        <CardTrustedBy />
      </div>
    </section>
  );
}
