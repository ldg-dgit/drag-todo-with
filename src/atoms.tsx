import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todo",
  default: ["a", "b", "c", "d", "e", "f"],
});
