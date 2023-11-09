import { Link } from "react-router-dom";

export default function CardMateri() {
    return (
        <Link to={'/module/materi/access'} preventScrollReset
            className="border border-[color:var(--Pale-grey,#3CF)] bg-white w-full max-w-[407px] mx-auto pl-7 pr-20 py-9 rounded-3xl border-solid max-md:mt-9 max-md:px-5"
            role="region"
            aria-label="Updated Component"
        >
            <article className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                    <div className="bg-sky-400 flex w-full max-w-[111px] flex-col mx-auto pt-5 pb-3 px-5 rounded-xl max-md:mt-10">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6f8a4b9-4a9d-4e3a-a7c6-5919303c7cfa?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&" className="aspect-[0.92] object-contain object-center w-full overflow-hidden self-stretch"
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col max-md:mt-10">
                        <h2 className="text-sky-950 text-sm font-semibold self-stretch">
                            PULVIS DAN PULVERES
                        </h2>
                        <p className="text-sky-900 text-xs leading-[150%] self-stretch">
                            On the most popular sites
                        </p>
                        <div className="self-stretch flex w-full items-start justify-between gap-5 mt-16 max-md:mt-10">
                            <div className="self-stretch flex items-start justify-between gap-2">
                                <a
                                    href="https://cdn.builder.io/api/v1/image/assets/TEMP/e3c0a9eb-5f2a-4d3c-806a-8bd786dda53a?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3c0a9eb-5f2a-4d3c-806a-8bd786dda53a?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                                        alt="Image 1"
                                    />
                                </a>
                                <div className="text-sky-950 text-center text-xs font-light self-center my-auto">
                                    5 Bab
                                </div>
                            </div>
                            <div className="self-stretch flex items-start justify-between gap-1.5">
                                <a
                                    href="https://cdn.builder.io/api/v1/image/assets/TEMP/860562b2-f16d-4d8f-b15d-bfd1a71741b0?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                                    className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/860562b2-f16d-4d8f-b15d-bfd1a71741b0?apiKey=7bdd35b7bdaf466890fa5ec9ff0372cb&"
                                        alt="Image 2"
                                    />
                                </a>
                                <div className="text-sky-950 text-center text-xs font-light self-center my-auto">
                                    4.84
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}