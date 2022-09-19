const img = document.getElementsByTagName('img')[0];
img.style.display = 'none';

$('#boton').click(()=>{
    // GET AJAX
    $.get(`http://localhost:5000/amigos`, amigos => {
        showFriends(amigos);
    });
});

$('#search').click(()=>{
    let id = document.getElementById('input').value;

    // GET AJAX
    $.get(`http://localhost:5000/amigos/${id}`, (amigo)=>{
        document.getElementById('amigo').textContent = amigo.name;
    });
});

$('#delete').click(()=>{
    let id = document.getElementById('inputDelete').value;
    console.log(id);
    // DELETE AJAX
    $.post(`http://localhost:5000/amigos/${id}`, (response)=>{
        document.getElementById('success').textContent = response;
    });
});

function showFriends(amigos){
    const div = document.getElementsByClassName('friends');
    const lista = document.createElement('ul');
    let li;

    amigos.forEach((elemento)=>{
        li = document.createElement('li');
        li.textContent = elemento.name;
        lista.appendChild(li);
    });

    div[0].appendChild(lista);
}


