# Gartic Theme Injector

Script em JavaScript para automatizar a inserção em massa de palavras na tela de criação de temas personalizados do Gartic.

## Como funciona

O script localiza o campo de texto e o botão de adicionar (`+ ADD`) na interface de criação de temas do Gartic, preenche o valor simulando eventos nativos de `input` e `change` do navegador (necessário para frameworks reativos) e clica automaticamente para registrar cada item da lista com um intervalo seguro entre as requisições.

## Como usar

1. Acesse o Gartic no navegador e vá até a página de **Criar Tema**.
2. Copie o código do arquivo `injector.js` deste repositório.
3. No bloco `const palavras`, substitua as linhas de comentário pela sua lista de palavras, colocando **uma palavra ou termo por linha**:

```javascript
const palavras = `
Gato
Cachorro
Elefante
`.trim().split("\n").filter(linha => !linha.trim().startsWith("//"));
```

4. Na aba do navegador onde o Gartic está aberto, pressione `F12` (ou `Ctrl + Shift + I` no Windows/Linux, `Cmd + Option + I` no Mac) para abrir as ferramentas de desenvolvedor (**DevTools**).
5. Na janela que abrir, clique na aba **Console**.
6. Cole o código já modificado com a sua lista no campo do console e pressione `Enter`.
7. Aguarde a conclusão. Você pode acompanhar o andamento diretamente pelas mensagens de progresso exibidas no console.

> **Nota sobre colagem bloqueada:** Por segurança, navegadores como Chrome e Edge costumam bloquear a colagem de scripts no console pela primeira vez. Se aparecer um aviso impedindo de colar, digite `allow pasting` (ou `permitir colagem`, se o navegador estiver em português) no console, pressione `Enter` e cole o script novamente.

## Limitações e dicas
* **Utilize alguma IA para gerar listas de temas muito grandes.
* **Limite de caracteres:** O formulário do Gartic aceita no máximo **30 caracteres** por palavra (`maxlength="30"`). Termos maiores serão cortados automaticamente pelo site.
* **Foco da aba:** Evite minimizar o navegador ou trocar de aba enquanto o script estiver rodando, pois os navegadores reduzem a velocidade de execução de scripts em abas inativas.
