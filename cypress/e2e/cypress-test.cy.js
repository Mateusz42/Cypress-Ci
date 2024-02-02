import LoginPage from "./../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();
describe('Check Login', () => {
    beforeEach('go to page', () => {
        cy.visit('/');
    });

    it('Successfully login user 1 to the GoIt page', () => {
        cy.fixture('user1.json').then((user) => {

            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail, password);

            cy.url().should('include', 'homepage');
            cy.get('[id="go-to-the-course-homepage-widget"]')
                .scrollIntoView()
                .should('be.visible');
        });
    });
});

describe.skip('user visit all tabs', () => {
    before('go to page and login', () => {
        cy.visit('/');
        cy.fixture('user1.json').then((user) => {

            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail, password);
        });
    });

    it('user sucessfully visit all tabs', () => {
        homePage.selectMenuElement('Courses');
        cy.wait(2000);
        homePage.selectMenuElement('Duels');
        cy.wait(2000);
        homePage.selectMenuElement('Tournament');
        cy.wait(2000);
        homePage.selectMenuElement('Consultation');
        cy.wait(2000);


    });

    after(() => {
        homePage.menuComponent.logout();
        cy.wait(5000);
    });
});