/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    describe('RSS Feeds', function () {
        // make sure all feeds actually exist by determining length greater than zero
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // make sure all feeds has a url
        it('have url', function () {
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        });
        // make sure all feeds have a name
        it('has name', function () {
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        });

    });

    describe('The menu', function () {
        // make sure the menu is hidden by default
        it('is hidden', function () {
            expect(allFeeds.length).not.toBe(0);
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
        // make sure the menu changes when it's clicked, and goes back to hidden
        it('changes visiblility', function () {
            let link = document.getElementsByClassName('menu-icon-link');
            link[0].click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            link[0].click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        // 
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        // make sure feeds were loaded by testing to determine length is greater than 0 for the entries
        it('loaded feeds', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
        //Test with incorrect link

    });

    describe('News Feed Selection', function () {

        // load each feed, store the text content in "content", then load the second feed and store the content in "newcontent" and then
        // test to make sure they are not the same text content 
        let content;
        let newContent;

        beforeEach(function (done) {
            loadFeed(0, function () {
                content = $('.feed').html();
                loadFeed(1, function () {
                    newContent = $('.feed').html();
                    done();
                });
            });
        });
        it('actually changes', function () {
            expect(newContent).not.toBe(content);
        });
    });

}());