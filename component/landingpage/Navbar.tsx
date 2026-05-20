import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-transparent backdrop-blur-sm z-50">
            <Link href= "/" className="text-white font-bold text-xl">
            DevPrep
            </Link>
            <div className="flex items-center gap-6">
                <Link href="/" className = "text-white hover:text-purple-700 text-sm transition">Features</Link>
                <Link href="/" className = "text-white hover:text-purple-700 text-sm transition">Pricing</Link>
                <Link href="/" className = "bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-purple-700 transition">Get Started</Link>
            </div>

        </nav>
    )
}