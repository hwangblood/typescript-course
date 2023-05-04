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
// * Record
// * Pick and Omit
// * Exclude and Extract
// * Nonnullable
// * ReturnType
// * Parameters
// * Awaited
