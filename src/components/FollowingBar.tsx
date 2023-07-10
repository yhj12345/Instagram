"use client";
import { DetailUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";

const FollowingBar = () => {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following;

  return (
    <section>
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have followings`}</p>
      )}
      {users && users.length > 0 && (
        <ul className="flex">
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/`}>
                <Avatar image={image} highlight />
                <p>username</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default FollowingBar;
