import { act, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"
import { test, expect, beforeEach, describe } from "vitest";
import Question from "./Question.tsx";


describe(("Check if we can open/close question box"), () => {
    // Arrange setup outside tests
    const ren = render(<Question question={"Question"} answer={"Answer"}/>);
    const user = userEvent.setup();
    const answerElement = ren.getByText("Answer");

    test("User can open the question", async () => {
        // Arrange
        const plusButtonElement = ren.getByRole("button", {name: /open/i});
    
        // Act
        await user.click(plusButtonElement);
    
        // Assert
        expect(answerElement.classList.contains("hidden")).toBe(false);
    });
    
    test("User can close the question", async () => {
        // Arrange
        const closeButtonElement = ren.getByRole("button", {name: /close/i});
    
        // Act
        await user.click(closeButtonElement);
    
        // Assert
        expect(answerElement.classList.contains("hidden")).toBe(true);
    }); 
})
