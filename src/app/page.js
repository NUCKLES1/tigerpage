import Ourservice from "./Ourservice";
import Ourstory from "./Ourstory";


export default function Home() {
  return (
    <main className="sm:w-full">
      <Ourstory />
      <Ourservice />
    </main>
  );
}
