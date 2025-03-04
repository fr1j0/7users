import { groupByDepartment } from "./dataTransform";

const mockUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    age: 30,
    hair: { color: "Black" },
    address: { postalCode: "12345" },
    company: { department: "Engineering" },
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    gender: "female",
    age: 25,
    hair: { color: "Blond" },
    address: { postalCode: "54321" },
    company: { department: "Engineering" },
  },
  {
    firstName: "Alice",
    lastName: "Brown",
    gender: "female",
    age: 40,
    hair: { color: "Brown" },
    address: { postalCode: "67890" },
    company: { department: "HR" },
  },
];

describe("groupByDepartment", () => {
  it("should group users by department", () => {
    const result = groupByDepartment(mockUsers);

    expect(result).toEqual({
      Engineering: {
        department: "Engineering",
        male: 1,
        female: 1,
        ageRange: "25-30",
        hair: { Black: 1, Blond: 1 },
        addressUser: {
          JohnDoe: "12345",
          JaneSmith: "54321",
        },
      },
      HR: {
        department: "HR",
        male: 0,
        female: 1,
        ageRange: "40-40",
        hair: { Brown: 1 },
        addressUser: {
          AliceBrown: "67890",
        },
      },
    });
  });

  it("should handle an empty user list", () => {
    expect(groupByDepartment([])).toEqual({});
  });
});
