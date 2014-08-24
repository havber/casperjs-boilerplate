casper.test.begin('Page', 3, function suite(test) {

    // Using some of casperjs's dom assertions
    casper.start("http://localhost:8000/", function() {
        test.assertTitle('CasperJS Boilerplate', 'Title equals CasperJS Boilerplate');
        test.assertElementCount('h1', 2);
    });

    // evaluating dom operations
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
