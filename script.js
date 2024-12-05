function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        title: '<strong>Bem-vindo(a)!</strong>',
        html: `
            <p>Olá, eu sou <strong>Pascoal Zage</strong>, apaixonado por tecnologia e inovação.</p>
            <p>Explore minhas habilidades e projetos. Quem sabe possamos trabalhar juntos para criar algo incrível!</p>
        `,
        icon: 'info',
        confirmButtonText: '<span style="color: #fff;">Conhecer mais</span>',
        confirmButtonColor: '#000000', // Botão preto
        buttonsStyling: false, // Desativa o estilo padrão dos botões
        customClass: {
            confirmButton: 'swal2-custom-button', // Classe personalizada
        },
        background: '#f2f2f2', // Fundo cinza claro
        backdrop: `
            rgba(0, 0, 0, 0.5)
            url("https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif") // GIF discreto
            center center
            no-repeat
        `
    });
});

 
