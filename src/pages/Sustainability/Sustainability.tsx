import "./sustainability.scss";
import affordableEnergy from "./affordable.png";
import sustainableCommunity from "./sustainable.png";
import Container from "../../components/Container";
const Sustainability = () => {
  return (
    <Container>
      <div className="sustainability mt-20 md:mt-32">
        <div className="sustainability-container">
          <h2 className="sustainability-container-header text-2xl md:text-3xl lg:text-4xl font-bold">
            Novarick Sustainable Development Goals (SDGs)
          </h2>
          <div className="sustainability-content flex gap-3 my-4 flex-col md:flex-row">
            <div className="sustainability-content-body-container flex-1">
              <h3 className="sustainability-content-header text-xl">
                1]. Affordable and clean energy
              </h3>
              <p className="sustainabilty-content-body">
                Sustainable Development Goal 7 (SDG 7 or Global Goal 7) is one
                of 17 Sustainable Development Goals established by the United
                Nations General Assembly in 2015. It aims to "Ensure access to
                affordable, reliable, sustainable and modern energy for all."
                Access to energy is a important pillar for the wellbeing of the
                people as well The goal has Progress towards the targets is
                measured by six indicators. Three out of the five targets are
                outcome targets: Universal access to modern energy; increase
                global percentage of renewable energy; double the improvement in
                energy efficiency. The remaining two targets are means of
                implementation targets: to promote access to research,
                technology and investments in clean energy; and expand and
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={affordableEnergy}
                alt="sustainable communities"
                className="aspect-video rounded-md w-full md:w-[500px] object-cover"
              />
            </div>
          </div>
          <div className="sustainability-content flex gap-3 my-4 flex-col md:flex-row mb-10">
            <div className="sustainability-content-body-container flex-1">
              <h3 className="sustainability-content-header text-xl">
                2]. Sustainable cities and communities
              </h3>
              <p className="sustainabilty-content-body">
                Sustainable Development Goal 11 (SDG 11 or Global Goal 11),
                titled "sustainable cities and communities", is one of 17
                Sustainable Development Goals established by the United Nations
                General Assembly in 2015. The official mission of SDG 11 is to
                "Make cities inclusive, safe, resilient and sustainable". The 17
                SDGs take into account that action in one area will affect
                outcomes in other areas as well, and that development must
                balance social, economic and environmental sustainability. SDG
                11 has 10 targets to be achieved, and this is being measured
                with 15 indicators. The seven outcome targets include safe and
                affordable housing, affordable and sustainable transport
                systems, inclusive and sustainable urbanization, protection of
                the world's cultural and natural
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={sustainableCommunity}
                alt="sustainable communities"
                className="aspect-video rounded-md w-full md:w-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sustainability;
