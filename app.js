function getUsusarioSync(id) {
    const start = new Date().getTime()
    while (new Date().getTime() - start <= 3000) {

    }
    return {
        id,
        nombre: `El id es${ id }`
    }
}

function getUsusario(id, callback) {
    let usuario = {
        id,
        nombre: `El id es${ id }`
    }
    setTimeout(() => callback(usuario), 3000)
}

module.exports = {
    getUsusarioSync,
    getUsusario
}