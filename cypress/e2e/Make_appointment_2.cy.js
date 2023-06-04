import AppointmentPage from "../pageObject/appointment.page"
import BasePage from "../pageObject/base.page";


describe('template spec', () => {
  beforeEach( () => {
    BasePage.visit();
  });
  
  it('Scenario 2 - Appointment history empty', () => {
    BasePage.appointmentButton.click();
    BasePage.usernameField.type('John Doe');
    BasePage.passwordField.type('ThisIsNotAPassword');
    BasePage.loginButton.click();

    AppointmentPage.menuButton.click({force: true});
    AppointmentPage.sideBar.should('have.class','active');
    AppointmentPage.historyNav.click();
    AppointmentPage.history.should('contain', 'No appointment.')
  })
})