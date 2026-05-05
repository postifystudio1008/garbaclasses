import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Deliverables } from './components/Deliverables';
import { Results } from './components/Results';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Deliverables />
      <Results />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;
