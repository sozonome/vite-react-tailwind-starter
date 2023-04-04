const ICON_SIZE = 22;

const SomeImage = () => {
  return (
    <div>
      <img
        src="/assets/vite-logo.svg"
        title="vite"
        height={ICON_SIZE}
        width={ICON_SIZE}
        alt="vite-icon"
      />
      <img
        src="/assets/react-icon.svg"
        title="react"
        height={ICON_SIZE}
        width={ICON_SIZE}
        alt="react-icon"
      />
      <img
        src="/assets/ts-logo-512.svg"
        title="TypeScript"
        height={ICON_SIZE}
        width={ICON_SIZE}
        alt="ts-icon"
      />
    </div>
  );
};

export default SomeImage;
