// * What are Utility Types?
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// * Partial
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// * Required and Readonly
// https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
// https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({
  ...assignGraded,
  verified: true,
});

// ! Cannot assign to 'title' because it is a read-only property.
// assignVerified.title = "new title";

// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)
// ! Argument of type 'Readonly<Assignment>' is not assignable to parameter of type 'Required<Assignment>'.
// recordAssignment(assignVerified);

// * Record
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// * Pick and Omit
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// * Exclude and Extract
// https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
// https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
type adjustedGrade = Exclude<LetterGrades, "U">;
type adjustedGrade2 = Exclude<LetterGrades, "C" | "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;
type highGrades2 = Extract<LetterGrades, "A" | "F">; // "F" is not existed

// * Nonnullable
// https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>; // null and undefined is not included

// * ReturnType
// https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype

// type newAssign = { title: string, points: number }
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// * Parameters
// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// * Awaited - helps us with the ReturnType of a Promise
// https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users: FetchUsersReturnType) => console.log(users));
