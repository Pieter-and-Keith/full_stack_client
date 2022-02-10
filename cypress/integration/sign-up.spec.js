const getInputByLabel = (label) => {
	return cy
		.contains("label", label)
		.invoke("attr", "for")
		.then((id) => {
			cy.get("#" + id);
		});
};

describe("Basic", () => {
    it("Login redirects", () => {
        cy.visit("http://localhost:3001/sign_up")
        cy.url().should("match",/sign_up/)
        getInputByLabel("Username").type("new-user@test.com")
        getInputByLabel("Email").type("newuser@test.com")
        getInputByLabel("Password").type("password")
        getInputByLabel("Password Confirmation").type("password")
        cy.get("button").contains("Sign Up").click()
        cy.url().should("match",/details/)
    })
})
