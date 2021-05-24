class Cabecera extends HTMLElement {
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
        var cOutHTML =  `<div class="row">
        <div class="col-sm-6 my-4"> 
          <h3><a href="index.html">
          <img src="imgs/imageonline-co-transparentimage.png" alt="aeronaves">
          </a>Alquiler de Aero naves</h3>
       </div>
       <div class="col-sm-6 my-4"> 
          <input type="checkbox" id="menu-bar" onclick="javascript:mostrarmenu();">
          <label class="icon-menu" for="menu-bar"><i class="fa fa-bars"></i></label>
          <nav id="menulateral" class="menu">
              <a href="#" onclick="javascript:valingreso('alquilar');" class="item-varmenu">Alquilar aeronave</a>
          </nav>
       </div>    
      </div>`;
                    
        console.log(cOutHTML);
        this.innerHTML = cOutHTML;
        var cUsuario = this.usuario;
        console.log(cUsuario);
    }   

}

window.customElements.define("ca-becera", Cabecera);

