import getSession from "@/app/actions/getSession";
import prismadb from "@/app/libs/prismadb";

const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) return [];

  try {
    const users = await prismadb.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

		return users;
  } catch (e: any) {
    return [];
  }
};

export default getUsers;
