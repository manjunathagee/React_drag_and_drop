import DragNDrop from "./components/DragNDrop/DragNDrop";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h2 className="text-center my-4">Drag and Drop to Rearrange Images.</h2>
      <DragNDrop />
    </main>
  );
}
