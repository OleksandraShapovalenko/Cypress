let sid
let carId
describe("API", () => {
    beforeEach(() => {
        const user = {
            "email": "test3333@test.com",
            "password": "123456789Qq",
            "remember": false
        }
      cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', user).then((Response)=>{
        const headers = Response.headers;
        const cookie = headers['set-cookie'][0];
        const cookieArray = cookie.split('\n');

        for ( const cookie of cookieArray )
            if( cookie.trim().startsWith('sid=')) {
                sid = (cookie.trim().split('=')[1]).split(';')[0];
                break;
            }
        cy.log(sid)
    })
    })
    it("GET cars", () => {
        cy.request({
        method: 'GET',
        url: 'https://qauto.forstudy.space/api/cars',
        headers: {
            Cookie: `sid=${sid}`,
        },
    }).then((response) => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.equal(200)
}) 
    })
    it("GET car models", ()=> {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars/models',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.body.data[0]).to.have.property('carBrandId')
    }) 
    })
    it("POST new car", ()=> 
        {
            const newCar = {
                "carBrandId": 1,
                "carModelId": 1,
                 "mileage": 200
            } 
        cy.request({
            method: 'POST',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
            body: newCar,
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('status', 'ok');
            carId = response.body.data.id;
    }) 
    })
    it("DELETE car", ()=> {
        cy.request({
            method: 'DELETE',
            url: `https://qauto.forstudy.space/api/cars/${carId}`,
            headers: {
                Cookie: `sid=${sid}`,
            }
        }).then ((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.body).to.have.property('status', 'ok');
        })
    })
})