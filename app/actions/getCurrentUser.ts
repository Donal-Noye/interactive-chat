import getSession from "@/app/actions/getSession";
import prismadb from "@/app/libs/prismadb";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch (e: any) {
    return null;
  }
};

export default getCurrentUser
