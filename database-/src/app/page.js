
import DataDisplay from "./DataDisplay";
import SimpleForm from "./SimpleForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SimpleForm/>
      <DataDisplay/>
    </main>
  );
}
