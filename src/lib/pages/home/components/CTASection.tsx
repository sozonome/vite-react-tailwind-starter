const CTASection = () => (
  <div>
    <a href="https://github.com/sozonome/vite-react-chakra-starter">
      <button type="button">Open in Github</button>
    </a>
    <div>
      <a
        aria-label="Deploy to Vercel"
        href="https://vercel.com/import/git?s=https://github.com/sozonome/vite-react-chakra-starter"
      >
        <img src="https://vercel.com/button" alt="Vercel deploy button" />
      </a>
      <a
        aria-label="Deploy to Netlify"
        href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/vite-react-chakra-starter"
      >
        <img
          src="https://www.netlify.com/img/deploy/button.svg"
          alt="Netlify deploy button"
        />
      </a>
    </div>
  </div>
);

export default CTASection;
