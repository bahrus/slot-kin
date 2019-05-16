import {define} from 'trans-render/define.js';
import {getHost} from 'xtal-element/getHost.js';

const name = 'name';
export class SlotKin extends HTMLElement{
    static get is(){return 'slot-kin';}

    connectedCallback(){

    }

    getTemplate(){
        const templ = this.querySelector('template') as HTMLTemplateElement | null;
        if(templ === null){
            setTimeout(() => {
                this.getTemplate();
            }, 50);
            return;
        }
        const host = getHost(this);
        if(host === null) return;
        const slotName = this.getAttribute(name);
        let target = host
        if(slotName !== null){
            setTimeout(() =>{
                const existingSlot = host.querySelector(`slot=[${slotName}]`);
                if(existingSlot === null){
                    const clonedNode = templ.content.cloneNode(true);
                }
            }, 50);
            
        }
    }
}
define(SlotKin);