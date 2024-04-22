import Banner from "../../components/HomeComponents/Banner/Banner";
import Cards from "../../components/HomeComponents/Cards/Cards";
import Diagram from "../../components/HomeComponents/Diagram/Diagram";
import Features from "../../components/HomeComponents/Features/Features";
import Onboarding from "../../components/HomeComponents/Onboarding/Onboarding";


export default function Home() {
  return (
    <div className="container max-w-5xl mx-auto">
      <Banner />
      <Features />
      <Diagram />
      <Cards />
      <Onboarding />
    </div>
  )
}
