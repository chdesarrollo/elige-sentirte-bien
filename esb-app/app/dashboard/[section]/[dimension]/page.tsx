import Link from "next/link";
import { courses } from "@/components/course/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ section: string; dimension: string }>;
}) {
  const { section, dimension } = await params;

  const filtered = courses.filter(
    (c) => c.section === section && c.dimension === dimension
  );

  if (filtered.length === 0) {
    return <p className="p-6">No hay cursos aún.</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold capitalize">
        {section} - {dimension}
      </h1>

      <div className="grid gap-4">
        {filtered.map((course) => (
          <Link key={course.id} href={`/dashboard/course/${course.id}`}>
            <Card className="hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent
                dangerouslySetInnerHTML={{ __html: course.description }}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}