export default function Footer() {
    return (
        <footer className="bg-farma-100 py-10 mt-10">
            <div className="container mx-auto flex text-farma-950">
                <div className="basis-[30%]">
                    <div className="w-full">
                        <img src="/logos/BigLogo.png" alt="" />
                    </div>
                    <div>
                        <p className="break-words leading-tight text-lg w-full text-center">Academy Online Farmasi pertama yang telah berkerjasama dengan DUDI</p>
                    </div>
                </div>
                <div className="flex justify-between flex-auto">
                    <div>
                        <span className="font-semibold">TENTANG KAMI</span>
                    </div>
                    <div>
                        <span className="font-semibold">BLOG</span>
                    </div>
                    <div>
                        <span className="font-semibold">IKUTI KAMI</span>
                    </div>
                    <div>
                        <span className="font-semibold">PARTNERSHIP</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}