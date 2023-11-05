import CardTrustedBy from "../../components/cards/CardTrustedBy";

export default function TrustedBySection() {
    return (
        <section className="mt-60">
            <h2 className="text-center break-words text-farma-950 md:text-4xl text-2xl font-semibold leading-tight tracking-tight">Telah diPercayai Oleh</h2>

            <div className="flex gap-4 justify-center mt-10">
                <CardTrustedBy />
                <CardTrustedBy />
                <CardTrustedBy />
                <CardTrustedBy />
            </div>
        </section>
    )
}