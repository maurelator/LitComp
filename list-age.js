var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ListAge = class ListAge extends LitElement {
    constructor() {
        super(...arguments);
        this.ageItems = [];
    }
    render() {
        return html `
        <p @myage=${this.updateName}><slot></slot></p>
        <span>Historique de recherche:</span>
        <ul>
          ${this.ageItems.map(item => html `
              <li>
              ${item}
              </li>
            `)}
        </ul>
     `;
    }
    updateName(e) {
        console.log(this.ageItems);
        this.ageItems.push(e.detail.ages);
        this.requestUpdate();
    }
};
__decorate([
    property({ type: Array })
], ListAge.prototype, "ageItems", void 0);
ListAge = __decorate([
    customElement('list-age')
], ListAge);
export { ListAge };
//# sourceMappingURL=list-age.js.map