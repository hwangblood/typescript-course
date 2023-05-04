"use strict";
// * What are Utility Types?
// https://www.typescriptlang.org/docs/handbook/utility-types.html
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// * Required and Readonly
// * Record
// * Pick and Omit
// * Exclude and Extract
// * Nonnullable
// * ReturnType
// * Parameters
// * Awaited
