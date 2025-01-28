import Header from '@/sections/header/Header';
import Banner from '@/sections/banner/Banner';
import Escolher from '@/sections/escolher/Escolher';
import Fgts from '@/sections/fgts/Fgts';
import Servicos from '@/sections/servicos/Servicos';
import Profissionais from '@/sections/profissionais/Profissionais';
import Footer from '@/sections/footer/Footer';


export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Banner />
      <Escolher/>
      <Fgts/>
      <Servicos/>
      <Profissionais/>
      <Footer/>
    </main>
  )
}
