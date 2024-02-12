export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>Movie {id}</div>;
}
