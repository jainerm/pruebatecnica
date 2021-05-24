class Registrarse extends HTMLElement {
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
        this.innerHTML =  `<select class="form-control" id="_58_documentType" name="_58_documentType"> 
        <option class="" value=""> Selecciona </option> 
        <option class="" value="17728"> Cédula de Ciudadanía </option> 
        <option class="" value="17733"> Tarjeta de Identidad </option> 
        <option class="" value="17738"> Cédula de Extranjería </option> 
        <option class="" value="17743"> Registro Civil 
        </option> <option class="" value="17748"> Carné Diplomatico 
        </option> <option class="" value="17763"> Pasaporte </option> 
        <option class="" value="31657503"> Permiso especial de Permanencia </option> 
        <option class="" value="44384229"> NIT </option> 
        <option class="" value="44384237"> Pasaporte de la ONU </option> 
        <option class="" value="89823612"> Certificado Nacido Vivo </option>
        </select>`;
        var res = document.getElementById("cPasabordo");
        console.log(res);
    }   

}

window.customElements.define("re-gistrarse", Registrarse);

