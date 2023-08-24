import Link from "next/link";

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
  </div>
);

export default Index;
