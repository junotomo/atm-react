# Projeto svelte atm

Criado junto com  o __atm-projeto__, é a parte do front end do projeto portanto deve se rodar com o projeto mencionado.


## Para rodar

Criar um arquivo .env no diretório raiz do projeto 
```
REACT_APP_PUBLIC_WITHDRAWL=http://localhost:3000/atm/withdrawal
REACT_APP_PUBLIC_BALANCE_URL=http://localhost:3000/atm/balance
REACT_APP_PUBLIC_ATM_NOTES_NUMBER=http://localhost:3000/atm/atmNotesNumber

```

Instalar as dependencioas com o comando  `npm install` (or `npm install` or `yarn`), e roddar o programa:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run start -- --open
```
(http://localhost:3000/)
