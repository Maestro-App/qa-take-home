export class Login {
    constructor(page) {
        this.page = page;
        this.initLocators();
    }

    initLocators() {
        this.emailField = this.page.getByLabel('Email');
        this.passwordField = this.page.getByLabel('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async signIn(email, password) {
        await this.emailField.click();
        await this.emailField.fill(email);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}