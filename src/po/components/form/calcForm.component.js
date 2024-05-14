class CalcFormComponent {
    async setInstanceNum(n) {
        const instanceNum = await $('#c11');
        instanceNum.click();
        await instanceNum.setValue(n);
    }
    async setMachineType(opt) {
        const machineType = await $('div[jsname="kgDJk"] div[jsname="oYxtQd"]');
        machineType.click();
        const machineOpt = await $(`li[data-value="${opt}"]`);
        machineOpt.click();
    }
    async setSSDOpt(opt) {
        const ssd = await $('div[data-field-type="180"] div.VfPpkd-TkwUic');
        ssd.click();
        const ssdOpt = await $(`ul[aria-label="Local SSD"] li[data-value="${opt}"]`);
        ssdOpt.click();
    }
    async setRegion(opt) {
        const region = await $('div[data-field-type="115"] div.VfPpkd-TkwUic');
        region.click();
        const regionOpt = await $(`li[data-value="${opt}"]`);
        regionOpt.click();
    }
    async setCommittedUsage() {
        const commitUsage = await $('div[data-field-type="116"] div[jsname="U7okFc"] div:nth-child(2)');
        commitUsage.click();
    }
    async setGPU(opt) {
        const addGPU = await $('div[data-field-type="114"] span.eBlXUe-hywKDc');
        addGPU.click();
        const GPUModel = await $('div[data-field-type="158"] div.VfPpkd-TkwUic');
        GPUModel.click();
        const GPUOpt = await $(`li[data-value="${opt}"]`);
        GPUOpt.click();
    }
}

module.exports = CalcFormComponent;