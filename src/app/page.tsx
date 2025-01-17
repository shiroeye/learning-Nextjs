import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import Header from "@/components/Header";
import InteractiveButton from "@/components/InteractiveButton";
import ArrayState from "@/components/ArrayState";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <InteractiveButton />
      <ArrayState />
      <Headline title="Home page" />
      <Main />
      <Footer />
    </div>
  );
}
