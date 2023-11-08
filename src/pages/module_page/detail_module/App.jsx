import BannerSection from "../BannerSection";
import SearchSection from "../SearchSection";
import ListMateri from "./ListMateriSection";

export default function DetailModule() {
    return (
        <main className="flex-auto">
            <BannerSection />
            <SearchSection />

            <ListMateri />
        </main>
    )
}