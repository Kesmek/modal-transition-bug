import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Modal } from "@qwik-ui/headless";

export default component$(() => {
  useStyles$(`
.modal-trigger {
  background-color: grey;
  transition: background-color 2s;
}

.modal-trigger:hover {
  background-color: green;
}

.modal-panel[data-closing] {
  opacity: 0;
}

.modal-panel {
  opacity: 1;
  transition: opacity 2s;
}
`);

  return (
    <>
      <Modal.Root>
        <Modal.Trigger class="modal-trigger">Open Modal</Modal.Trigger>
        <Modal.Panel class="modal-panel">
          <Modal.Close class="modal-trigger">Close Modal</Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
