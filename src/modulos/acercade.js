class AcercaDe extends HTMLElement {
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
        this.innerHTML =  `
            <div class="row">
                <div class="col-sm-12">
                    <h4>A cerca de</h4>
                    <p class="text-decripcion"></br>Este aplicación junto con todos sus logos y demás características, son propiedad intelectual de sus autores y desarrolladores.</br>
                    Por consiguiente cualquier uso no autorizado, acarrea responsabilidad de tipo legal conforme a las regulaciones gubernamentales locales de su país o región.</br>
                    Derechos reservados (c) - Colombia Mayo de 2021.</p>
                    <form action="">
                        <button class="btn btn-dark btn-gray">Informar a...</button>
                    </form>
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
    }    
}

window.customElements.define("a-cercade", AcercaDe);

