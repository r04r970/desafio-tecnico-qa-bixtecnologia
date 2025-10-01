// DESAFIO-TECNICO-QA/playwright/tests/e2e/login_cart.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

function rand(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

function getRandomCupom(): string {
  const cupons = ['WELCOME10', 'SAVE20', 'FIXED50', 'EXPIRED'];
  const index = rand(cupons.length) - 1; 
  return cupons[index];
}


test.describe('Loign and Cart Flow', () => {

    test('should login successfully with valid credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);
  
      await loginPage.goto();
      await loginPage.login('admin@test.com', 'admin123');
    });
  
    test('should add product to cart', async ({ page }) => {
        await page.goto('/products');
    /*
        const estoques = await page.$$eval('.product-info', items =>
            items.map(item =>
                item.querySelector('.stock').textContent.match(/\d+/)[0]
            )
        );

        var [qtdKeyboard, qtdMouse, qtdHeadset] = estoques.map(Number)

        qtdKeyboard = 0;

        const nKeyboard = qtdKeyboard ? rand(qtdKeyboard) : 0;
        const nMouse = qtdMouse ? rand(qtdMouse) : 0;
        const nHeadset = qtdHeadset ? rand(qtdHeadset) : 0;*/

        const nKeyboard = 1
        const nMouse = 1
        const nHeadset = 1
        
        if (nKeyboard > 0){
            for (let i = 0; i < nKeyboard; i++) {
                await page.getByRole('listitem').filter({ hasText: 'Keyboard' }).getByRole('button').click();
                await page.waitForTimeout(300);
            }
        }
        
        if (nMouse > 0){
            for (let i = 0; i < nMouse; i++) {
                await page.getByRole('listitem').filter({ hasText: 'Mouse' }).getByRole('button').click();
                await page.waitForTimeout(300);
            }
        }
        
        if (nHeadset > 0){
            for (let i = 0; i < nHeadset; i++) {
                await page.getByRole('listitem').filter({ hasText: 'Headset' }).getByRole('button').click();
                await page.waitForTimeout(300);
            }
        }
        
        await page.getByRole('textbox', { name: 'Código do cupom' }).click();
        await page.getByRole('textbox', { name: 'Código do cupom' }).fill(getRandomCupom());
        await page.getByRole('button', { name: 'Aplicar Cupom' }).click();

        await page.getByRole('button', { name: 'Finalizar Compra' }).click();
        
        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
        });
        await page.getByRole('textbox', { name: 'Email' }).click();
        await page.getByRole('textbox', { name: 'Email' }).fill('admin@test.com');
        await page.getByRole('textbox', { name: 'Senha' }).click();
        await page.getByRole('textbox', { name: 'Senha' }).fill('admin123');
        await page.getByRole('button', { name: 'Entrar' }).click();
        await page.getByRole('button', { name: 'Finalizar Compra' }).click();
    });
});
