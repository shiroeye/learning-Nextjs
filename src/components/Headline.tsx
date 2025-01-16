export default function Headline(props: { title: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{props.title}</h1>
    </div>
  );
}
