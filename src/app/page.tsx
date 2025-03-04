import { groupByDepartment } from "@/utils/dataTransform";
import Chart from "./components/chart";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  company: {
    department: string;
  };
};

export type DepartmentStats = {
  department: string;
  male: number;
  female: number;
};

async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.statusText}`);
    }
    const data = await res.json();
    return data.users as User[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page() {
  const users = await fetchUsers();
  const departmentData = Object.values(groupByDepartment(users));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Analytics</h1>
      <Chart data={departmentData} />
    </div>
  );
}
