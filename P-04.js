function crearUsuario(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var usuario = crearUsuario('Lola Perez', '12345678', 'lola.perez@example.com');
console.log(usuario);
