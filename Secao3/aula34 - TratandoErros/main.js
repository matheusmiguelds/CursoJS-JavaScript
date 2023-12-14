// try {
//     //É executado quando não tem erros
//     console.log("Abri um arquivo");
//     console.log("Manipulei um arquivo e gerou erro");
//     console.log(oi);
// } catch (e) {
//     //É exucutado quando tem erros
//     console.log("Tratando o erro");
// } finally {
//     //Sempre
//     console.log("Fechei o arquivo");
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date.");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

}

try {
    const data = new Date("08-28-2010 12:58:12");
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //
} finally {
    console.log("Tenha um bom dia.")
}



