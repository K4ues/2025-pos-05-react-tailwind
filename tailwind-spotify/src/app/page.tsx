import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { ChevronRight, ChevronLeft, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">

          <div className="flex items-center gap-4">

            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>

          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"><img src="/bDay.png" width={104} height={104} alt="Capa do álbum B-Day"/><strong>B'Day</strong><button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button></a>
            <a className="bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"><img src="/bDay.png" width={104} height={104} alt="Capa do álbum B-Day"/><strong>B'Day</strong><button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button></a>
            <a className="bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"><img src="/bDay.png" width={104} height={104} alt="Capa do álbum B-Day"/><strong>B'Day</strong><button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button></a>
            <a className="bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"><img src="/bDay.png" width={104} height={104} alt="Capa do álbum B-Day"/><strong>B'Day</strong><button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button></a>
            <a className="bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"><img src="/bDay.png" width={104} height={104} alt="Capa do álbum B-Day"/><strong>B'Day</strong><button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button></a>
            <a className="bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"><img src="/bDay.png" width={104} height={104} alt="Capa do álbum B-Day"/><strong>B'Day</strong><button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"><Play /></button></a>
           
          </div>

          <h1 className="font-semibold text-3xl mt-10">Made for Kauê</h1>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/bDay.png"className="w-full" width={104} height={104} alt="Capa do álbum B-Day"/><strong className="font-semibold">Daily Mix 1</strong><span className="text-sm text-zinc-500">Beyoncé, Lady Gaga, Bebe Rexha and more</span>
            </div>
            <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/bDay.png"className="w-full" width={104} height={104} alt="Capa do álbum B-Day"/><strong className="font-semibold">Daily Mix 1</strong><span className="text-sm text-zinc-500">Beyoncé, Lady Gaga, Bebe Rexha and more</span>
            </div>
            <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/bDay.png"className="w-full" width={104} height={104} alt="Capa do álbum B-Day"/><strong className="font-semibold">Daily Mix 1</strong><span className="text-sm text-zinc-500">Beyoncé, Lady Gaga, Bebe Rexha and more</span>
            </div>
            <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/bDay.png"className="w-full" width={104} height={104} alt="Capa do álbum B-Day"/><strong className="font-semibold">Daily Mix 1</strong><span className="text-sm text-zinc-500">Beyoncé, Lady Gaga, Bebe Rexha and more</span>
            </div>
            <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/bDay.png"className="w-full" width={104} height={104} alt="Capa do álbum B-Day"/><strong className="font-semibold">Daily Mix 1</strong><span className="text-sm text-zinc-500">Beyoncé, Lady Gaga, Bebe Rexha and more</span>
            </div>
          </div>

        </main>

      </div>

      <Footer />
      
    </div>
  )
}
