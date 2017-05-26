describe('L.i18n', function(){
    beforeEach(function(){
        var fr = {
            "Simple phrase to translate": "Une simple phrase à traduire",
            "A phrase with a {variable} to translate": "Une phrase à traduire avec une {variable}"
        };
        L.registerLocale('fr', fr);
        L.setLocale('fr');
    });

    it('expects L.i18n to be defined', function (){
        expect(L.i18n).to.be.ok();
    });

    it('expects L._ to be defined', function (){
        expect(L._).to.be.ok();
    });

    it('expects current locale to be fr', function (){
        expect(L.locale).to.eql('fr');
    });

    it("should translate simple sentences", function() {
        expect(L._("Simple phrase to translate")).to.eql("Une simple phrase à traduire");
    });

    it("should translate sentences with a variable", function() {
        expect(L._("A phrase with a {variable} to translate", {variable: "foo"})).to.eql("Une phrase à traduire avec une foo");
    });

    it("should not fail if a variable is missing", function() {
        expect(L._("A phrase with a {variable} to translate")).to.eql("Une phrase à traduire avec une {variable}");
    });

    it("should not fail if the translation is missing", function() {
        expect(L._("A missing translation")).to.eql("A missing translation");
    });

    it("should not fail if the locale is missing", function() {
        L.setLocale('foo');
        expect(L._("Simple phrase to translate")).to.eql("Simple phrase to translate");
    });

    it('expects L.i18n to be defined', function (){
        expect(require("../Leaflet.i18n.js")).to.be.ok();
    });

});