import AppointmentPage from "../pageObject/appointment.page"
import BasePage from "../pageObject/base.page";


describe('Appointment scenario', () => {
  beforeEach( () => {
    BasePage.visit();
  });

  it('Scenario 1 - Make an Appointment', () => {
    BasePage.appointmentButton.click();
    BasePage.usernameField.type('John Doe');
    BasePage.passwordField.type('ThisIsNotAPassword');
    BasePage.loginButton.click();

    AppointmentPage.selectFaculty.select('Seoul CURA Healthcare Center').should('have.value','Seoul CURA Healthcare Center');
    AppointmentPage.checkBox.check().should('have.value', 'Yes');
    AppointmentPage.MedicaidCheck.check().should('have.value', 'Medicaid');
    AppointmentPage.setDate.clear().type('30/05/2023').trigger('change').should('have.value', '30/05/2023');
    AppointmentPage.setComment.type('CURA Healthcare Service',{force: true}).should('have.value', 'CURA Healthcare Service');
    AppointmentPage.bookAppointButton.click();
  })
})