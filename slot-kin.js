import { define } from 'trans-render/define.js';
import { getHost } from 'xtal-element/getHost.js';
const name = 'name';
export class SlotKin extends HTMLElement {
    static get is() { return 'slot-kin'; }
    connectedCallback() {
        this.getTemplate();
    }
    getTemplate() {
        const templ = this.querySelector('template');
        if (templ === null) {
            setTimeout(() => {
                this.getTemplate();
            }, 50);
            return;
        }
        const host = getHost(this);
        if (host === null)
            return;
        const slotName = this.getAttribute(name);
        let target = host;
        if (slotName !== null) {
            setTimeout(() => {
                customElements.whenDefined(host.localName).then(() => {
                    const existingSlot = host.querySelector(`[slot="${slotName}"]`);
                    if (existingSlot === null) {
                        const clonedNode = templ.content.cloneNode(true);
                        host.appendChild(clonedNode);
                    }
                });
            }, 50);
        }
    }
}
define(SlotKin);
