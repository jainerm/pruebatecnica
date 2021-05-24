class Aeronaves extends HTMLElement {
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
        this.innerHTML = `<div class="row">
                            <div class="col-sm-6">
                                <select class="form-control" id="_59_documentType" name="_59_documentType" onchange="javascript:fveraeronave(this.value);"> 
                                <option class="" value=""> Seleccione </option> 
                                <option class="" value="Alien"> Alien </option> 
                                <option class="" value="Halo"> Halo </option> 
                                <option class="" value="Matrix"> Matrix </option> 
                                <option class="" value="Galactica"> Galactica </option> 
                                <option class="" value="Elysium"> Elysium </option> 
                                <option class="" value="Star-trek"> Star Trek </option> 
                                </select>
                            </div>
                            <div class="col-sm-6 text-center">
                                <img class="img-aeronaves" id="verAeronave" src="src/aeronaves/enblanco.png" alt="aeronaves" >
                            </div>
                          <div>`;
        var cUsuario = this.usuario;
        console.log(cUsuario);
    }   

}

window.customElements.define("aero-naves", Aeronaves);

