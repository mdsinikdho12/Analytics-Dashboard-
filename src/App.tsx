import Navber from "./components/ui/Navber";
import Header from "./components/ui/Header";
import Stats from "./components/pages/Stats";

function App() {
  return (
    <main className="px-2 bg-[#EDF0F6] min-h-screen">
      <Navber />
      <Header
        name="Sinikdho"
        stats={{ headcount: 1453, newHires: 560, turnoverRing: 3.24 }}
      />
      <Stats />
    </main>
  );
}

export default App;
