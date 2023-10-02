import prismadb from "@/app/libs/prismadb";

const getMessages = async (conversationId: string) => {
	try {
		return await prismadb.message.findMany({
			where: {
				conversationId: conversationId,
			},
			include: {
				sender: true,
				seen: true
			},
			orderBy: {
				createdAt: 'asc'
			}
		});
	} catch (e) {
		return [];
	}
};

export default getMessages;
