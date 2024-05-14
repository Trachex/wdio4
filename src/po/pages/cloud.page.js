class CloudPage {
    async open() {
        await browser.url("https://cloud.google.com/");
    }
}

module.exports = CloudPage;