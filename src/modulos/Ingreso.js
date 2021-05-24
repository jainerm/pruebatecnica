class Ingreso extends HTMLElement {
    constructor() {
        super();
        this.name;
        this.subname;
    }

    static get observedAttributes() {
        return ['name', 'subname'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch(nameAtr) {
            case "name": 
                this.name = newValue;
                break;
            case "subname": 
                this.subname = newValue;
                break;
        }
    }
    connectedCallback() {
        var cOutHTML = "";
        cOutHTML =  `<div class="row">
            <div class="col-sm-6 center my-2">
                <img src="imgs/aviones.jpg" alt="aviones" class="img-fluid img-aviones" width="300px;">
            </div>
            <div class="col-sm-6">
                <h4>Bienvenido!</h4>
                <p class="text-decripcion"></br>Indique la dirección de correo para ingresar en caso contrario suscribase.</p>`;
        if(gcAncho < 1024) {
            console.log("Pantalla de escritorio");
            cOutHTML += `</div>
                </div>
                <div class="row">
                    <div class="col-sm-12">`;
        }    
        cOutHTML += `<!-- <form action=""> -->
                        <!-- <div class="form-group"> --> 
                            <input type="text" value="" class="form-control rounded-0 my-name="cUsuarioIngreso" id="cUsuarioIngreso" placeholder="Escriba su correo">
                            <div id="msgUsuarioIngreso" class="error-datos" style="display: none;"></div>
                        <!-- </div> -->
                        <br/><br/>    
                        <button class="btn btn-dark btn-green" onclick="javascript:valingreso('ingresar');">Ingresar</button>
                        <button class="btn btn-dark btn-gray" onclick="javascript:valingreso('registro');">Registrarse ...</button>
                    <!-- </form> -->
                    <ul class="text-center list-unstyled list-inline mt-4">
                        <li class="list-inline-item">
                            <a href="">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>`;
        this.innerHTML = cOutHTML;    
    }    
}

window.customElements.define("in-greso", Ingreso);

