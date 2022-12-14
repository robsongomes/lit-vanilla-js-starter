import { LitElement, html } from "lit";

export class HelloComponent extends LitElement {
  render() {
    return html`<h1>Simple Example</h1>`;
  }
}

customElements.define("hello-component", HelloComponent);
