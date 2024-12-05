const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../../app'); // Adjust the path as necessary
const Question = require('../../src/models/question'); // Adjust the path as necessary

chai.use(chaiHttp);
const { expect } = chai;

describe('Question Controller', () => {
    let questionStub;

    beforeEach(() => {
        questionStub = sinon.stub(Question, 'find');
    });

    afterEach(() => {
        questionStub.restore();
    });

    it('should create a new question', (done) => {
        const newQuestion = { title: 'Test Question', content: 'Test Content' };
        chai.request(server)
            .post('/questions')
            .send(newQuestion)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('title', 'Test Question');
                done();
            });
    });

    it('should update an existing question', (done) => {
        const updatedQuestion = { title: 'Updated Question', content: 'Updated Content' };
        chai.request(server)
            .put('/questions/1') // Assuming 1 is a valid question ID
            .send(updatedQuestion)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('title', 'Updated Question');
                done();
            });
    });

    it('should delete a question', (done) => {
        chai.request(server)
            .delete('/questions/1') // Assuming 1 is a valid question ID
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
});