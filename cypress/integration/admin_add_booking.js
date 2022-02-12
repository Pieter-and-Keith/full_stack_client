const getInputByLabel = (label) => {
	return cy
		.contains("label", label)
		.invoke("attr", "for")
		.then((id) => {
			cy.get("#" + id);
		});
};

describe("Admin Create new service", () => {
    it("New service created", () => {
        cy.visit("http://localhost:3001/sign_in")
        cy.url().should("match",/sign_in/)
        getInputByLabel("Email").type("admin@test.com")
        getInputByLabel("Password").type("admin")
        cy.get("button").contains("Sign In").click()
        cy.get('[href="/admin_option_create"]').click();
        getInputByLabel("Service Name").type("new service")
        getInputByLabel("Description").type("addition of a new service")
        getInputByLabel("Price($)").type("999")
        cy.get("button").contains("Submit").click()
        cy.url().should("match",/^\S+$/)
    })
})