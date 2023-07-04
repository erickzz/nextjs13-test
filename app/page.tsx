import ClientComponent from './components/clientComponent';

export default function Home() {
  return (
    <>
      <h1 className="hover:text-red-600 text-5xl inline transition-colors">
        Home
      </h1>
      <ClientComponent />
    </>
  );
}
