class PreviewPage {
    async open(id) {
        await browser.url(`https://cloud.google.com/products/calculator/estimate-preview/${id}`);
    }
}

module.exports = PreviewPage;