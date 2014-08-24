casper.test.begin('Page', 1, function suite(test) {

    // Using some of casperjs's dom assertions
    casper.start("http://localhost:8000/another.html", function() {
        var form = this.evaluate(function() {
            return document.querySelector('form');
        });
        test.assertEquals('post', form.method);
    });

    casper.run(function() {
        test.done();
    });
});
