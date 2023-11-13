import Image from 'next/image'
import SteamNavbar from "@/app/SteamNavbar";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-steam-primary'>
      <SteamNavbar />

    </main>
  )
}
