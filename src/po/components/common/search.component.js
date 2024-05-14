class SearchComponent {
    async perform(query) {
        const search = await $('div[jsname="Ohx1pb"]');
        search.click();
        const input = await $('input#i4');
        await input.setValue(query);
        const searchBtn = await $('i[jsname="Z5wyCf"]');
        searchBtn.click();
    }
}

module.exports = SearchComponent;