import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate('/');

  return (
    <div>
      <h1>Page not Found</h1>

      <div>
        <img width={400} src="/assets/404 Error-rafiki.svg" alt="404" />
        <a href="https://stories.freepik.com/web">
          Illustration by Freepik Stories
        </a>
      </div>

      <div>
        <p>It&apos;s Okay!</p>
        <button type="button" onClick={handleBackToHome}>
          Let&apos;s Head Back
        </button>
      </div>
    </div>
  );
};

export default Page404;
