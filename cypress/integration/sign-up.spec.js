const getInputByLabel = (label) => {
	return cy
		.contains("label", label)
		.invoke("attr", "for")
		.then((id) => {
			cy.get("#" + id);
		});
};

describe("Sign up", () => {
    it("New user signed up", () => {
        cy.visit("http://localhost:3001/sign_up")
        cy.url().should("match",/sign_up/)
        getInputByLabel("Username").type("Adam_ant4")
        getInputByLabel("Email").type("adam_ant4@test.com")
        getInputByLabel("Password").type("Password1")
        getInputByLabel("Password Confirmation").type("Password1")
        cy.get("button").contains("Sign Up").click()
        cy.url().should("match",/details/)
        getInputByLabel("First name").type("Adam")
        getInputByLabel("Last name").type("Ant")
        getInputByLabel("Phone Number").type("0469789876")
        getInputByLabel("Street Number").type(19)
        getInputByLabel("Street Name").type("George Street")
        getInputByLabel("Suburb").type("Sydney")
        getInputByLabel("Postcode").type("2000")
        getInputByLabel("State").type("NSW")
        getInputByLabel("Rego").type("FDS87B")
        getInputByLabel("Make").type("Tesla")
        getInputByLabel("Model").type("Model 3")
        cy.get("button").contains("submit").click()
        cy.url().should("match",/^\S+$/)
    })
})