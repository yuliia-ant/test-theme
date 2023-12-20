if (!customElements.get("custom-form")) {
  customElements.define(
    "custom-form",
    class CustomForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector("form");
        this.form.querySelector("[name=id]").disabled = false;
        this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
        this.cart =
          document.querySelector("cart-notification") ||
          document.querySelector("cart-drawer");
        this.submitButton = this.querySelector('[type="submit"]');

        // if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');

        // this.hideErrors = this.dataset.hideErrors === 'true';
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        if (this.submitButton.getAttribute("aria-disabled") === "true") return;
        const addToCartForms = document.querySelectorAll(
          'form[action="/cart/add"]'
        );

        this.submitButton.setAttribute("aria-disabled", "true");
        // this.submitButton.setAttribute('disabled', 'true');

        this.querySelector(".loading__spinner").classList.remove("hidden");

        fetch("/cart/add", {
          method: "post",
          body: new FormData(this.form),
        }).finally(() => {
          this.submitButton.setAttribute("aria-disabled", "false");
          this.querySelector(".loading__spinner").classList.add("hidden");
          getCartCount();
        });

        const getCartCount = async () => {
          const res = await fetch("/cart.json");
          const cart = await res.json();
          console.log(cart.item_count)
        }
      }
    }
  );
}
