import { LightningElement } from 'lwc';

export default class NoHandler extends LightningElement {
    handleClick() {
        this.dispatchEvent(new CustomEvent('toggle'));
    }
}