import {app,server} from '../app.js';
import request from "supertest";
import dataBase from '../src/database/productsDatabase.js';
import brandModel from '../models/brandModel.js';
//import ProductModel from '../models/productsModels.js';

describe("Test de CRUD brands",() =>{
    
    describe('GET /brands', () => {
        let response;
    
        beforeEach(async () => {
            response = await request(app).get('/brands').send();
        });
    
        test('should return a response with status 200 and type json, when I send a Get request', async () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
    
        test('Should return all brands', async () => {
            expect(response.body).toBeInstanceOf(Array);
        });
    });
    
    describe('POST /brands', () => {
        const newBrand = {
            brandname: 'test',
        };
    
        const wrongBrand = {
            wrong_field: 'test',
        };
    
        test('should return a response with status 200 and type json', async () => {
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });
    
        test('should return a message brand created successfully', async () => {
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.body.message).toContain('brand created successfully');
        });
    
        test('should return a message insertion error if post wrong brand', async () => {
            const response = await request(app).post('/brands').send(wrongBrand);
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'brandname' doesn't have a default value");
        });
    
        afterAll(async () => {
            await brandModel.destroy({ where: { brandname: 'test' } });
        });
    });
    
    describe('PUT /brands/:id', () => {
        test('should update an existing brand and return a response with status 200 and type json', async () => {
            // Implement the test to update an existing brand
        });
    
        test('should handle the case where the brand does not exist and return a response with status 404 and type json', async () => {
            const response = await request(app).put('/brands/0'); // Assuming ID 0 doesn't exist
            expect(response.status).toBe(404);
            expect(response.headers['content-type']).toContain('json');
        });
    
        afterAll(async () => {
            // Use brandModel.destroy to remove the test brand if necessary
        });
    });
    
    describe('DELETE /brands/:id', () => {
        test('should delete an existing brand and return a response with status 200 and type json', async () => {
            // Implement the test to delete an existing brand
        });
    
        test('should handle the case where the brand does not exist and return a response with status 404 and type json', async () => {
            const response = await request(app).delete('/brands/0'); // Assuming ID 0 doesn't exist
            expect(response.status).toBe(404);
            expect(response.headers['content-type']).toContain('json');
        });
    
        afterAll(() => {
            // Use brandModel.destroy to remove the test brand if necessary
        });
    });
    
    afterAll(() => {
        server.close();
        // Close the database connection if necessary (dataBase.close())
    });
        
})