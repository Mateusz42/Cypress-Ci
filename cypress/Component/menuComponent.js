class MenuComponent {
    get openMenuButton() {
        return cy.get('[data-test-id="CircularProgressbarWithChildren__children"]');
    }

    get logoutButton() {
        return cy.get('[data-valuetext="Log out"]');
    }

    logout() {
        this.openMenuButton.click();
        this.logoutButton.click();
    }
}

export default MenuComponent 