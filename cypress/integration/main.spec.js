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
        cy.visit("http://localhost:3001/sign_in")
        cy.url().should("match",/sign_in/)
        getInputByLabel("Email").type("admin@test.com")
        getInputByLabel("Password").type("admin")
        cy.get("button").contains("Sign In").click()
    })
})
