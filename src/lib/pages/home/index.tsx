import CTASection from './components/CTASection';
import SomeText from './components/SomeText';

const Home = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <SomeText />
      <CTASection />
    </div>
  );
};

export default Home;
