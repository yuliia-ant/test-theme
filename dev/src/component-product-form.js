if (!customElements.get("custom-form")) {
  customElements.define(
    "custom-form",
    class CustomForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector("form");
        this.form.querySelector("[name=id]").disabled = false;
        this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
        this.submitButton = this.querySelector('[type="submit"]');
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        if (this.submitButton.getAttribute("aria-disabled") === "true") return;
        const addToCartForms = document.querySelectorAll(
          'form[action="/cart/add"]'
        );

        this.submitButton.setAttribute("aria-disabled", "true");

        this.querySelector(".loading__spinner").classList.remove("hidden");

        fetch("/cart/add", {
          method: "post",
          body: new FormData(this.form),
        }).then(() => {
          getCartCount();
        })
        .finally(() => {
          this.submitButton.setAttribute("aria-disabled", "false");
          this.querySelector(".loading__spinner").classList.add("hidden");
        });

        const getCartCount = async () => {
          const res = await fetch("/cart.json");
          const cart = await res.json();
          const countDiv = document.querySelector('.cart-item-count');
          countDiv.innerText = cart.item_count;
        }
      }
    }
  );
}
