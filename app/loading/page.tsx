import { BottomNav } from "@/components/BottomNav";

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[#f3f4f6] p-0 sm:items-center sm:p-4">
      <div className="relative flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden bg-white font-sans text-[#1a1a1a] shadow-2xl sm:min-h-[920px]">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-32">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#e5e7eb] border-t-[#173058]"></div>
          <p className="mt-6 text-[15px] font-semibold text-[#173058]">
            Carregando...
          </p>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
