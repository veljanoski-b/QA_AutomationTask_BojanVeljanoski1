import { isIntENV, isMobile, isXSbreakPoint, isSbreakPoint, isMbreakPoint, isLbreakPoint, isXLbreakPoint, screenSizeViewport } from "./utils"

class Builder {
    size = () => {
        let size = 0
        if (isSbreakPoint()) {
            return size = '[Small Breakpoint]'
        }
        if (isMbreakPoint()) {
            return size = '[Medium Breakpoint]'
        }
        if (isLbreakPoint()) {
            return size = '[Large Breakpoint]'
        }
        if (isXLbreakPoint()) {
            return size = '[X-Large Breakpoint]'
        }
    }

    env = () => {
        let env = 0
        if (Cypress.config("baseUrl") === "https://tst.2.lighting.philips.com") {
            return env = '[Testing]'
        }
        if (Cypress.config("baseUrl") === "https://acc.2.lighting.philips.com") {
            return env = '[Acceptance]'
        }

        if (Cypress.config("baseUrl") === "https://dev.2.lighting.philips.com") {
            return env = '[Development]'
        }
    }

}

export default Builder

