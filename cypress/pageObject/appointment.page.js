import BasePage from "./base.page";

class AppointmentPage extends BasePage{

    static get selectFaculty () {
        return cy.get("[id='combo_facility']").select("Seoul CURA Healthcare Center");
    }
    static get checkBox () {
        return cy.get("[id='chk_hospotal_readmission']");
    }
    static get MedicaidCheck(){
        return cy.get("[id='radio_program_medicaid']");
    }
    static get setDate(){
        return cy.get("[id='txt_visit_date']");
    }    
    static get setComment(){
        return cy.get("[id='txt_comment']");
    }
    static get bookAppointButton(){
        return cy.get("[id='btn-book-appointment']");
    }
    static get menuButton(){
        return cy.get("[id='menu-toggle']");
    }
    static get sideBar(){
        return cy.get("[id='sidebar-wrapper']");
    }
    static get historyNav(){
        return cy.get("a[href='history.php#history']");
    }
    static get history(){
        return cy.get("[id='history']");
    }
}
export default AppointmentPage;