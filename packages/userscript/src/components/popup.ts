import i18n from "../i18n";

class Popover extends HTMLElement {
  private _frame: HTMLDivElement = null;

  public constructor() {
    super();
  }

  public set visible(value: boolean) {
    if (value) {
      this._frame.style.visibility = "visible";
    } else {
      this._frame.style.visibility = "hidden";
    }
  }

  public attachInput(input: HTMLInputElement) {
    const { height, width, left, top } = input.getBoundingClientRect();
    this._frame.style.left = `${left + width}px`;
    this._frame.style.top = `${top + height / 2}px`;
    this.visible = true;
  }

  private connectedCallback() {
    this.attachShadow({ mode: "open" });
    this._frame = this.createFrame();
    this.shadowRoot.appendChild(this._frame);
  }

  private createFrame() {
    const frame = document.createElement("div");
    frame.style.position = "fixed";
    frame.style.top = "0";
    frame.style.left = "0";
    frame.style.width = "320px";
    frame.style.visibility = "hidden";
    frame.style.backgroundColor = "#ebebed";
    frame.style.transform = "translateY(-50%)";
    frame.style.border = "1px solid #bfbfbf";
    frame.style.padding = "4px 0";
    frame.style.borderRadius = "12px";
    frame.style.boxShadow = "rgba(0, 0, 0, 0.27) 0px 0px 16px";
    frame.style.fontFamily = "sans-serif";
    frame.style.marginLeft = "12px";

    const title = document.createElement("section");
    title.style.display = "flex";
    title.style.gap = "12px";
    title.style.padding = "0px 12px 6px 12px";
    title.style.alignItems = "center";
    title.style.borderBottom = "1px solid #00000033";
    title.style.fontSize = "13px";
    title.innerHTML = `
      <div style='font-size:1.6rem'>🔑</div>
      <div>${i18n("ui.title")}</div>
    `;

    const description = document.createElement("p");
    description.style.color = "#6c6c6e";
    description.style.fontSize = "12px";
    description.style.margin = "6px 0";
    description.style.padding = "0 16px";
    description.innerHTML = i18n("ui.description");

    frame.appendChild(title);
    frame.appendChild(description);
    return frame;
  }
}

export default Popover;