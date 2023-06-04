class BasePage {
    static get url() {
      return "/";
    }
  
    static visit() {
      cy.visit(this.url);
    }
    static get appointmentButton () {
        return cy.get("[id='btn-make-appointment']");
    }
    static get usernameField () {
        return cy.get("[id='txt-username']");
    }
    static get passwordField () {
        return cy.get("[id='txt-password']");
    }
    static get loginButton () {
        return cy.get("[id='btn-login']");
    }
  }
  
  export default BasePage;