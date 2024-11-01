import Link from "next/link"

const MenuButtonList = () => {
    return <section className="flex flex-col justify-start gap-y-6 pb-20 px-10">
        <Link href="/learning-outcomes" className="btn-menu">Capaian Pembelajaran</Link>
        <Link href="/learning-goals" className="btn-menu">Tujuan Pembelajaran</Link>
        <Link href="/play-instraction" className="btn-menu">Petunjuk Bermain</Link>
        <Link href="/spin-wheel" className="btn-menu">Roda Putar</Link>
        <Link href="/game" className="btn-menu">Permainan</Link>
        <Link href="/question" className="btn-menu">Soal</Link>
        <Link href="/self-identity" className="btn-menu">Identitas Diri</Link>
    </section>
}

export default MenuButtonList