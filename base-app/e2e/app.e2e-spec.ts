// Un describe por cada página, dentro de este fichero

import { AppPage } from './app.po';

describe('base-app App', () => {
  let page: AppPage;

  // Levanta servidor:
  beforeEach(() => {
    page = new AppPage();
  });

  // Del objeto page ejecuta el método navigateTo(va hasta la pagina) -
  // getParagraphText son nombres de funciones inventados
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Saludos desde Babel');
  });
});

