export default async function TestLoading() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="w-80 h-80 bg-green-400">
      <h1>Div Teste</h1>
    </div>
  );
}
