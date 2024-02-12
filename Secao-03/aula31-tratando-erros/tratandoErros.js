// try {
//     console.log('Abri um arquivo');
//     console.log(a);
//     console.log('Manipulei o arquivo e gerou um erro');
// } catch (error) {
//     console.log('Tratando o erro');
// } finally {
//     // Sempre
//     console.log('Fechei o arquivo');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

try {
    console.log(retornaHora(1));
} catch (error) {
    //
} finally {
    console.log('Tenha um bom dia.')
}