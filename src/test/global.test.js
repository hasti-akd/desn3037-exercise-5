import { validateEmail } from "../components/List";

test("Validation test for correct emails", () => {

    const result = validateEmail("john@doe.com");
    expect(result).toBe(true);

})

test("Validation test for incorrect emails", () => {

    const result = validateEmail("john doe");
    expect(result).toBe(false);

})