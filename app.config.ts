export default defineAppConfig({
  ui: {
    notifications: {
      wrapper: "fixed flex flex-col justify-end z-[55]",
      position: "top-0 right-0 bottom-auto",
      width: "w-full size-sm:w-96",
      container: "px-4 size-sm:px-6 py-6 space-y-3 overflow-y-auto",
    },
    primary: "app",
    button: {
      default: {
        color: "primary",
      },
    },
    // app: 'primary',
  },
});
