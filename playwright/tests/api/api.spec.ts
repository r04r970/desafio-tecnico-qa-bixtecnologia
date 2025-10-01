// DESAFIO-TECNICO-QA/playwright/tests/api/api.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000'; // ajuste para sua URL
let token: string;

test.describe('API Tests', () => {

  // Login antes de todos os testes
  test('POST /api/login - Deve retornar token válido', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/login`, {
      data: {
        email: 'admin@test.com',
        password: 'admin123',
      },
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('token');
    token = body.token;
  });

  // Informações do usuário logado
  test('GET /api/me - Informações do usuário logado', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('user');
    expect(data.user).toHaveProperty('id');
    expect(data.user).toHaveProperty('email');
    expect(data.user).toHaveProperty('name');
  });

  // Lista de produtos
  test('GET /api/products - Lista de produtos com estoque', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/products`);
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('items');  
    expect(Array.isArray(data.items)).toBeTruthy();  
    if (data.items.length > 0) {  
        expect(data.items[0]).toHaveProperty('id');  
        expect(data.items[0]).toHaveProperty('name');  
        expect(data.items[0]).toHaveProperty('price');  
        expect(data.items[0]).toHaveProperty('stock');  
    }
  });


  // Validar cupom de desconto
  test('POST /api/validate-coupon - Validar cupom', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/validate-coupon`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { code: 'DESCONTO10' },
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('valid');
    expect(typeof data.valid).toBe('boolean');
  });

  // Checkout
 test('POST /api/checkout - Finalizar compra', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/api/checkout`, {
  headers: { Authorization: `Bearer ${token}` },
  data: {
    items: [{ id: 1, quantity: 2 }], // usar um produto válido
    couponCode: 'FIXED50',
  },
});

});



  // Health check
  test('GET /api/health - Status da aplicação', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/health`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('status', 'ok');
  });

  // Logout
  test('POST /api/logout - Logout do usuário', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/logout`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('message');
  });

});
