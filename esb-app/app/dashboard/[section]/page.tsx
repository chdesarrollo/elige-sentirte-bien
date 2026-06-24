import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const dimensions = [
  "emocional",
  "fisica",
  "espiritual",
  "intelectual",
  "ocupacional",
  "ambiental",
  "social",
];

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold capitalize">{section}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dimensions.map((dim) => (
          <Link key={dim} href={`/dashboard/${section}/${dim}`}>
            <Card className="hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle className="capitalize">{dim}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}