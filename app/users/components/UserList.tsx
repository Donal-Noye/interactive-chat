"use client";

import { User } from "@prisma/client";
import UserBox from "@/app/users/components/UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside className="user-list">
      <div className="flex-col px-5">
        <div
          className="
					text-2xl
					font-bold
					text-white
					py-4
				">
          People
        </div>
      </div>
      {items.map((item) => (
        <UserBox key={item.id} data={item} />
      ))}
    </aside>
  );
};

export default UserList;
