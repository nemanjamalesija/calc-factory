export default function DomFactory() {}

DomFactory.prototype.populateDOM = function (
  el: HTMLDivElement,
  val: string | number,
  operation: string
) {
  el.textContent = `${val} ${operation || ""}`;
};
