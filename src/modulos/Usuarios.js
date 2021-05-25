class Usuarios extends HTMLElement {
    constructor() {
        super();
        this.usuario;
    }

    static get observedAttributes() {
        return ['name', 'subname'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch(nameAtr) {
            case "usuario": 
                this.usuario = newValue;
                break;
       }
    }
    connectedCallback() {
        this.innerHTML =  `<select class="form-control" id="_59_documentType" name="_59_documentType"> 
        <option class="" value=""> Seleccione usuario </option> 
        <option class="" value="19728"> Jainer Anotnio Marin </option> 
        <option class="" value="19733"> Carlos Quinones D. </option> 
        </select>`;
        var cUsuario = this.usuario;
        console.log(cUsuario);
    }   

}

window.customElements.define("usu-arios", Usuarios);

