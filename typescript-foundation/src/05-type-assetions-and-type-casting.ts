type One = string;
type Two = string | number;
type Three = "hello";

// * Converting Types with Assertions
let aa: One = "hello";
let bb = aa as Two; // less specific
let cc = aa as Three; // more specific
