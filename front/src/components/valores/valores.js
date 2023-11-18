import './valores.css';
import '.../Navbar.js';
let btn = document.querySelector('#valores');
let navbar = document.querySelector('.navbar');

<div className="val">
<h1>Valores Atuais</h1>
<table>
    <thead>
        <tr>
            <th width="2%"></th>
            <th width="2%">CARROS</th>
            <th width="2%">MOTOS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Fração:</td>
            <td width="20%">R$2,50</td>
            <td width="10%">R$1,50</td>
        </tr>
        <tr>
            <td>Hora:</td>
            <td width="20%">R$10,00</td>
            <td width="10%">R$6,00</td>
        </tr>
        <tr>
            <td>Diária:</td>
            <td width="20%">R$35,00</td>
            <td width="10%">R$25,00</td>
        </tr>
        <tr>
            <td>Mensal:</td>
            <td width="20%">R$250,00</td>
            <td width="10%">R$150,00</td>
        </tr>
    </tbody>
</table>

<button id="fechar">Fechar</button>

</div>


btn.addEventListener('click', function () {

    if (navbar.style.visibility === 'visible') {
        navbar.style.visibility = 'hidden';
    } else {
        navbar.style.visibility = 'visible';
    }

});