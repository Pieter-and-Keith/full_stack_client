const getInputByLabel = (label) => {
	return cy
		.contains("label", label)
		.invoke("attr", "for")
		.then((id) => {
			cy.get("#" + id);
		});
};

describe("Admin Update Payment", () => {
    it("Payment updated", () => {
        cy.visit("http://localhost:3001/sign_in")
        cy.url().should("match",/sign_in/)
        getInputByLabel("Email").type("admin@test.com")
        getInputByLabel("Password").type("admin")
        cy.get("button").contains("Sign In").click()
        cy.url().should("match",/^\S+$/)
        cy.contains("Admin Page")
        // cy.visit("http://localhost:3001/admin")
        // cy.get(':nth-child(1) > button').click();
        // cy.get('.sc-kfPuZi > :nth-child(8)').click();
    })
})
