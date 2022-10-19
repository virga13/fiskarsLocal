export class commonMethods{

    acceptAllCookies(selector, text, button){
        cy.get(selector).contains(text).click(button)
        
    }

}

export const CommonMethods = new commonMethods();