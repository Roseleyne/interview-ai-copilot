const { test, expect, request } = require('@playwright/test');

test.describe('API Users - Testes de contrato', () => {
  test('deve consultar usuário com sucesso', async () => {
    const apiContext = await request.newContext({
      baseURL: 'https://reqres.in',
    });

    const response = await apiContext.get('/api/users/2');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('id');
    expect(body.data).toHaveProperty('email');
    expect(body.data).toHaveProperty('first_name');
    expect(body.data).toHaveProperty('last_name');
  });

  test('deve retornar 404 para usuário inexistente', async () => {
    const apiContext = await request.newContext({
      baseURL: 'https://reqres.in',
    });

    const response = await apiContext.get('/api/users/999');

    expect(response.status()).toBe(404);
  });
});
