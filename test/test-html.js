// googletesting.js
casper.test.begin('Page', 3, function suite(test) {
    casper.start("http://localhost:8000/", function() {
//      test.assertTitle("Google", "google homepage title is the one expected");
        test.assertTitle('CasperJS Boilerplate', 'Title equals CasperJS Boilerplate');
        test.assertElementCount('h1', 2);
    });

    casper.then(function() {
        var h1s = this.evaluate(function() {
            return document.querySelectorAll('h1');
        });
        test.assertEquals(2, h1s.length);
    });

    casper.run(function() {
        test.done();
    });
});

function getElements(s) {
    return document.querySelectorAll(s);
}
