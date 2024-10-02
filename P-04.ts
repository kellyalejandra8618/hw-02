function crearUsuario(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const usuario = crearUsuario('Lola Perez', '12345678', 'lola.perez@example.com');

console.log(usuario);
