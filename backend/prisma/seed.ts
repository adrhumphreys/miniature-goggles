import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@paw.nz",
      name: "Alice",
      notebooks: {
        create: {
          title: "First notebook",
          notes: {
            create: [
              {
                title: "Note 1",
                content: "The first content",
              },
              {
                title: "Note 2",
                content: "The second content",
              },
            ],
          },
        },
      },
    },
  });

  console.log(alice);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
