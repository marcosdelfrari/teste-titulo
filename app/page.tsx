import Image from "next/image";
import { Bell, IdCard, MapPin, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex justify-center items-start sm:items-center p-0 sm:p-4">
      {/* Mobile Container */}
      <div className="w-full max-w-[430px] bg-white shadow-2xl min-h-screen sm:min-h-[920px] flex flex-col relative overflow-hidden font-sans text-[#1a1a1a]">
        {/* Header Section */}
        <div className="bg-[#173058] pt-12 pb-20 px-6 flex flex-col items-center text-center relative z-0">
          <Image
            src="/logo-2.png"
            alt="República Federativa do Brasil"
            width={372}
            height={117}
            className="mb-4 w-[280px] h-auto"
            priority
          />
          <div className="text-white text-[19px] font-bold uppercase tracking-wider mt-1.5">
            Justiça Eleitoral
          </div>

          <div className="mt-7 text-white text-[24px] font-medium">
            e-Título
          </div>

          {/* Menu Icon */}
          <button className="absolute left-6 top-12">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Photo Card - na frente de tudo, sobrepondo azul e branco */}
        <div className="relative z-50 flex justify-center -mt-[78px] mb-[-78px] pointer-events-none">
          <div className="bg-white my-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col items-center relative border border-gray-100 pointer-events-auto">
            <div className="absolute top-2 right-2 z-10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <Image
              src="/PHOTO.png"
              alt="Foto do eleitor"
              width={202}
              height={283}
              className="w-[120px] h-[160px] rounded-2xl  shadow-md object-cover block"
              priority
            />
          </div>
        </div>

        {/* Content Section with Guilloché Background */}
        <div
          className="flex-1 bg-white relative -mt-6 rounded-t-[32px] px-6 pt-24 pb-32 overflow-y-auto scrollbar-hide z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40c20 0 20-20 40-20M0 20c20 0 20 20 40 20m0 0c-20 0-20 20-40 20m80 0c-20 0-20-20-40-20' fill='none' stroke='%23f5f5f5' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        >
          {/* Voter Name and ID */}
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-1 tracking-tight">
              Maria Fernanda de Paula
            </h2>
            <div className="text-[#173058] text-[22px] font-bold tracking-[0.05em]">
              Nº 2326 4533 0272
            </div>
          </div>

          {/* Status Label */}
          <div className="flex items-center justify-center gap-1.5 mb-12">
            <span className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-tight">
              Eleitor/Eleitora com biometria não coletada
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>

          {/* Voter Details Grid */}
          <div className="grid grid-cols-2 gap-y-8 mb-12">
            <div>
              <div className="text-[#173058] text-[13px] font-semibold mb-1">
                Data de nascimento
              </div>
              <div className="text-[19px] font-bold text-[#1a1a1a]">
                17/10/2000
              </div>
            </div>
            <div>
              <div className="text-[#173058] text-[13px] font-semibold mb-1">
                CPF
              </div>
              <div className="text-[19px] font-bold text-[#1a1a1a]">
                140.708.506-94
              </div>
            </div>
            <div>
              <div className="text-[#173058] text-[13px] font-semibold mb-1">
                Zona
              </div>
              <div className="text-[19px] font-bold text-[#1a1a1a]">093</div>
            </div>
            <div>
              <div className="text-[#173058] text-[13px] font-semibold mb-1 flex items-center gap-1">
                Seção
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173058"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <div className="text-[19px] font-bold text-[#1a1a1a]">0374</div>
            </div>
            <div className="col-span-2">
              <div className="text-[#173058] text-[13px] font-semibold mb-1">
                Município/UF
              </div>
              <div className="text-[19px] font-bold text-[#1a1a1a]">
                Contagem/MG
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-[#173058] text-[13px] font-semibold mb-1">
                Filiação
              </div>
              <div className="text-[19px] font-bold text-[#1a1a1a] leading-tight">
                Vivia Aparecida Goncalves
                <br />
                Jonas Alcebiades de Paula
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center mt-12 pt-12 border-t border-gray-100">
            <div className="bg-white p-5 border border-gray-200 rounded-2xl mb-8 shadow-sm">
              <Image
                src="/qretitulo.png"
                alt="QR Code de validação do e-Título"
                width={357}
                height={364}
                className="w-56 h-56 object-contain"
              />
            </div>

            <div className="text-center w-full px-4">
              <div className="text-[16px] font-bold text-[#1a1a1a] mb-1">
                Código de validação:
              </div>
              <div className="text-[16px] font-bold text-[#1a1a1a] mb-6 tracking-tight">
                /ZHM.QVQY.3P5H.N65Q
              </div>

              <div className="text-[14px] font-bold text-[#1a1a1a] mb-1">
                Data e hora* de emissão do
              </div>
              <div className="text-[14px] font-bold text-[#1a1a1a] mb-1">
                documento: 04/06/2026 22:26:20
              </div>
              <div className="text-[12px] text-gray-500 mb-10">
                * Horário de Brasília
              </div>

              <p className="text-[14px] text-gray-500 leading-relaxed mb-14">
                O e-Título é expedido gratuitamente. Valide a autenticidade do
                documento em{" "}
                <span className="underline font-bold text-[#1a1a1a]">
                  www.tse.jus.br
                </span>
                .
              </p>

              <div className="text-[14px] text-gray-400 mb-16">
                Versão 2026.05.28
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-100 px-2 pt-2 pb-10 flex justify-between items-center fixed bottom-0 left-0 right-0 sm:absolute max-w-[430px] mx-auto shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-10">
          <button className="flex flex-col items-center gap-1.5 flex-1">
            <div className="bg-[#173058]/5 p-2 rounded-xl">
              <IdCard size={26} color="#173058" strokeWidth={2} />
            </div>
            <span className="text-[11px] font-bold text-[#173058]">
              e-Título
            </span>
          </button>

          <button className="flex flex-col items-center gap-1.5 flex-1 opacity-30">
            <MapPin size={26} strokeWidth={2} />
            <span className="text-[11px] font-semibold">Onde votar</span>
          </button>

          <button className="flex flex-col items-center gap-1.5 flex-1 opacity-30">
            <Bell size={26} strokeWidth={2} />
            <span className="text-[11px] font-semibold">Notificações</span>
          </button>

          <button className="flex flex-col items-center gap-1.5 flex-1 opacity-30">
            <Menu size={26} strokeWidth={2} />
            <span className="text-[11px] font-semibold">Mais opções</span>
          </button>

          {/* Home Indicator Bar for iOS */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-200 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
