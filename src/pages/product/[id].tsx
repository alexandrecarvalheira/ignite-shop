import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return <p className="top">{query.id}</p>;
}
