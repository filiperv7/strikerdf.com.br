import bolas from '@/public/assets/bolas.webp'
import burguer from '@/public/assets/burguer.webp'
import eventos1 from '@/public/assets/eventos1.webp'
import eventos2 from '@/public/assets/eventos2.webp'
import eventos3 from '@/public/assets/eventos3.webp'
import bolicheIcon from '@/public/assets/icon_boliche.png'
import pistas from '@/public/assets/pistas.webp'

import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { StrikerSection } from '@/components/StrikerSection'
import { BoxLimitation } from '@/components/common/BoxLimitation'
import ResponsiveImage from '@/components/common/ResponsiveImage'
import { Oxanium } from 'next/font/google'
import Image from 'next/image'

const oxanium = Oxanium({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <Header />
      <Banner />
      <StrikerSection />

      <BoxLimitation className="py-10">
        <h2 className="text-center pb-4 text-4xl font-bold">Boliche</h2>

        <div className="flex items-center justify-center gap-8 pb-8 max-[640px]:flex-col-reverse max-[640px]:gap-5">
          <ResponsiveImage
            image={pistas}
            className={`max-[640px]:w-[90%] max-[640px]:h-[200px]
              min-[641px]:w-[200px] min-[641px]:h-[330px]
              `}
          />
          <div className="w-[40%] max-[910px]:w-[50%] max-[640px]:w-[90%] text-zinc-300 font-semibold">
            <h3 className="text-3xl font-extrabold mb-3 text-white max-[640px]:text-center max-[426px]:text-xl">
              Temos 16 (dezesseis) pistas automáticas da Brunswick
            </h3>
            <ul className="list-disc pl-4 max-[426px]:text-sm">
              <li>Marcação de pontuação digital em painel</li>
              <li>Superfícies antiderrapantes</li>
              <li>Levantamento das canaletas para o jogo das crianças</li>
              <li>Até 6 (seis) jogadores por pista.</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 pb-8 max-[640px]:flex-col max-[640px]:gap-5">
          <div className="w-[40%] max-[910px]:w-[50%] max-[640px]:w-[90%] text-zinc-300 font-semibold">
            <h3 className="text-3xl font-extrabold mb-3 text-white max-[640px]:text-center max-[426px]:text-xl">
              Bolas de diferentes pesos
            </h3>
            <ul className="list-disc pl-4 max-[426px]:text-sm">
              <li>
                Das mais leves, destinadas às crianças, pesam em torno de 2,5 kg
              </li>
              <li>Até as mais pesadas, 7,5kg, voltadas aos adultos</li>
              <li>
                A partir de cinco anos de idade, a criança consegue jogar sem o
                auxílio de um adulto
              </li>
            </ul>
          </div>
          <ResponsiveImage
            image={bolas}
            className={`max-[640px]:w-[90%] max-[640px]:h-[200px]
              min-[641px]:w-[200px] min-[641px]:h-[330px]
              `}
          />
        </div>

        <div className="flex items-center justify-center gap-8 pb-8 max-[640px]:flex-col-reverse max-[640px]:gap-5">
          <ResponsiveImage
            image={burguer}
            className={`max-[640px]:w-[90%] max-[640px]:h-[200px]
              min-[641px]:w-[200px] min-[641px]:h-[330px]
              `}
          />
          <div className="w-[40%] max-[910px]:w-[50%] max-[640px]:w-[90%] text-zinc-300 font-semibold">
            <h3 className="text-3xl font-extrabold mb-3 text-white max-[640px]:text-center max-[426px]:text-xl">
              Nosso Restaurante
            </h3>
            <ul className="list-disc pl-4 max-[426px]:text-sm">
              <li>Bebidas (de suco a drinks)</li>
              <li>Hambúrgueres</li>
              <li>Costelinhas</li>
              <li>Sobremesas</li>
              <li>Tudo com matéria-prima de qualidade.</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <h3 className="w-full sm:w-2/3 text-zinc-300 sm:text-lg font-medium text-center">
            As regras de segurança são repassadas pelos nossos colaboradores,
            além das placas informativas afixadas na área das pistas.
          </h3>
        </div>
      </BoxLimitation>

      <BoxLimitation className="py-10 bg-[#313131]">
        <div className="flex items-center justify-evenly gap-8 max-[768px]:flex-col">
          <div className="relative">
            <h2
              className={`relative z-10 text-4xl flex flex-col font-bold ${oxanium.className} max-[768px]:text-3xl`}
            >
              Horários de <span className="pl-14">Funcionamento</span>
            </h2>
            <Image
              src={bolicheIcon}
              alt=""
              className={`
                absolute w-32 -bottom-14 -left-8 z-0 
                max-[768px]:w-24 max-[768px]:-bottom-8 max-[768px]:-left-6
              `}
            />
          </div>

          <div>
            <h5 className="text-2xl font-semibold flex flex-col text-center mb-1">
              Segunda à Sexta{' '}
              <span className="text-sm text-center text-[#EC9B33] font-medium leading-5">
                16:00 às 23:00
              </span>
            </h5>
            <h5 className="text-2xl font-semibold flex flex-col text-center mb-1">
              Sábados e Feriados{' '}
              <span className="text-sm text-center text-[#EC9B33] font-medium leading-5">
                14:00 às 23:00
              </span>
            </h5>
            <h5 className="text-2xl font-semibold flex flex-col text-center">
              Domingos{' '}
              <span className="text-sm text-center text-[#EC9B33] font-medium leading-5">
                14:00 às 22:00
              </span>
            </h5>
          </div>
        </div>
      </BoxLimitation>

      <BoxLimitation className="pt-10 pb-12 leading-3 text-xs text-white font-semibold">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-center text-4xl font-bold">Valores</h2>
            <h5 className="-tracking-wider text-[#EC9B33]">
              até 6 jogadores por pistas
            </h5>
          </div>

          <div className="flex justify-evenly max-[456px]:flex-col max-[456px]:gap-4">
            <div className="flex flex-col justify-between">
              <h6 className="text-xl min-[457px]:leading-3">
                Segunda à Quinta
              </h6>
              <p className="text-base text-zinc-300">R$ 140/hora</p>
            </div>

            <div className="flex flex-col justify-between">
              <h6 className="text-xl flex flex-col leading-3">
                Sexta à Domingo{' '}
                <span className="text-xs font-normal">vésperas e feriados</span>
              </h6>

              <p className="text-base text-zinc-300">R$ 180/hora</p>
            </div>
          </div>
        </div>
      </BoxLimitation>

      <BoxLimitation className="py-10 bg-[#313131] text-center">
        <h2 className="pb-5 text-4xl font-bold">Eventos</h2>
        <p className="sm:w-[90%] mx-auto">
          Agende seu evento no Boliche Striker e garanta muita diversão para
          todos os seus convidados! Com um ambiente descontraído, o Striker é um
          lugar perfeito para festas, confraternizações e eventos corporativos.{' '}
          <span className="font-semibold">
            Venha comemorar e se divertir conosco!
          </span>
        </p>

        <div className="mt-4 flex justify-between items-center gap-3 max-[647px]:flex-wrap">
          <Image
            src={eventos1}
            alt=""
            className={`w-full h-[200px]
              md:w-[90%] md:h-[250px]
              lg:w-full lg:h-[330px]
              object-cover flex-1
              `}
          />
          <Image
            src={eventos2}
            alt=""
            className={`w-full h-[200px]
              md:w-[90%] md:h-[250px]
              lg:w-full lg:h-[330px]
              object-cover flex-1
              `}
          />
          <Image
            src={eventos3}
            alt=""
            className={`w-full h-[200px]

              md:w-[90%] md:h-[250px]
              lg:w-full lg:h-[330px]
              object-cover flex-1
              `}
          />
        </div>
      </BoxLimitation>
    </main>
  )
}
