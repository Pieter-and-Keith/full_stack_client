const getInputByLabel = (label) => {
	return cy
		.contains("label", label)
		.invoke("attr", "for")
		.then((id) => {
			cy.get("#" + id);
		});
};

describe("Create Booking", () => {
    it("Booking created", () => {
        cy.visit("http://localhost:3001/sign_in")
        cy.url().should("match",/sign_in/)
        getInputByLabel("Email").type("pieter@test.com")
        getInputByLabel("Password").type("Password1")
        cy.get("button").contains("Sign In").click()
        cy.get(':nth-child(3) > .sc-jRQBWg').click();
        cy.get('select').select('1');
        cy.get('input').click();
        cy.get('.react-datepicker__day--023').click();
        cy.get('.sc-hBUSln > :nth-child(2)').click();
    })
})
