import { helloWorld } from "./index";

test("adds 1 + 2 to equal 3", () => {
  let result = helloWorld();
  expect(result).toBe("Hello World from @postlight/seasons!");
});
