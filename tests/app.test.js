const request = require('supertest');
const app = require('../app');

describe('Pruebas del servidor', () => {
  test('Ruta principal responde con Hola mundo', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hola Mundo');
  });

  test('Ruta inexistente responde con 404', async () => {
    const res = await request(app).get('/noexiste');
    expect(res.statusCode).toBe(404);
  });
});
