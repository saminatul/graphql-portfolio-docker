const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../../src/server'); // Adjusted path
const Contact = require('../../prisma'); // Adjusted path

chai.use(chaiHttp);
const { expect } = chai;

describe('Contact Controller', () => {
    let contactStub;

    beforeEach(() => {
        contactStub = sinon.stub(Contact, 'find');
    });

    afterEach(() => {
        contactStub.restore();
    });

    it('should create a new contact', (done) => {
        const newContact = { name: 'Test Contact', email: 'test@example.com' };
        chai.request(server)
            .post('/contacts')
            .send(newContact)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('name', 'Test Contact');
                done();
            });
    });

    it('should update an existing contact', (done) => {
        const updatedContact = { name: 'Updated Contact', email: 'updated@example.com' };
        chai.request(server)
            .put('/contacts/1') // Assuming 1 is a valid contact ID
            .send(updatedContact)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('name', 'Updated Contact');
                done();
            });
    });

    it('should delete a contact', (done) => {
        chai.request(server)
            .delete('/contacts/1') // Assuming 1 is a valid contact ID
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
});