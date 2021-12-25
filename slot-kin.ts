
export class SlotKin extends HTMLElement{
    static is = 'slot-kin';

    connectedCallback(){
        this.getTemplate();
    }

    getTemplate(){
        const templ = this.querySelector('template') as HTMLTemplateElement | null;
        if(templ === null){
            setTimeout(() => {
                this.getTemplate();
            }, 50);
            return;
        }
        const rn = this.getRootNode() as DocumentFragment;
        const host = (<any>rn).host;
        if(host === null) return;
        const slotName = this.getAttribute('name');
        let target = host
        if(slotName !== null){
            setTimeout(() =>{
                customElements.whenDefined(host.localName).then(() =>{
                    const existingSlot = rn.querySelector(`[slot="${slotName}"]`);
                    if(existingSlot === null){
                        const clonedNode = templ.content.cloneNode(true);
                        host.appendChild(clonedNode);
                    }
                })

            }, 50);
            
        }
    }
}
customElements.define('slot-kin', SlotKin);