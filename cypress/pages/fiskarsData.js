export class FiskarsData{
    
    visitSite(){
        cy.visit('/')
    };

    acceptCookies() {
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').contains('Accept all cookies').click({ force: true })
    };

    clickOnHomeDecorating(){
        cy.get('.heading').contains('Crafting & Sewing').trigger('mouseenter')
        cy.wait(200)
        cy.get('.last-visible-level').contains('Home Decorating').click({ force:true })
    
        cy.wait(1000)
        cy.url().should('include', '/crafting-and-sewing/ideas-and-how-tos/home-decorating')
    }

    closeMailPopUp(){
        cy.get('.close').contains('Close').click({ force: true}).type('{esc}')
    }

    clickOnBuildYourOwnDesk(){
        cy.get('.content-wrapper').contains('How to Build Your Own Desk').scrollIntoView().click({ force:true })
        cy.url().should('include', '/diy-desk-build-your-own-desk')
    }

    closingEmailSubscriptionPopup(){
        cy.wait(15000)
        cy.get('.modal-dialog').contains('Get inspiration').should('be.visible').type('{esc}')
    }

    checkToolsUsedAndNo(){
        cy.get('.has-no-link-styles').should('have.attr', 'target', '_blank').each(($el) => {
            for (i=0; i<=4; i++)
            $el = 'Tool' + 1
            cy.log($el)
        })
    }
}

export const fiskarsData = new FiskarsData();