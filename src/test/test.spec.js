const { Cloud, Preview } = require('../po/pages');
const { Search, CalcForm, Estimate } = require('../po/components');

const cloudPage = new Cloud();
const previewPage = new Preview();
const searchComponent = new Search();
const calcFormComponent = new CalcForm();
const estimateComponent = new Estimate();

describe("Google cloud suite", () => {
    beforeEach(async () => {
        await cloudPage.open();
    });

    it("Should calculate the price", async () => {
        // Performing a search
        await searchComponent.perform('Google Cloud Platform Pricing Calculator'); 

        // Going to Calculator page
        const link = await $('a[track-name="google cloud pricing calculator"]');
        link.click();

        // Starting calculator
        const addEstimate = await $('div[jsname="Olpjye"] button[data-idom-class="VVEJ3d"]');
        addEstimate.click();
        const compEngine = await $('div.DzHYNd div:nth-child(1)');
        compEngine.click();

        // Filling the form
        await calcFormComponent.setInstanceNum(4);
        await calcFormComponent.setMachineType('n1-standard-8');
        await calcFormComponent.setSSDOpt(2);
        await calcFormComponent.setRegion('europe-west4'); // Choosing Netherland (europe-west4), no Frankfurt option for V100
        await calcFormComponent.setCommittedUsage();
        await calcFormComponent.setGPU('nvidia-tesla-v100');

        // Estimated cost
        await browser.pause(2000);
    
        const share = await $('button[aria-label="Open Share Estimate dialog"]');
        share.click();
        const openSum = await $('div[jsname="rZHESd"] div.v08BQe a');
        const href = await openSum.getAttribute('href');
        const tmp = href.split('/');
        const postId = tmp[tmp.length - 1];
        await previewPage.open(postId);

        // Checking results
        const instanceNumRes = await estimateComponent.getInstanceNum();
        const OS = await estimateComponent.getOS();
        const provisioningModel = await estimateComponent.getProvisioningModel();
        const machineTypeRes = await estimateComponent.getMachineType();
        const GPUModelRes = await estimateComponent.getGPUModel();
        const GPUNum = await estimateComponent.getGPUNum();
        const ssdRes = await estimateComponent.getSSD();
        const locationRes = await estimateComponent.getLocation();
        const commitUsageRes = await estimateComponent.getCommittedUsage();

        expect(instanceNumRes).toEqual('4');
        expect(OS).toEqual('Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)');
        expect(provisioningModel).toEqual('Regular');
        expect(machineTypeRes).toEqual('n1-standard-8, vCPUs: 8, RAM: 30 GB');
        expect(GPUModelRes).toEqual('NVIDIA Tesla V100');
        expect(GPUNum).toEqual('1');
        expect(ssdRes).toEqual('2x375 GB');
        expect(locationRes).toEqual('Netherlands (europe-west4)');
        expect(commitUsageRes).toEqual('1 year');
    });
})