import Title1 from "./components/Title1";
import Title2 from "./components/Title2";
import Title3 from "./components/Title3";
import Title from "./components/Title";
export default function Home() {
  const name = "ghazal";
  return (
    <main>
      <Title props={name} />
      <Title props='Title1' />
      <Title props='Title2' />
      <Title props='Title3' />
    </main>
  );
}
