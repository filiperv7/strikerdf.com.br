import { BoxLimitation } from './common/BoxLimitation'

export function StrikerSection() {
  return (
    <BoxLimitation className="py-10 bg-[#313131]">
      <div className="text-center">
        <h2 className="text-center pb-5 text-4xl font-bold">Striker</h2>

        <div className="flex gap-8 justify-around max-[670px]:flex-col max-[670px]:gap-4">
          <p className="text-justify min-[800px]:pl-16">
            O Boliche Striker traz consigo uma junção perfeita entre boliche,
            bar, restaurante e ambiente familiar. A capacitação contínua de
            nossos colaboradores e a manutenção diária de nossas pistas e
            equipamentos tem como objetivo um atendimento de qualidade aos
            nossos clientes.
          </p>

          <p className="text-justify min-[800px]:pr-16">
            Possuímos um cardápio variado, com produtos de qualidade, procurando
            atender a maioria das preferências gastronômicas. Somos uma ótima
            opção para aqueles que desejam passar o tempo com amigos e
            familiares em um ambiente seguro e agradável.
          </p>
        </div>
      </div>
    </BoxLimitation>
  )
}
