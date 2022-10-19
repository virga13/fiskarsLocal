

import { fiskarsData } from "../pages/fiskarsData"

describe('Fiskars - How to build your first desk', () => {
  it('Fiskars', () => {

    fiskarsData.visitSite();

    // accept cookies
    cy.wait(1000)
    fiskarsData.acceptCookies();
    
    // click crafting n sewing and select Home Decorating + assert
    fiskarsData.clickOnHomeDecorating();
    // navigate to Building Your Own Desk
    fiskarsData.clickOnBuildYourOwnDesk();
    // close pop up
    fiskarsData.closingEmailSubscriptionPopup();
    fiskarsData.checkToolsUsedAndNo()
    // click DIY desk

    // aseert containing /diy-desk-build-your-own-desk

    
    
    })

  })
