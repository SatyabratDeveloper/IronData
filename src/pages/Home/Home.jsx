import {
  About,
  Hero,
  ColocationServices,
  Solutions,
  USPsData,
  Benefits,
  Partnership,
  Contact,
  SEO,
} from "../../components";

const Home = () => {
  return (
    <div>
      {/* SEO Tag */}
      <SEO
        title="IRON DATA VAULTS | Fortified Data Centre & Colocation Infrastructure in India"
        description="IRON DATA VAULTS delivers secure, scalable, and energy-efficient data center solutions. Partner with us for colocation, vault ownership, Web3 infrastructure, and ESG-aligned digital investments."
        keywords="data center India, secure colocation, Web3 infrastructure, ESG data centres, AI-ready colocation, GPU hosting, IRON DATA VAULTS"
        canonical="https://irondatavaults.com/"
        ogImage="https://irondatavaults.com/image.png"
      />

      <Hero />
      <About />
      <ColocationServices />
      <USPsData />
      <Solutions />
      <Benefits />
      <Partnership />
      <Contact />
    </div>
  );
};

export default Home;
