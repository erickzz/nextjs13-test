export const generateMetadata = async ({ params }) => {
  return {
    title: `Prod ${params.id}`,
  };
};

export default function Product({ params }: { params: { id: string } }) {
  return <h1 className="text-2xl">Product Id: {params.id}</h1>;
}
