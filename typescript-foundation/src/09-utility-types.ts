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
// * Pick and Omit
// * Exclude and Extract
// * Nonnullable
// * ReturnType
// * Parameters
// * Awaited
