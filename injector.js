(async () => {
    const palavras = `
// COLE AQUI A SUA LISTA DE PALAVRAS OU PERSONAGENS (UMA POR LINHA)
// Exemplo:
// Palavra 1
// Palavra 2
// Palavra 3
`.trim().split("\n").filter(linha => !linha.trim().startsWith("//"));

    const esperar = ms =>
        new Promise(resolve => setTimeout(resolve, ms));

    // Campo específico de adicionar palavras
    const campo =
        document.querySelector(
            '.createTheme .globalSettings form label.text input[type="text"]'
        )
        ||
        document.querySelector(
            'input[type="text"][maxlength="30"]'
        );

    // O botão + ADD é um input submit
    const add =
        document.querySelector(
            '.createTheme .globalSettings form label.btAdd input[type="submit"]'
        )
        ||
        [...document.querySelectorAll('input[type="submit"]')]
            .find(x =>
                /add/i.test(x.value || "")
            );

    if (!campo) {
        console.error("[ERRO] Campo de palavra não encontrado.");
        return;
    }

    if (!add) {
        console.error("[ERRO] Botão + ADD não encontrado.");
        return;
    }

    console.log("[OK] CAMPO:", campo);
    console.log("[OK] ADD:", add);
    console.log(`[INICIANDO] Inserindo ${palavras.length} palavras...`);

    function colocarValor(elemento, valor) {
        const setter = Object.getOwnPropertyDescriptor(
            HTMLInputElement.prototype,
            "value"
        ).set;

        setter.call(elemento, valor);

        elemento.dispatchEvent(
            new Event("input", {
                bubbles: true
            })
        );

        elemento.dispatchEvent(
            new Event("change", {
                bubbles: true
            })
        );
    }

    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i].trim();

        if (!palavra) continue;

        campo.focus();
        colocarValor(campo, palavra);

        await esperar(200);

        add.click();

        console.log(
            `[ADICIONADO] ${i + 1}/${palavras.length} - ${palavra}`
        );

        await esperar(500);
    }

    console.log("[CONCLUÍDO] Todas as palavras foram inseridas.");
})();
