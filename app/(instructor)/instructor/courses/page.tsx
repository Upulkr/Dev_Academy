import { columns } from "@/components/courses/Column";
import { DataTable } from "@/components/courses/custom/DataTable";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

async function CoursesPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }
  const courses = await db.course.findMany({
    where: { instructorId: userId },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="px-6 py-4 ">
      {" "}
      <Link href="/instructor/create-course">
        <Button>Create New Course</Button>
      </Link>
      <div>
        <div className="mt-10">
          <DataTable columns={columns} data={courses} />
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
