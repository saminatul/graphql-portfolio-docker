const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../../app'); // Adjust the path as necessary
const Testimonial = require('../../src/models/testimonial'); // Adjust the path as necessary

chai.use(chaiHttp);
const { expect } = chai;

describe('Testimonial Controller', () => {
    let testimonialStub;

    beforeEach(() => {
        testimonialStub = sinon.stub(Testimonial, 'find');
    });

    afterEach(() => {
        testimonialStub.restore();
    });

    it('should create a new testimonial', (done) => {
        const newTestimonial = { name: 'Test User', message: 'Test Message' };
        chai.request(server)
            .post('/testimonials')
            .send(newTestimonial)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('name', 'Test User');
                done();
            });
    });

    it('should update an existing testimonial', (done) => {
        const updatedTestimonial = { name: 'Updated User', message: 'Updated Message' };
        chai.request(server)
            .put('/testimonials/1') // Assuming 1 is a valid testimonial ID
            .send(updatedTestimonial)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('name', 'Updated User');
                done();
            });
    });

    it('should delete a testimonial', (done) => {
        chai.request(server)
            .delete('/testimonials/1') // Assuming 1 is a valid testimonial ID
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
});