import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"
import { test, expect } from "vitest";
import Question from "./Question.tsx";


test("Testing", () => {
    const ren = render(<Question />);
    
    expect(1).toBe(1);
});