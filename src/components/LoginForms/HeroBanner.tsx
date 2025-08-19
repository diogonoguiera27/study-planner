export const HeroBanner = () =>{
    return(
        <section className="!bg-gradient-to-br !from-[#00a3ff] !to-[#0077cc] !text-white !flex !items-center !justify-center !p-10 lg:!p-14 lg:!rounded-tr-[72px] lg:!rounded-br-[72px]">
        <div className="!max-w-xl !space-y-6 !text-center">
          <h1 className="!text-3xl !font-bold !tracking-tight lg:!text-4xl">
            📘 Study Planner
          </h1>
          <p className="!text-lg !text-white/90 lg:!text-xl">
            Organize seus estudos, acompanhe seu progresso e alcance seus
            objetivos.
          </p>

          <img
            src="/study.png"
            alt="Ilustração sobre estudos"
            className="!mx-auto !max-w-sm !rounded-2xl !shadow-lg"
          />
        </div>
      </section>
    )
}