const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function clearDatabase() {
  try {
    // Deleting all rows from each table
    await database.course.deleteMany({});
    await database.subCategory.deleteMany({});
    await database.category.deleteMany({});
    await database.level.deleteMany({});

    console.log("All rows cleared successfully");
  } catch (error) {
    console.error("Error clearing rows", error);
  } finally {
    await database.$disconnect();
  }
}

clearDatabase();