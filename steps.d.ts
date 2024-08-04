/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type login_page = typeof import('./pages/login_page.js');
type criar_usuarioPage = typeof import('./pages/criar_usuario.js');
type minha_conta_pagePage = typeof import('./pages/minha_conta_page.js');
type cadastroSucesso_pagePage = typeof import('./pages/cadastroSucesso_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, login_page: login_page, criar_usuarioPage: criar_usuarioPage, minha_conta_pagePage: minha_conta_pagePage, cadastroSucesso_pagePage: cadastroSucesso_pagePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
