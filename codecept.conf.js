const {
  setHeadlessWhen
} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  name: 'automacao-codeceptjs-web',
  tests: './steps/*_test.js', // ALTEREI AQUI POR CONTA DA CRIAÇÃO DA PASTA STEP E TER COLOCADO OS ARQUIVOS DE TESTES NELA
  output: './output',
  helpers: {
    Playwright: {
      url: ' https://automationexercise.com/' //'https://automationpratice.com.br/',
      ,
      browser: process.env.BROWSER || 'chromium',
      show: true, // pra ver o navegador abrindo,
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--window-size=1920,1200",
            "--headless" // pra rodar healdess
          ]
        }
      }

    }
  },
  include: {
    I: './steps_file.js',

    home_page: "./pages/home_page.js",
    login_page: "./pages/login_page.js",

    criar_usuarioPage: "./pages/criar_usuario.js",

    minha_conta_pagePage: "./pages/minha_conta_page.js",

    cadastroSucesso_pagePage: "./pages/cadastroSucesso_page.js",

    minhaConta_pagePage: "./pages/minhaConta_page.js",
  },
  bootstrap: null,
  teardown: null,
  mocha: {},

  plugins: {
    allure: {
      enabled: true
    },
    mocha: {
      reporterOptions: { // acho bem bacana o relatorio 
       // reportDir: "output"
      }
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: true,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
    },

    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },

  }
}