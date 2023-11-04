export default function Header() {
    return (
        <header>
            <nav className="flex container mx-auto">
                <div>
                    <img src="/images/Logo.png" alt="Logo" width={90} />
                </div>
                <div>
                    <form>
                        <div>
                            <input type="text" name="search" id="search" className="" />
                            <label htmlFor="search" className=""></label>
                        </div>
                    </form>
                </div>
                <div></div>
                <div></div>
            </nav>
        </header>
    )
}