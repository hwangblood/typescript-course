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
// https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
// https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// ! Cannot assign to 'title' because it is a read-only property.
// assignVerified.title = "new title";
// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)
// ! Argument of type 'Readonly<Assignment>' is not assignable to parameter of type 'Required<Assignment>'.
// recordAssignment(assignVerified);
// * Record
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// * ReturnType
// * Parameters
// * Awaited
