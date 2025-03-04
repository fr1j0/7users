export function groupByDepartment(users: any[]) {
  return users.reduce((acc, user) => {
    const { department } = user.company;
    const fullName = user.firstName + user.lastName;

    if (!acc[department]) {
      acc[department] = {
        department,
        male: 0,
        female: 0,
        ageRange: `${user.age}-${user.age}`,
        hair: {},
        addressUser: {},
      };
    }

    // Gender count
    acc[department][user.gender]++;

    // Age range
    const [minAge, maxAge] = acc[department].ageRange.split("-").map(Number);
    acc[department].ageRange = `${Math.min(minAge, user.age)}-${Math.max(
      maxAge,
      user.age
    )}`;

    // Hair color count
    acc[department].hair[user.hair.color] =
      (acc[department].hair[user.hair.color] || 0) + 1;

    // Address
    acc[department].addressUser[fullName] = user.address.postalCode;

    return acc;
  }, {});
}
