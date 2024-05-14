class EstimateComponent {
    async getInstanceNum() {
        return await (await $('div.wZCOB > div:nth-child(7) > span > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getOS() {
        return await (await $('div.wZCOB > div:nth-child(8) > span > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getProvisioningModel() {
        return await (await $('div.wZCOB > div:nth-child(9) > span > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getMachineType() {
        return await (await $('div.wZCOB > div:nth-child(3) > span:nth-child(2) > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getGPUModel() {
        return await (await $('div.wZCOB > div:nth-child(4) > span:nth-child(2) > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getGPUNum() {
        return await (await $('div.wZCOB > div:nth-child(4) > span:nth-child(3) > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getSSD() {
        return await (await $('div.wZCOB > div:nth-child(5) > span > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getLocation() {
        return await (await $('div.wZCOB > div:nth-child(15) > span > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
    async getCommittedUsage() {
        return await (await $('div.wZCOB > div:nth-child(16) > span > span.Z7Pe2d.g5Ano > span.Kfvdz')).getHTML(false);
    }
}

module.exports = EstimateComponent;