const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../../app'); // Adjust the path as necessary
const Project = require('../../src/models/project'); // Adjust the path as necessary

chai.use(chaiHttp);
const { expect } = chai;

describe('Project Controller', () => {
    let projectStub;

    beforeEach(() => {
        projectStub = sinon.stub(Project, 'find');
    });

    afterEach(() => {
        projectStub.restore();
    });

    it('should create a new project', (done) => {
        const newProject = { name: 'Test Project', description: 'Test Description' };
        chai.request(server)
            .post('/projects')
            .send(newProject)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('name', 'Test Project');
                done();
            });
    });

    it('should update an existing project', (done) => {
        const updatedProject = { name: 'Updated Project', description: 'Updated Description' };
        chai.request(server)
            .put('/projects/1') // Assuming 1 is a valid project ID
            .send(updatedProject)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('name', 'Updated Project');
                done();
            });
    });

    it('should delete a project', (done) => {
        chai.request(server)
            .delete('/projects/1') // Assuming 1 is a valid project ID
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });
    });
});