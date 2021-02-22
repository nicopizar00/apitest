const chai = require('chai');
const expect = chai.expect;

const { post, get, getCategory } = require('../endpoint/joke')

describe('Jokes Test Suite', function () {

    it('POST a single type joke Correctly (OK).', async () => {
        const data = require('../data/single_joke.json')
        let posted = await post(data);
        expect(posted.status).to.equal(201);
    });


    it('POST a two part type joke Correctly (OK).', async () => {
        const data = require('../data/twopart_joke.json')
        let posted = await post(data);
        expect(posted.status).to.equal(201);
    });


    it('POST a joke with no valid request.', async () => {
        let posted = await post({ data: "bad data" });
        expect(posted.status).to.equal(400);
    });

    it('GET a random joke.', async () => {
        let getted = await get();
        expect(getted.status).to.equal(200);
    });


    it('GET a random joke of a specific category.', async () => {
        let getted = await getCategory('Programming');
        expect(getted.status).to.equal(200);
        expect(getted.data.category).to.equal('Programming');
    });
});
