import {describe, it, expect} from "vitest";

const {merge} = require("../src/merge.ts");

describe("Merge function", () => {
  it("Sort all 3 column correctly", () => {
    const collection_1 = [1,3,5,7];
    const collection_2 = [2,4,6,8];
    const collection_3 = [10,9,0];

    const merged = merge(collection_1,collection_2,collection_3);
    expect(merged).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
  });

  it("Able to merged negative number correctly", () => {
    const collection_1 = [-7, -6];
    const collection_2 = [-4, 4];
    const collection_3 = [5, -5];

    const merged = merge(collection_1,collection_2,collection_3);
    expect(merged).toEqual([-7,-6,-5,-4,4,5]);
  });

  it("Able to merge empty collection correctly", () => {
    const collection_1 = [];
    const collection_2 = [-4, 4];
    const collection_3 = [5, -5];

    const merged = merge(collection_1,collection_2,collection_3);
    expect(merged).toEqual([-5,-4,4,5]);
  });

});